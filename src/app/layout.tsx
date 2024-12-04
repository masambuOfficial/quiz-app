import { ReactNode } from 'react';

export const metadata = {
  title: 'Quiz App',
  description: 'A simple quiz app built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
