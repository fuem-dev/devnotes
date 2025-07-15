import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  content: string;
}

export default function PostCard({ slug, title, content }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="border rounded-2xl p-4 shadow hover:shadow-md transition-all duration-200 bg-white dark:bg-zinc-800">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
          {content.slice(0, 90)}...
        </p>
      </article>
    </Link>
  );
}
