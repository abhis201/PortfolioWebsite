import { useTheme } from "@/lib/theme-context";
import styles from "./rich-text-editor.module.css";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichTextEditor(props: ReactQuillProps) {
  const { theme } = useTheme();
  const { value, onChange, placeholder = "Write your blog post content...", ...rest } = props;
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };


  return (
    <div className="space-y-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder}
        className={theme === 'dark' ? styles.darkEditor : undefined}
        {...rest}
      />
    </div>
  );
}