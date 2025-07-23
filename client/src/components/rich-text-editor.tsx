import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bold, 
  Italic, 
  List, 
  Quote,
  Link,
  Image,
  Upload,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Write your blog post content...",
  rows = 15 
}: RichTextEditorProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Create a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `blog-media/${fileName}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('blog-media')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('blog-media')
        .getPublicUrl(filePath);

      // Insert image HTML at cursor position
      const imageHtml = `<img src="${publicUrl}" alt="${file.name}" class="blog-image" />`;
      
      // Get the textarea element
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = value.substring(0, start) + '\n' + imageHtml + '\n' + value.substring(end);
        onChange(newValue);
        
        // Set cursor position after the inserted image
        setTimeout(() => {
          textarea.focus();
          const newCursorPos = start + imageHtml.length + 2; // +2 for the newlines
          textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
      }

      setUploadProgress(100);

      toast({
        title: "Success!",
        description: "Image inserted into content.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const insertFormatting = (format: string) => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    let replacement = '';
    switch (format) {
      case 'bold':
        replacement = `<strong>${selectedText || 'Bold text'}</strong>`;
        break;
      case 'italic':
        replacement = `<em>${selectedText || 'Italic text'}</em>`;
        break;
      case 'list':
        replacement = `<ul><li>${selectedText || 'List item'}</li></ul>`;
        break;
      case 'quote':
        replacement = `<blockquote>${selectedText || 'Quote'}</blockquote>`;
        break;
      case 'link':
        replacement = `<a href="https://example.com">${selectedText || 'Link text'}</a>`;
        break;
    }

    const newValue = value.substring(0, start) + replacement + value.substring(end);
    onChange(newValue);

    // Set cursor position after the inserted formatting
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + replacement.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  return (
    <div className="space-y-4">
      {/* Editor Header */}
      <div className="flex items-center justify-between">
        <Label>Content *</Label>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            {isUploading ? "Uploading..." : "Insert Image"}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const previewWindow = window.open('', '_blank');
              if (previewWindow) {
                previewWindow.document.write(`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <title>Blog Preview</title>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                      <style>
                        body {
                          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                          line-height: 1.6;
                          color: #333;
                          max-width: 800px;
                          margin: 0 auto;
                          padding: 2rem;
                          background: #fff;
                        }
                        .blog-image {
                          max-width: 100%;
                          height: auto;
                          border-radius: 8px;
                          margin: 1rem 0;
                          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        h1, h2, h3, h4, h5, h6 {
                          margin-top: 2rem;
                          margin-bottom: 1rem;
                          font-weight: 600;
                        }
                        p {
                          margin-bottom: 1rem;
                        }
                        ul, ol {
                          margin-bottom: 1rem;
                          padding-left: 2rem;
                        }
                        blockquote {
                          border-left: 4px solid #e5e7eb;
                          padding-left: 1rem;
                          margin: 1rem 0;
                          font-style: italic;
                          color: #6b7280;
                        }
                        a {
                          color: #3b82f6;
                          text-decoration: underline;
                        }
                        strong {
                          font-weight: 600;
                        }
                        em {
                          font-style: italic;
                        }
                        .preview-header {
                          text-align: center;
                          margin-bottom: 2rem;
                          padding-bottom: 1rem;
                          border-bottom: 2px solid #e5e7eb;
                        }
                        .preview-header h1 {
                          color: #1f2937;
                          margin: 0;
                        }
                        .preview-header p {
                          color: #6b7280;
                          margin: 0.5rem 0 0 0;
                        }
                      </style>
                    </head>
                    <body>
                      <div class="preview-header">
                        <h1>Blog Preview</h1>
                        <p>This is how your blog post will appear</p>
                      </div>
                      <div class="content">
                        ${value}
                      </div>
                    </body>
                  </html>
                `);
                previewWindow.document.close();
              }
            }}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}

      {/* Editor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Editor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Formatting Tools */}
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertFormatting('bold')}
            >
              <Bold className="w-4 h-4 mr-1" />
              Bold
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertFormatting('italic')}
            >
              <Italic className="w-4 h-4 mr-1" />
              Italic
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertFormatting('list')}
            >
              <List className="w-4 h-4 mr-1" />
              List
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertFormatting('quote')}
            >
              <Quote className="w-4 h-4 mr-1" />
              Quote
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertFormatting('link')}
            >
              <Link className="w-4 h-4 mr-1" />
              Link
            </Button>
          </div>

          {/* Textarea */}
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className="font-mono text-sm"
            required
          />
        </CardContent>
      </Card>

      {/* Instructions */}
      <div className="text-sm text-muted-foreground">
        <p><strong>Instructions:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Use the formatting buttons to add HTML tags</li>
          <li>Click "Insert Image" to upload and insert images inline</li>
          <li>Images will appear exactly where your cursor is positioned</li>
          <li>Click "Preview" to open a new tab and see how your content will look</li>
          <li>You can also paste image URLs directly: <code>&lt;img src="url" /&gt;</code></li>
        </ul>
      </div>
    </div>
  );
} 