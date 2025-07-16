export const posts: Record<string, { title: string; content: string }> = {
  "nextjs-setup": {
    title: "Cómo configurar Next.js como un pro",
    content: "En este artículo veremos cómo preparar tu entorno moderno...",
  },
  "powerlevel10k": {
    title: "Terminal para desarrolladores serios",
    content: "Powerlevel10k te permite tener una terminal limpia, útil y veloz...",
  },
  "react-performance": {
    title: "Mejora el rendimiento de tus apps React",
    content:
      "Descubre técnicas avanzadas para optimizar el rendimiento en aplicaciones React, como memoización, lazy loading y manejo eficiente del estado.",
  },
  "tailwind-efectivo": {
    title: "Tailwind CSS sin dolor: patrones reales de uso",
    content:
      "Aprende a sacarle el máximo provecho a Tailwind CSS con estrategias prácticas, organización eficiente y componentes reutilizables.",
  },
  "typescript-en-serio": {
    title: "TypeScript para desarrolladores que ya saben JS",
    content:
      "Si ya dominas JavaScript, este artículo te muestra cómo adoptar TypeScript sin frustrarte, enfocándote en tipos útiles, interfaces y herramientas clave.",
  },
  "test-con-confianza": {
    title: "Testea tus componentes sin miedo",
    content:
      "Conoce cómo hacer testing de componentes React con herramientas como Testing Library y Vitest, manteniendo tu código estable y confiable.",
  },
  "next13-routing": {
    title: "Entendiendo el routing en Next.js 13+",
    content:
      "Exploramos el nuevo sistema de routing basado en carpetas de Next.js 13, cómo usar layouts, loading UI y cómo estructurar tu app para escalar.",
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
