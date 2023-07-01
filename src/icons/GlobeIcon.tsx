import React from "react";

export default function GlobeIcon({
  width,
  height,
  style,
  fill,
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      viewBox="0 0 32 32"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.7749 21.3L19.9874 17.125C19.8705 17.0499 19.7379 17.0028 19.5999 16.9875L16.7374 16.6C16.5238 16.5693 16.3061 16.6104 16.1183 16.7167C15.9306 16.823 15.7834 16.9886 15.6999 17.1875L13.9874 21.025C13.9068 21.2035 13.8805 21.4017 13.9116 21.595C13.9427 21.7883 14.0299 21.9683 14.1624 22.1125L16.5124 24.65C16.6186 24.7667 16.6964 24.9064 16.7398 25.0582C16.7831 25.21 16.7909 25.3697 16.7624 25.525L16.2749 28"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.12522 6.94995L7.00022 9.59995C6.90222 9.83521 6.89775 10.099 6.98772 10.3375L8.42522 14.1625C8.4814 14.3219 8.57756 14.4642 8.7045 14.5758C8.83144 14.6875 8.98491 14.7646 9.15022 14.8L11.8252 15.375C11.9737 15.405 12.1131 15.4692 12.2325 15.5625C12.3518 15.6558 12.4478 15.7756 12.5127 15.9125L12.9877 16.9C13.0721 17.0669 13.2006 17.2076 13.3592 17.3068C13.5179 17.4059 13.7007 17.4598 13.8877 17.4625H15.5752"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0627 4.38745L20.2252 6.48745C20.3325 6.68488 20.3711 6.91241 20.3349 7.13419C20.2987 7.35598 20.1897 7.55941 20.0252 7.71245L16.6627 10.75C16.6064 10.8037 16.5434 10.8499 16.4752 10.8875L14.9377 11.7375C14.7911 11.8152 14.6286 11.858 14.4627 11.8625H11.7877C11.5906 11.8635 11.3981 11.9219 11.2338 12.0307C11.0695 12.1395 10.9405 12.2939 10.8627 12.475L9.8252 14.9375"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}