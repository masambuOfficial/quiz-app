import { ReactNode } from 'react';
import "./globals.css"

export const metadata = {
  title: 'Quiz App',
  description: 'A simple quiz app built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900"
       style={{
        backgroundImage: "url('https://education.ket.org/wp-content/uploads/2024/07/SPACE-BACKGROUND.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
