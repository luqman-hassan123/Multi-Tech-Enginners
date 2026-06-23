export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-blue-900/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide">
          Multi Tech Engineers
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-blue-300 cursor-pointer">About</li>
          <li className="hover:text-blue-300 cursor-pointer">Services</li>
          <li className="hover:text-blue-300 cursor-pointer">Projects</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>

        <button className="md:hidden text-2xl">☰</button>
      </nav>
    </header>
  );
}
