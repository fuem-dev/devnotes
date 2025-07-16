// src/app/posts/[slug]/page.tsx
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) return notFound();

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
