import React from "react";
import styles from "./IconBox.module.css";

type IconBoxProps = {
  icon: JSX.Element;
  label: string;
  description: string;
  className?: string;
  fillIconColor?: string;
  iconSize?: string;
};

export default function IconBox({
  icon,
  label,
  description,
  className,
  fillIconColor,
  iconSize,
}: IconBoxProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {React.cloneElement(icon, {
        style: {
          width: iconSize ?? "54px",
          height: iconSize ?? "54px",
          fill: fillIconColor ?? "#BE90F7",
        },
      })}
      <div className={styles.textCont}>
        <h1 className={styles.label}>{label}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
