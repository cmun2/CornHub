import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28">
      <header className="flex flex-col items-center">
        <Image className="rounded-full" src="/profile.png" alt="Changyong" width={120} height={120} />
        <h1 className="text-2xl font-extrabold mt-4">Chang Yong Mun</h1>
        <p className="text-lg text-gray-400">Frontend Developer</p>
      </header>
      <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4">
        <h1 className="text-2xl font-extrabold">Introduction</h1>
      </section>
      <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4">
        <h1 className="text-2xl font-extrabold">Career</h1>
      </section>
      <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4">
        <h1 className="text-2xl font-extrabold">Study</h1>
      </section>

      {/* Keyword Horizontal Scroll */}
      <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4">
        <h1 className="text-2xl font-extrabold">My Keyword</h1>
        <ul>
          <li>Developer</li>
          <li>Responsibility</li>
          <li>Execution Power</li>
          <li>Cooperation</li>
          <li>Language</li>
        </ul>
      </section>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-4">
        <h2 className="text-2xl font-extrabold">Contact</h2>
      </footer>
    </main>
  );
}
