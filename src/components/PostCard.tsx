
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
}

export default function PostCard({ slug, title }: Props) {
  return (
    <div className="rounded border p-4 shadow-sm hover:shadow-md transition">
      <Link
        href={`/posts/${slug}`}
        className="text-blue-600 text-lg font-semibold hover:underline"
      >
        {title}
      </Link>
    </div>
  );
}
