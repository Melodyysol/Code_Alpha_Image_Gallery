import type { InputHTMLAttributes } from "react";

interface FormInputType extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  disabled?: boolean;
}

export default function FormInput({
  type,
  placeholder,
  className = "",
  disabled = false,
  ...props
}: FormInputType) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`input input-bordered w-full ${className}`}
      {...props}
    />
  );
}
