"use client";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();    


    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-2xl font-bold">About Page</h1>
            <p className="text-lg">This is the about page  of our Next.js application.</p>
            <button onClick={() => router.push("/")} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">go to home</button>
        </div>
    );
}