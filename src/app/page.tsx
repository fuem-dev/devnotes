import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Últimos posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} slug={post.slug} title={post.title} />
        ))}
      </div>
    </>
  );
}
