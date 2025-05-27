import Header from "@/components/header";
import profile from "../../public/profile.png";

export default function Home() {
  return (
    <div className="min-h-screen border-2 border-black flex flex-col items-center">
      <Header />
      <div className="w-full flex justify-center mt-10">
        <div
          className="flex flex-col items-center gap-4 
          bg-white/3 backdrop-blur-md border border-white/30 
          rounded-xl shadow-md p-6 w-[90%] max-w-lg"
        >
          <div className="avatar">
            <div className="ring-success ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={profile.src} />
            </div>
          </div>
          <h2 className="text-md xs:text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Hi, I'm <span className="">Rahul.</span>
          </h2>
          <div className="flex gap-2 border-2 border-gray-300 px-4 py-1 rounded-full items-center text-sm xs:text-md sm:text-lg md:text-xl">
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
