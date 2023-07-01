import React from "react";
import Image from "next/image";
import MovingBlob from "@/components/MovingBlob/MovingBlob";
import Programming from "@/icons/Programming";
export default function OfferPage() {
  const thingsToLearn = [
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Advanced Programming",
      spinSpeed: "2.6s",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Data Structures",
      spinSpeed: "2.5s",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Algorithms",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Problem Solving",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "New Tech Stacks",
      spinSpeed: "2s",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Cybersecurity",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Networking",
      spinSpeed: "2.2s",
    },
    {
      icon: <Programming width="64px" height="64px" />,
      label: "Secure Coding",
      spinSpeed: "3.3s",
    },
  ];
  return (
    <div className="w-full min-h-screen  flex align-center relative justify-center ">
      <Image
        alt="programmingGifBg"
        src="/gifs/programming.gif"
        className=" absolute "
        fill
        style={{
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.8,
        }}
      />
      <div className="z-3 w-full p-4 h-full flex flex-col items-center ">
        <div className="w-full  flex flex-col md:flex-row p-12 md:gap-12 ">
          <div
            style={{ color: "#ffd500" }}
            className=" text-4xl font-bold md:w-1/3  "
          >
            Welcome to our Advanced Programming Mastery Program!
          </div>
          <div
            style={{ color: "white" }}
            className="mt-6 md:mt-0 font-semibold text-md md:w-2/3"
          >
            By enrolling in our program, you will gain a deep understanding of
            new advanced tech stacks, enhance your problem-solving skills, and
            master data structures and algorithms.
            <p className="mt-2">
              Program is designed to challenge and inspire you to reach new
              heights in your programming journey. Enroll in our program today
              and embark on a transformative learning experience that will
              propel your career to new heights! Here's what you can expect to
              learn:
            </p>
          </div>
        </div>
        <div className="flex-col m-auto flex md:flex-row p-12 md:flex-wrap md:justify-center md:gap-14 gap-y-24 md:gap-y-24 ">
          {thingsToLearn.map((thing) => (
            <MovingBlob
              icon={thing.icon}
              label={thing.label}
              spinSpeed={thing.spinSpeed}
              className="text-2xl font-bold w-64"
              blobColor="#0466C8"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
