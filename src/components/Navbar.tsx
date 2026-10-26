import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

interface navLink {
  name: string;
  href: string;
}

const navLinks: navLink[] = [
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Background", href: "#background" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white flex justify-between items-center px-4 py-4 border border-zinc-800 bg-[#09090b] fixed right-0 left-0 top-0 z-50">
      <a
        href="#"
        className="font-geist-mono text-xl md:text-2xl font-black border border-zinc-800 bg-zinc-900 rounded-lg px-4 py-2"
      >
        E
      </a>

      <nav className="hidden md:flex justify-center items-center gap-6 font-medium text-lg font-geist md:mx-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-slate-300 transition-colors duration-200 ease-in"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-200 flex md:hidden justify-center items-center"
      >
        {isOpen ? (
          <LiaTimesSolid className="w-7 h-7 cursor-pointer" />
        ) : (
          <RxHamburgerMenu className="w-7 h-7 cursor-pointer" />
        )}
      </div>

      {isOpen && (
        <div className="absolute flex flex-col gap-4 text-left top-24 left-0 right-0 z-50 p-4 mx-4 border border-slate-900 bg-[#09090b] rounded-lg backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleNavbar}
              className="hover:text-slate-300 active:text-slate-400 transition-colors duration-200 ease-in font-geist font-medium text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
