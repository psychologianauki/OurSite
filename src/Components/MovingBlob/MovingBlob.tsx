import React from "react";
import styles from "./MovingBlob.module.css";

type MovingBlobProps = {
  label: string;
  icon: JSX.Element;
  className?: string;
  labelStyles?: React.CSSProperties;
  blobColor?: string;
  spinSpeed?: string;
};

export default function MovingBlob({
  label,
  icon,
  className,
  labelStyles,
  blobColor = "#A673EF",
  spinSpeed = "3s",
}: MovingBlobProps) {
  return (
    <div className={`${styles.blobCont} ${className}`}>
      <div>
        <div className={styles.blobs} style={{ animationDuration: spinSpeed }}>
          <div className={styles.blob} style={{ backgroundColor: blobColor }} />
          <div
            className={styles.blob2}
            style={{ backgroundColor: blobColor }}
          />
        </div>
        {icon}
      </div>
      <div className={styles.label} style={labelStyles}>
        {label}
      </div>
    </div>
  );
}
