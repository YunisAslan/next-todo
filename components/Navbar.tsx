import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#623580] flex justify-between items-center p-4 px-32">
      <h2 className="text-white text-3xl uppercase font-bold">
        <Link href="/">Todo</Link>
      </h2>
      <h2 className="text-white font-bold text-2xl">
        <Link href="/add">Add</Link>
      </h2>
    </nav>
  );
}

export default Navbar;
