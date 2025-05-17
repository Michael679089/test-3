import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">About This Project</h1>
            <p className="text-lg max-w-xl text-center mb-6">
                This project is built using <span className="font-semibold">Next.js</span>, a React framework for building fast, modern web apps.
            </p>
            <Link
                href="/"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
                Back to Home
            </Link>
        </main>
    );
}
