import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <div className="px-4">
      <button
        {...props}
        className="w-full bg-orange-400 hover:bg-orange-600 text-white h-12 rounded-full text-xl font-medium"
      >
        {label}
      </button>
    </div>
  );
}
