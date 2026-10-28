export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-3 md:gap-6 w-full mx-4 mb-6">
        <div className="border border-b border-slate-800"></div>
        <h2 className="font-geist font-medium text-sm text-slate-400 md:text-lg tracking-wide md:text-center">
         &copy; {new Date().getFullYear()} All Rights Reserved.
        </h2>
      </div>
    </footer>
  );
}
