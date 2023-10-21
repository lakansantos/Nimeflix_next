"use client";

import {useGetOtherAnime} from "@/app/hooks/useGetOtherAnime";
import React, {useEffect, useState} from "react";

function LayoutBanner() {
  const [currentIndex, setIndex] = useState(0);

  const {data} = useGetOtherAnime();

  console.log(data);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(currentIndex + 1);
    }, 20000);

    if (currentIndex >= data?.length) {
      setIndex(0);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, data]);

  return !!data ? (
    <div
      id="banner"
      className="banner h-[70vh] sm:h-[70vh]  flex flex-col  justify-between"
      style={{
        background: `url(${
          !!data[currentIndex] ? data[currentIndex].cover : null
        }) center/cover no-repeat rgba(0,0,0, .6)`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="title-description-container text-white h-[100%] z-[99] sm:h-[60vh] flex flex-col justify-center sm:justify-center">
        <div>
          <p className="text-4xl text-white font-bold mb-5 ml-5 h-fit flex justify-center items-center sm:block sm:h-fit max-h-50  text-center sm:text-left w-[90%] tracking-widest">
            {data[currentIndex]
              ? data[currentIndex].title.english
                ? data[currentIndex].title.english
                : data[currentIndex].title.romaji
              : ""}
          </p>
          <p className="w-[90%] ml-5 sm:w-1/2 h-fit text-justify  mb-5">
            {data[currentIndex]
              ? data[currentIndex].description
                  .replace(/<br>/g, "")
                  .slice(0, 170) + "..."
              : "No description"}{" "}
            <a href="" className="underline underline-offset-1">
              See more
            </a>{" "}
          </p>
        </div>
        <div className="w-[90%] ml-5 flex flex-row justify-center gap-[20px] sm:justify-start">
          <button className="bg-white text-black font-bold p-[10px] w-[100px] hover:bg-hoverGray ">
            Play
          </button>
          <button className="bg-grayish p-[10px] w-[100px] hover:bg-darkGray text-white  font-bold">
            More info
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  ) : (
    <div className="banner flex justify-center items-center flex-col h-[50vh] sm:h-[70vh]">
      <div className="loading"></div>
    </div>
  );
}
export default LayoutBanner;
