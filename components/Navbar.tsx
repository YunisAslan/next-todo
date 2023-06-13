import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between px-32 bg-[#5c0404d8] p-4 items-center">

      <h2 className="text-white uppercase font-bold text-3xl">
        <Link href="/">Toodo</Link>
      </h2>

      <h2 className="text-white font-bold text-xl">
        <Link href="/">./add</Link>
      </h2>

    </nav>
  );
}

export default Navbar;
