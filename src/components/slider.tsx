"use client"
import { useSlider } from "@/context/SliderContext";
import { MouseEvent, TouchEvent, useRef, useState } from "react";


export default function Slider() {

  const { sliderData, handleSlideControlle
  } = useSlider()

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [direction, setDirection] = useState<"right" | "left" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const currentX = event.clientX;
    const translateX = currentX - startX;

    slider.style.transform = `translateX(${translateX}px)`;
  };

  const handleSlideController = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = event.clientX;
    const deltaX = currentX - startX;

    if (deltaX > 0) {
      handleSlideController(1)
    } else if (deltaX < 0) {
      handleSlideController(2)
    } else {
      setDirection(null);
    }

    setIsDragging(false);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const currentX = event.touches[0].clientX;
    const translateX = currentX - startX;

    slider.style.transform = `translateX(${translateX}px)`;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = event.changedTouches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX > 0) {
      setDirection("right");
    } else if (deltaX < 0) {
      setDirection("left");
    } else {
      setDirection(null);
    }

    setIsDragging(false);
  };

  return (
    <section className="flex flex-col">

      <div className="flex justify-evenly items-end gap-8 px-8">
        {sliderData.map((item, index) => (
          <>
            {index === 0 ?
              <span className="inline-flex flex-col text-zinc-50 text-5xl w-2/5">
                <h1 className="font-bold">{item.title}</h1>
                <h2 className="font-light">{item.subTitle}</h2>
              </span>
              : <span className="inline-flex flex-col text-zinc-50 text-xl">
                <h1 className="font-bold">{item.title}</h1>
                <h2 className="font-light">{item.prefixes}</h2>
              </span>}
          </>
        ))}


      </div>

      <button
        type="button"
        className="flex items-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h1 className="text-5xl text-zinc-50 font-bold mr-4">{sliderData[0].index}</h1>

        <div className="py-10 border-r-4 border-zinc-50"></div>
        <div className="w-full border-t-4 border-zinc-50"></div>
      </button>

      <div className="flex justify-evenly items-end gap-8 px-8">
        {sliderData.map((item, index) => (
          <>
            {index === 0 ?
              <div className="w-2/5"></div>

              : <h1 className="w-28 items-end text-3xl text-zinc-50">{item.index}</h1>
            }
          </>
        ))}
      </div>
    </section>
  )
} 