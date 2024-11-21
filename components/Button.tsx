import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: "button";
  title: string;
  variant: "btn_dark_green" | "btn_green" | "btn_white_text";
  icon?: string;
}

function Button({ type, title, icon, variant }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </button>
  );
}

export default Button;
