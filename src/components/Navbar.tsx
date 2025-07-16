import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          DevNotes
        </Link>
        <span className="text-sm text-gray-400">by Fabio</span>
      </div>
    </nav>
  );
}
