export default function Hero() {
  return (
    <>
      <div className="text-white flex flex-col justify-start items-start md:justify-center md:items-center md:text-center mx-6 md:mx-12 mt-28 mb-6 md:mb-10 gap-4">
        <h1 className="font-geist font-bold text-lg md:text-3xl text-slate-200 leading-relaxed">
          Building frontend applications and diving into smart contracts.
        </h1>
        <p className="font-geist-mono font-medium text-xs md:text-sm tracking-tight text-slate-400">
          Frontend developer working with React, TypeScript, and Tailwind CSS,
          currently expanding into Web3 with Solidity. Focused on building clean
          interfaces, understanding smart contract security, and bridging the
          gap between web apps and onchain protocols.
        </p>
        <p className="font-medium text-slate-300 font-geist text-xs md:text-sm md:text-center tracking-tighter md:tracking-normal">
          Based in Nigeria - Available for work and collaborations.
        </p>
      </div>

      <div className="flex justify-start items-start md:justify-center md:items-center gap-4 mx-6">
        <button className="border border-slate-700 bg-white text-black px-2.5 py-1.5 md:px-4 md:py-3 rounded-lg  hover:bg-slate-200 active:bg-slate-300 ease-in transition-colors duration-200 cursor-pointer">
          <a href="#projects" className="font-semibold font-geist text-sm">
            View Projects
          </a>
        </button>

        <button className="cursor-pointer border border-zinc-800 bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-700 transition-colors duration-300 ease-in text-white px-3 py-1.5 md:px-4 md:py-3 rounded-lg font-semibold">
          <a
            href="/resume.pdf"
            download="Emmanuel_Resume.pdf"
            className="font-semibold font-geist text-sm"
          >
            Get Resume
          </a>
        </button>
      </div>
    </>
  );
}
