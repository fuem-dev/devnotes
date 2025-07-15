export const posts: Record<string, { title: string; content: string }> = {
  "nextjs-setup": {
    title: "Cómo configurar Next.js como un pro",
    content: "En este artículo veremos cómo preparar tu entorno moderno...",
  },
  "powerlevel10k": {
    title: "Terminal para desarrolladores serios",
    content: "Powerlevel10k te permite tener una terminal limpia, útil y veloz...",
  },
};

export function getPost(slug: string) {
  return posts[slug];
}

export function getAllPosts() {
  return Object.entries(posts).map(([slug, post]) => ({
    slug,
    ...post,
  }));
}
