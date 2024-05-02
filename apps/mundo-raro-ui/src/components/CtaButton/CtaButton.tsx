import React, { FC, MouseEvent } from "react";
import style from "./CtaButton.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ctaText?: string;
}

export const CtaButton: FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  ctaText,
}) => {
  return (
    <button type={type} disabled={disabled} className={style.CtaBtn}>
      {ctaText}
    </button>
  );
};
