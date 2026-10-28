interface TechGroup {
  category: string;
  skills: { name: string; status?: string }[];
}

const stackData: TechGroup[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript," },
      { name: "React," },
      { name: "TypeScript," },
      { name: "TailwindCSS," },
      { name: "Vite." },
    ],
  },

  {
    category: "Version Control & Environment",
    skills: [
      { name: "Git (CLI)," },
      { name: "GitHub," },
      { name: "Linux / Bash," },
      { name: "Zed Editor," },
      { name: "Vs Code." },
    ],
  },

  {
    category: "Active Learning & Exploration",
    skills: [
      { name: "Solidity,", status: "Learning" },
      { name: "Foundry.", status: "Learning" },
    ],
  },
];

export default function Stack() {
  return (
    <div id="stack" className="flex flex-col mx-6 mt-8 md:mt-16 gap-4 justify-start items-start md:justify-center md:items-center md:text-center text-white">
      <section className="flex flex-col gap-3 md:gap-4 w-full mb-1">
        <h2 className="font-geist font-bold text-xl text-slate-200 md:text-3xl tracking-wide">
          Technical Stack & Tools
        </h2>
        <div className="border border-b border-slate-800"></div>
      </section>

      <div className="flex flex-col gap-4 md:gap-8">
        {stackData.map((data) => (
          <div key={data.category}>
            <h3 className="font-medium font-geist text-slate-400 text-sm md:text-lg lg:text-xl mb-1.5 lg:mb-3 leading-relaxed">
              {data.category}
            </h3>

            <div className="flex flex-wrap justify-start items-start md:justify-center md:items-center gap-2">
              {data.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="font-geist-mono text-sm text-slate-200 tracking-tighter  md:text-center"
                >
                  {skill.status && <span></span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
