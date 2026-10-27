interface Accounts {
  email: string;
  twitter: string;
  linkedIn: string;
  gitHub: string;
}

export default function Contact() {
  const accountInfo: Accounts = {
    email: "geleagbaiemmanuel@gmail.com",
    twitter: "Web3Wanderer9",
    linkedIn: "Emmanuel Agbai",
    gitHub: "Emmanuelsomto",
  };

  return (
    <div id="contact" className="text-white mx-6 mt-10">
      <section
        className="flex flex-col justify-start items-start gap-2.5 md:gap-6 mb-6
        md:justify-center md:items-center md:text-center md:mb-8"
      >
        <h2 className="font-geist font-bold text-xl text-slate-200 md:text-2xl tracking-wide">
          Get in touch
        </h2>
        <div className="border border-b border-slate-800 w-full"></div>
        <p className="font-geist-mono font-medium tracking-tighter text-sm md:text-lg text-slate-400 md:mx-6">
          Let's build together or talk smart contracts. Whether you have a
          project in mind, want to collaborate on frontend work, or discuss Web3
          security - my inbox is always open.
        </p>
      </section>

      <section className="flex flex-col justify-start items-start md:justify-center md:items-center md:text-center gap-2 md:gap-4 mb-10">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-geist font-semibold text-base md:text-lg text-slate-200">
            Email:
          </span>
          <a
            href={`mailto:${accountInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-geist-mono font-medium text-slate-400 hover:text-slate-200 active:text-slate-300 duration-400 transition-colors ease-in tracking-tighter"
            aria-label="Email"
          >
            {accountInfo.email}
          </a>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span className="font-geist font-semibold text-base md:text-lg text-slate-200">
            X (formerly Twitter):
          </span>
          <a
            href={`https://x.com/${accountInfo.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-geist-mono font-medium text-slate-400 hover:text-slate-200 active:text-slate-300 duration-400 transition-colors ease-in tracking-tighter"
            aria-label="X (formerly Twiter)"
          >
            {accountInfo.twitter}
          </a>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span className="font-geist font-semibold text-base md:text-lg text-slate-200">
            LinkedIn:
          </span>
          <a
            href={`https://linkedin.com/in/${accountInfo.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-geist-mono font-medium text-slate-400 hover:text-slate-200 active:text-slate-300 duration-400 transition-colors ease-in tracking-tighter"
            aria-label="LinkedIn"
          >
            {accountInfo.linkedIn}
          </a>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span className="font-geist font-semibold text-base md:text-lg text-slate-200">
            GitHub:
          </span>
          <a
            href={`https://github.com/${accountInfo.gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-geist-mono font-medium text-slate-400 hover:text-slate-200 active:text-slate-300 duration-400 transition-colors ease-in tracking-tighter"
            aria-label="GitHub"
          >
            {accountInfo.gitHub}
          </a>
        </div>
      </section>
    </div>
  );
}
