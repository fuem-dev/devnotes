import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "DevNotes",
  description: "Notas técnicas y recursos para frontend developers",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <nav className="bg-white shadow p-4 mb-6">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">DevNotes</h1>
            <span className="text-sm text-gray-500">By Fabio</span>
          </div>
        </nav>
        <main className="max-w-3xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
