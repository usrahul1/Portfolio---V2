import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiPython,
  SiGo,
  SiDjango,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";

const techStack = [
  { name: "NextJS", icon: <SiNextdotjs size={40} /> },
  { name: "ReactJS", icon: <SiReact size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
  { name: "ExpressJS", icon: <SiExpress size={40} /> },
  { name: "GraphQL", icon: <SiGraphql size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Go", icon: <SiGo size={40} /> },
  { name: "Django", icon: <SiDjango size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "NodeJS", icon: <SiNodedotjs size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "AWS", icon: <FaAws size={40} /> },
];

export default function TechStack() {
  return (
    <>
      <div className="flex flex-col mt-8 items-center justify-center p-6">
        <div className="flex gap-2 items-center">
          <HiOutlineSquare3Stack3D className="w-5 h-5 sm:w-7 sm:h-7" />
          <span className="text-2xl xs:text-2xl sm:text-3xl md:text-2xl font-semibold mx-auto select-none cursor-pointer">
            Tech Stack
          </span>
        </div>
        <div className="max-w-4xl mx-auto p-6 rounded-xl border border-white/30 shadow-lg backdrop-blur-md bg-white/3 mt-8">
          <div className="grid max-w-4xl grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 text-center">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="">{tech.icon}</div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
