
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DevNotes",
  description: "Blog para desarrolladores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-white text-zinc-800 dark:bg-zinc-900">
        <Header />
        <main className="flex-1 px-4 py-6 max-w-2xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
