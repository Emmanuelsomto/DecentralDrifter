export default function Hero() {
  return (
    <>
      <div className="text-white flex flex-col justify-start items-start md:justify-center md:items-center md:text-center mx-6 md:mx-12 mt-28 mb-6 md:mb-16 gap-4 md:gap-7">
        <h1 className="font-geist font-black text-xl md:text-4xl text-slate-200 leading-relaxed">
          Building frontend applications and diving into smart contracts.
        </h1>
        <p className="font-geist-mono font-medium text-sm md:text-lg tracking-tight text-slate-400">
          Frontend developer working with React, TypeScript, and Tailwind CSS,
          currently expanding into Web3 with Solidity. Focused on building clean
          interfaces, understanding smart contract security, and bridging the
          gap between web apps and onchain protocols.
        </p>
        <p className="font-semibold text-slate-300 font-geist text-xs md:text-base md:text-center tracking-tighter md:tracking-normal">
          Based in Nigeria - Available for work and collaborations.
        </p>
      </div>

      <div className="flex justify-start items-start md:justify-center md:items-center gap-4 mx-6">
        <button className="border border-slate-700 bg-white text-black px-3 py-2 md:px-6 md:py-4 rounded-lg  hover:bg-slate-200 active:bg-slate-300 ease-in transition-colors duration-200 cursor-pointer">
          <a
            href="#projects"
            className="font-semibold md:font-bold font-geist text-sm md:text-base"
          >
            View Projects
          </a>
        </button>

        <button className="cursor-pointer border border-zinc-800 bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-700 transition-colors duration-300 ease-in text-white px-4 py-2 md:px-6 md:py-4 rounded-lg font-semibold">
          <a
            href="/resume.pdf"
            download="Emmanuel_Resume.pdf"
            className="font-semibold md:font-bold font-geist text-sm md:text-base"
          >
            Get Resume
          </a>
        </button>
      </div>
    </>
  );
}
