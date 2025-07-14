# Inline Image Insertion Guide

## 🎯 **New Feature: Inline Image Insertion**

The blog editor now supports **inline image insertion**, allowing you to add images directly into your content while writing, exactly where you want them to appear.

## ✨ **How It Works**

### **1. Writing Your Blog Post**
- Write your content normally in the editor
- Place your cursor exactly where you want an image to appear
- Click the **"Insert Image"** button
- Select an image file
- The image will be uploaded to Supabase storage and inserted at your cursor position

### **2. Image Placement**
- Images appear exactly where your cursor was positioned
- You can place images between paragraphs, in the middle of text, or anywhere you want
- Images are automatically styled with the `blog-image` class for consistent appearance

### **3. Live Preview**
- Use the **"Preview"** button to see how your content will look
- The preview shows exactly how images will appear in the final blog post
- Toggle between editor and preview modes

## 🛠️ **Features**

### ✅ **Rich Text Editor**
- **Bold/Italic**: Format text with buttons
- **Lists**: Create bullet and numbered lists
- **Quotes**: Add blockquotes
- **Links**: Insert hyperlinks
- **HTML Support**: Full HTML content support

### ✅ **Inline Image Upload**
- **Direct Upload**: Images upload directly to Supabase storage
- **Cursor Positioning**: Images insert exactly where your cursor is
- **Progress Bar**: Visual upload progress
- **Error Handling**: Clear error messages if upload fails

### ✅ **Preview System**
- **Live Preview**: See your content as it will appear
- **Side-by-Side**: Editor and preview can be viewed together
- **Responsive Design**: Preview matches final blog layout

## 📝 **Usage Instructions**

### **Step 1: Start Writing**
1. Go to `/admin`
2. Fill in the basic information (title, excerpt, etc.)
3. Start writing your content in the rich text editor

### **Step 2: Insert Images**
1. **Position your cursor** where you want the image
2. **Click "Insert Image"** button
3. **Select an image file** from your computer
4. **Wait for upload** (progress bar shows status)
5. **Image appears** at your cursor position

### **Step 3: Format Content**
- Use the formatting buttons (Bold, Italic, List, Quote, Link)
- Selected text will be wrapped with the appropriate HTML tags
- If no text is selected, placeholder text will be inserted

### **Step 4: Preview and Publish**
1. **Click "Preview"** to see how your content looks
2. **Make adjustments** as needed
3. **Set publish status** (draft or published)
4. **Click "Create Blog Post"** to publish

## 🎨 **Example Workflow**

```
1. Write your introduction paragraph
2. Place cursor at the end of the paragraph
3. Click "Insert Image" and select a relevant image
4. Write the next paragraph
5. Place cursor in the middle of the paragraph
6. Click "Insert Image" and select another image
7. Continue writing with images placed exactly where you want them
```

## 📋 **HTML Tags You Can Use**

- **Bold**: `<strong>text</strong>`
- **Italic**: `<em>text</em>`
- **Lists**: `<ul><li>item</li></ul>`
- **Quotes**: `<blockquote>quote</blockquote>`
- **Links**: `<a href="url">text</a>`
- **Images**: `<img src="url" alt="description" class="blog-image" />`

## 🔧 **Technical Details**

### **Image Storage**
- Images are stored in Supabase `blog-media` bucket
- Unique filenames prevent conflicts
- Public URLs for easy access
- Automatic CSS styling with `blog-image` class

### **Cursor Management**
- Images insert at exact cursor position
- Cursor moves to end of inserted image
- You can continue typing immediately after image insertion

### **Error Handling**
- Upload progress indicator
- Clear error messages for failed uploads
- Graceful fallback if image insertion fails

## 🚀 **Benefits**

1. **Natural Writing Flow**: Add images as you write, not after
2. **Precise Placement**: Images appear exactly where you want them
3. **Live Preview**: See results immediately
4. **No Separate Media Library**: Everything happens inline
5. **Better UX**: More intuitive than separate media management

## 🎯 **Tips for Best Results**

1. **Plan Your Layout**: Think about where images should go before writing
2. **Use Preview**: Regularly check how your content looks
3. **Optimize Images**: Use appropriately sized images for web
4. **Add Alt Text**: Images automatically get alt text from filename
5. **Test Responsiveness**: Check how images look on different screen sizes

The inline image insertion feature makes blog writing much more natural and intuitive! 