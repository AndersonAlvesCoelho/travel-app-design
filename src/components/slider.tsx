"use client"
import { useSlider } from "@/context/SliderContext";
import { useEffect, useRef, useState } from "react";


export default function Slider() {

  const { sliderData } = useSlider()

  const carouselRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (startX !== null && carouselRef.current) {
        const currentX = event.clientX;
        const diffX = currentX - startX;

        // Verificar se o movimento excedeu 200 pixels para a direita ou para a esquerda
        if (diffX > 200) {
          console.log('Arrastou para a direita');
        } else if (diffX < -200) {
          console.log('Arrastou para a esquerda');
        }
      }
    };

    const handleMouseUp = () => {
      setStartX(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [startX]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setStartX(event.clientX);
  };

  return (
    <section
      ref={carouselRef}
      className="flex flex-col"
      onMouseDown={handleMouseDown}
      style={{ scrollSnapType: 'x mandatory' }}
    >

   
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
        className="flex items-center  cursor-[url('/images/circle.svg'),_pointer]"
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