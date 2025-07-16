import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
      <Link href="/" className="text-blue-600 font-bold text-lg hover:underline">
        DevNotes
      </Link>
      <span>by Fabio</span>
    </header>
  );
}
