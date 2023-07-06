"use client"
import { ReactNode, createContext, useContext, useState } from "react";


type ListSliderProps = {
  title: string;
  subTitle: string;
  prefixes: string;
  index: string;
}

type SliderContextProps = {
  setpSlider: number;
  sliderData: ListSliderProps[];

  getSliderData: (value: number) => ListSliderProps[];
  setSetpSlider: (value: number) => void;
  handleSlideController: (value: number) => void;

};

export const Slider = createContext({} as SliderContextProps);

// -------------------------------------------------------------------------

interface Props {
  children: ReactNode;
}

export function SliderContextProvider({ children }: Props) {

  const DATA = [
    {
      index: "01",
      title: "Nome pais 1",
      subTitle: "Subnome 1",
      prefixes: "PRE 1",
      img: "/imagens/travel/1.png"
    },
    {
      index: "02",
      title: "Nome pais 2",
      subTitle: "Subnome 2",
      prefixes: "PRE 2",
      img: "/imagens/travel/2.png"
    },
    {
      index: "03",
      title: "Nome pais 3",
      subTitle: "Subnome 3",
      prefixes: "PRE 3",
      img: "/imagens/travel/3.png"
    },
    {
      index: "04",
      title: "Nome pais 4",
      subTitle: "Subnome 4",
      prefixes: "PRE 4",
      img: "/imagens/travel/4.png"
    },
    {
      index: "05",
      title: "Nome pais 5",
      subTitle: "Subnome 5",
      prefixes: "PRE 5",
      img: "/imagens/travel/5.png"
    },
    {
      index: "06",
      title: "Nome pais 6",
      subTitle: "Subnome 6",
      prefixes: "PRE 6",
      img: "/imagens/travel/6.png"
    },
    {
      index: "07",
      title: "Nome pais 7",
      subTitle: "Subnome 7",
      prefixes: "PRE 7",
      img: "/imagens/travel/7.png"
    },
  ]

  const COUNT = 3;
  const [setpSlider, setSetpSlider] = useState(0)
  const [sliderData, setSliderData] = useState<ListSliderProps[]>(getSliderData(0, 3))

 

  function getSliderData(startPosition: number) {
    const slicedData = DATA.slice(startPosition, startPosition + COUNT);
    const firstItems = DATA.slice(0, Math.max(0, COUNT - slicedData.length));

    return [...slicedData, ...firstItems];
  }

  function handleSlideController(startPosition: number) {

    const slicedData = DATA.slice(startPosition, startPosition + COUNT);
    const firstItems = DATA.slice(0, Math.max(0, COUNT - slicedData.length));

    setSliderData([...slicedData, ...firstItems])
  }


  return (
    <Slider.Provider
      value={{
        setpSlider,
        sliderData,

        handleSlideController,
        getSliderData,
        setSetpSlider,
      }}
    >
      {children}
    </Slider.Provider>
  );
}

export const useSlider = () => {
  return useContext(Slider);
};