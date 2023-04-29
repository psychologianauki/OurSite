import React from "react";

export default function MouseClick({
  width,
  height,
  fill,
  style,
}: {
  width?: string;
  height?: string;
  fill?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
