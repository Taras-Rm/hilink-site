import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: "button";
  title: string;
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_white"
    | "btn_dark_green_outline";
  icon?: string;
  full?: boolean;
}

function Button({ type, title, icon, variant, full }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </button>
  );
}

export default Button;
