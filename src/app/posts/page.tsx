import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">DevNotes</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={post.slug} />
        ))}
      </div>
    </div>
  );
}
