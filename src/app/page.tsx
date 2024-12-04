import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-white font-bold mb-4">Welcome to the Quiz App</h1>
      <Link
        href="/quiz"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Start Quiz
      </Link>
    </div>
  );
}
