import { useState, useEffect } from "react";
import HeroBg from "../assets/Hero_img.png";
import HeroCompo from "../assets/Hero_compo.png";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const fullText = "WOOD SOOL";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTypedText("");
    setCurrentIdx(0);
    const interval = setInterval(() => {
      setCurrentIdx((idx) => {
        if (idx < fullText.length) {
          setTypedText(fullText.slice(0, idx + 1));
          return idx + 1;
        } else {
          clearInterval(interval);
          return idx;
        }
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className=" w-full gap-12 mt-6 md:flex-row flex-col mb-8 md:gap-0 md:h-[400px] flex items-center   bg-center">
      <div className="px-3 w-full md:w-[60%] items-center md:items-start flex flex-col gap-4 ">
        <h1 className=" text-xl md:text-left text-center md:text-4xl font-semibold text-main ">
          Every piece is a story, every design is a legacy.
        </h1>
        <p className="text-gray-800 text-xs text-center md:text-left md:text-base ">
          Hand-carved from passion and shaped by tradition, each creation is a
          testament to craftsmanship and time.
        </p>
        <a
          href="#categories"
          className="-translate-x-2 mt-3 px-6 scale-[.85] md:scale-95 bg-main text-white w-fit rounded-lg py-3 "
        >
          {" "}
          Shop now{" "}
        </a>
      </div>
      <div className=" w-full md:w-[40%]  flex justify-center items-center  ">
        <div className=" w-full h-full rounded-full ">
          <img
            src={HeroBg}
            alt="Woodworking craftsman"
            className="w-full md:scale-90  rounded-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
