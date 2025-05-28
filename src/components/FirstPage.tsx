import Header from "@/components/header";
import profile from "../../public/profile.png";
import Typing from "@/components/typer";
import { Architects_Daughter } from "next/font/google";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function FirstPage() {
  return (
    <div className="h-fit flex flex-col items-center">
      <Header />
      <div className="w-full flex items-center justify-center mt-10">
        <div
          className="flex flex-col items-center gap-4 
          bg-white/3 backdrop-blur-md border border-white/30 
          rounded-xl shadow-md p-10 w-[90%] max-w-4xl"
        >
          <div className="avatar">
            <div className="ring-success ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2">
              <img src={profile.src} />
            </div>
          </div>
          <div className="">
            <h2 className="text-xl base:text-2xl sm:text-3xl md:text-4xl font-[550] text-center">
              Heya, I'm&nbsp;
              <span
                className={`${architects.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl glitch-add`}
              >
                Rahul.
              </span>
            </h2>
            <Typing />
          </div>
          <div className="flex gap-2 border-2 border-zinc-600/75 px-4 py-1 rounded-full items-center text-xs xs:text-sm sm:text-base font-medium">
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status rounded-full status-success animate-ping"></div>
              <div className="status rounded-full status-success"></div>
            </div>
            Ready for collaboration.
          </div>
        </div>
      </div>
    </div>
  );
}
