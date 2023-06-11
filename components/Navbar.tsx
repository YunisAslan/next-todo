import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 px-20 w-full flex justify-between">
      <h2 className="uppercase text-white text-4xl font-bold">
        <Link href="/">Todo</Link>
      </h2>
      
      <h2>
        <Link href="/add" className="uppercase text-white text-4xl font-bold">
          Add
        </Link>
      </h2>
    </nav>
  );
}

export default Navbar;
