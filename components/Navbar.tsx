import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="bg-black ">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/xlogo.svg"
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/premium"
              className="text-white/80 hover:text-white hidden md:block"
            >
              Contribute
            </Link>
            
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-[#2D1537] hover:bg-white/90"
            >
              Try now free
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
