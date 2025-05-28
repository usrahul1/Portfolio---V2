import { GrProjects } from "react-icons/gr";
import Image from "next/image";

type Project = {
  image: string;
  projectTitle: string;
  projDesc: string;
  githubLink: string;
};

type ProjectsProps = {
  projArray: Project[];
};

export default function Projects({ projArray }: ProjectsProps) {
  const displayProjects = projArray.slice(0, 4); // Max 4 projects

  return (
    <div className="flex flex-col mt-8 items-center justify-center p-6">
      <div className="flex gap-2 items-center">
        <GrProjects className="w-5 h-5 sm:w-7 sm:h-7" />
        <span className="text-2xl sm:text-3xl font-semibold mx-auto select-none cursor-pointer">
          Projects
        </span>
      </div>

      {displayProjects.length > 0 && (
        <div className="max-w-6xl w-full mx-auto p-6 rounded-xl mt-4">
          <div className="flex flex-wrap justify-center gap-8">
            {displayProjects.map((proj, index) => (
              <div
                key={index}
                className="cursor-pointer w-72 sm:w-64 h-72 sm:h-64 rounded-lg overflow-hidden flex flex-col border border-white/30 bg-white/3 p-3 transition shadow-xl"
              >
                <div className="w-full h-36 overflow-hidden rounded relative">
                  <Image
                    src={proj.image}
                    alt={proj.projectTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-3">
                  {proj.projectTitle}
                </h2>
                <h3 className="text-sm text-gray-500 mt-1">{proj.projDesc}</h3>
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline mt-auto"
                >
                  Click to view. ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
