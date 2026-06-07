import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-orange-400 text-white h-12 rounded-full text-xl font-medium"
    >
      {label}
    </button>
  );
}
