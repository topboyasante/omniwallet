import React from "react";
import { Text as RNTextComponent } from "react-native";

export default function CustomTextComponent({ type, content, additionalClasses }) {
  const fontClass =
    type === "regular"
      ? "font-['manrope-reg']"
      : type === "semibold"
      ? "font-['manrope-semibold']"
      : type === "bold"
      ? "font-['manrope-bold']"
      : "font-['manrope-reg']";

  const combinedClass = `${fontClass} ${additionalClasses}`;

  return <RNTextComponent className={combinedClass}>{content}</RNTextComponent>;
}
