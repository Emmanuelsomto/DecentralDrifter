import anivaultImg from "../assets/AniVault.png";
import devpulseImg from "../assets/DevPulse.png";
import openboomImg from "../assets/OpenBoom.png";
import { FaGithub } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "OpenBoom",
    description:
      "Web appliaction built for indie musicians and listeners to showcase tracks and connect.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    image: openboomImg,
    github: "https://github.com/Emmanuelsomto/OpenBoom.git",
    live: "https://open-boom.vercel.app/",
  },

  {
    title: "AniVault",
    description:
      "Anime discovery application pulling dynamic data from external REST APIs with responsive filterings.",
    tech: ["React", "TailwindCSS", "Vite", "REST APIs"],
    image: anivaultImg,
    github: "https://github.com/Emmanuelsomto/AniVault.git",
    live: "https://anivault-gilt.vercel.app/",
  },

  {
    title: "DevPulse",
    description:
      "Responsive developer news dashboard aggregating real-time tech updates and community posts.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: devpulseImg,
    github: "https://github.com/Emmanuelsomto/DevPulse.git",
    live: "https://dev-pulse-eight-orpin.vercel.app/",
  },
];
export default function Projects() {
  return (
    <div id="#projects" className="mx-4">
      <section className="mt-10 md:mt-16 md:mx-24 mb-10 flex flex-col justify-start items-start md:justify-center md:items-center md:text-center gap-4">
        <h2 className="font-geist font-medium text-lg text-slate-200 md:text-xl">
          # PROJECTS
        </h2>
        <p className="font-geist-mono font-medium tracking-tighter text-xs md:text-sm  text-slate-400">
          These are applications I've designed, built, and deployed from
          scratch. No canned templates-just React, TypeScript, and clean code.
          Scroll through, inspect the live apps, or dive directly into source
          code.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-1.5 md:gap-4 mb-16">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="border border-black bg-zinc-800/50 rounded-2xl mt-8"
          >
            <div className="aspect-auto">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                loading="lazy"
                className="object-cover h-full w-full rounded-lg"
              />
            </div>

            <section className="flex flex-col  gap-4 mx-4 mt-8 mb-10">
              <h3 className="font-geist font-bold text-xl text-slate-200">
                {project.title}
              </h3>
              <p className="font-geist-mono tracking-tighter font-medium text-sm text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 font-geist-mono text-sm md:text-base">
                {project.tech.map((techItem: string) => (
                  <span key={techItem} className="text-slate-100">
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="flex flex-row gap-4 mt-3">
                <button className="border border-slate-400 text-base text-slate-900 bg-white px-4 py-2 md:py-3 cursor-pointer rounded-lg hover:bg-slate-200 active:bg-slate-100 duration-300 transition-colors ease-in">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold font-geist flex flex-row gap-2 justify-center items-center"
                  >
                    <FaGithub /> GitHub
                  </a>
                </button>

                <button className="border border-zinc-800 bg-zinc-700 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-zinc-600 active:bg-zinc-500 duration-300 transition-colors ease-in">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live &#129133;
                  </a>
                </button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
