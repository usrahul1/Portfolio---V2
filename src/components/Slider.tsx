import React from "react";
import Image from "next/image";

type TitleItem = {
  titleImg: string;
  titleName: string;
  titleDesc: string;
  titleYear: string | Date;
};

type SliderProps = {
  titleArray: TitleItem[];
};

export default function Slider({ titleArray }: SliderProps) {
  // Duplicate the array for seamless loop effect
  const duplicatedArray = [...titleArray, ...titleArray];

  return (
    <>
      {/* Keyframes defined inside the component */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="flex flex-col mt-8">
        <span className="text-2xl xs:text-2xl sm:text-3xl md:text-2xl font-semibold mx-auto select-none cursor-pointer">
          Me?
        </span>
        <div className="w-full">
          {titleArray.length > 0 && (
            <div className="overflow-hidden relative w-full">
              <div
                className="flex mt-8 animate-scroll"
                style={{
                  width: "fit-content",
                  animation: "scroll-horizontal 20s linear infinite",
                }}
              >
                {duplicatedArray.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 bg-white/5 shadow-md backdrop-blur-md border border-white/30 rounded-md px-4 py-2 items-center whitespace-nowrap flex-shrink-0 mx-4"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={item.titleImg}
                        alt={item.titleName}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-semibold">{item.titleName}</h4>
                      <h5 className="text-zinc-500">{item.titleDesc}</h5>
                      <h6 className="text-xs text-gray-400">
                        {new Date(item.titleYear).getFullYear()}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
