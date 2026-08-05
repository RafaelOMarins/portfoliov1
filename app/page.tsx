import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1">
      <header className="flex gap-4 justify-end p-4">
        <Link href="main">MAIN</Link> 
        <Link href="main">ABOUT-ME</Link> 
        <Link href="main">PROJECTS</Link> 
        <Link href="main">CONTACT</Link> 
      </header>

    <div className="flex-1 p-32">
      <h1 className="text-5xl ">RAFAEL MARINS  </h1>
      <p className="text-lg"> DEVELOPER </p>

      <img
      src="@/public/foto.jpeg"
      className=""
      >
      </img>
    </div>

    
      <main>
      </main>
    </div>
  );
}
