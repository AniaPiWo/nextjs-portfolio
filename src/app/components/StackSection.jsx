"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const stackList = [
  {
    metric: "HTML5",
    value: "",
  },
  {
    metric: "CSS3",
    value: "100",
  },
  {
    metric: "Javascript",
    icon: "/images/stack/JS.png",
  },
  {
    metric: "Typescript",
    value: "100",
  },
  {
    metric: "ReactJS",
    value: "ReactJS",
  },
  {
    metric: "NextJS",
    value: "7",
  },
  {
    metric: "Prisma",
    value: "5",
  },
  {
    metric: "Tailwind",
    value: "5",
  },
  {
    metric: "Sass",
    value: "5",
  },
];

const StackSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {stackList.map((stack, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 items-center justify-center mx-4 my-4 sm:my-0"
            >
              <Image
                src={stack.icon}
                alt={stack.metric}
                width={60}
                height={30}
              />

              <p className="text-[#ADB7BE] text-base">{stack.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackSection;

/* 
<AnimatedNumbers
includeComma
animateToNumber={parseInt(stack.value)}
locale="en-US"
className="text-white text-4xl font-bold"
configs={(_, index) => {
  return {
    mass: 1,
    friction: 100,
    tensions: 140 * (index + 1),
  };
}}
/> */
