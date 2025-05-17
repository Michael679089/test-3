import Link from "next/link";

export default function Home() {
  const name = "Michael";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to My Next.js App!
      </h1>
      <p className="text-lg text-center mb-6">
        This is a simple homepage customized by <strong>{name}</strong>.
      </p>
      <Link
        href="/about"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Learn More About Me
      </Link>
    </main>
  );
}
