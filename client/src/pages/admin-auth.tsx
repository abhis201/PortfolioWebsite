import { useState } from "react";

type AdminAuthModalProps = {
  onValidate: (inputPassword: string) => void;
  error: string;
};

export function AdminAuthModal({ onValidate, error }: AdminAuthModalProps) {
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-background rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Access</h2>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded mb-4 bg-muted text-foreground"
          placeholder="Enter admin password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") onValidate(inputPassword);
          }}
        />
        <button
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition"
          onClick={() => onValidate(inputPassword)}
        >
          Confirm
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
}