
import Link from "next/link";





export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 >  Bienvenue sur mon Portfolio 🚀</h1>
      <p>  Je suis développeur web passionné par Next.js et React.</p>

      <nav>
        <ul>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}