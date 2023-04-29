import React from "react";
import styles from "./MovingBlob.module.css";

type MovingBlobProps = {
  label: string;
  icon: JSX.Element;
  className?: string;
  labelStyles?: React.CSSProperties;
};

export default function MovingBlob({
  label,
  icon,
  className,
  labelStyles,
}: MovingBlobProps) {
  return (
    <div className={`${styles.blobCont} ${className}`}>
      <div>
        <div className={styles.blobs}>
          <div className={styles.blob} />
          <div className={styles.blob2} />
        </div>
        {icon}
      </div>
      <div className={styles.label} style={labelStyles}>
        {label}
      </div>
    </div>
  );
}
