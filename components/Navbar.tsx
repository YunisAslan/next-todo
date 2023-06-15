import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-32 bg-black p-4">
      <h2 className="text-white font-bold text-3xl uppercase">
        <Link href="/">TOODO</Link>
      </h2>

      <h2 className="text-white text-lg">
        <Link href="/add">./add</Link>
      </h2>
    </nav>
  );
}

export default Navbar;
