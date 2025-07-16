import Link from "next/link";
import { posts } from "@/lib/posts";


export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">DevNotes</h1>
      <ul className="space-y-2">
        {Object.entries(posts).map(([slug, post]) => (
          <li key={slug}>
            <Link
              href={`/posts/${slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
