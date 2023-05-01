import React from "react";
import Image from "next/image";
import styles from "./MovingImageBox.module.css";

type MovingImageBoxProps = {
  image: string;
  label: string;
  icon: JSX.Element;
  textElem: JSX.Element;
  className?: string;
  topCuttPercentage?: string;
  bottomCuttPercentage?: string;
  topAnimationTime?: string;
  bottomAnimationTime?: string;
};

export default function MovingImageBox({
  image,
  label,
  icon,
  textElem,
  className,
  topCuttPercentage,
  bottomCuttPercentage,
  topAnimationTime,
  bottomAnimationTime,
}: MovingImageBoxProps) {
  const bottomCutterStyle = {
    animation: `bottomCutterAnimation ${
      bottomAnimationTime ?? "2s"
    } ease-in-out infinite alternate`,
  };

  const keyframes = `
    @keyframes bottomCutterAnimation {
        0% {
            height: ${bottomCuttPercentage ?? "20%"};
        }
        100% {
            height: 0%;
        }
    }
    @keyframes topCutterAnimation {
        0% {
            height: ${topCuttPercentage ?? "20%"};
        }
        100% {
            height: 0%;
        }
    }
    `;

  const topCutter = {
    animation: `topCutterAnimation ${
      topAnimationTime ?? "2s"
    } ease-in-out infinite alternate`,
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <style>{keyframes}</style>
      <div className={styles.imageCont}>
        <div className={styles.topCutter} style={topCutter} />
        <Image
          className={styles.image}
          src={image}
          fill
          alt={"movingImageBox"}
        />
        <div className={styles.bottomCutter} style={bottomCutterStyle} />
      </div>
      <div className={styles.contentCont}>
        {icon}
        <div className={styles.textCont}>
          {label}
          {textElem}
        </div>
      </div>
    </div>
  );
}
