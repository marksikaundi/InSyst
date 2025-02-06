import Link from "next/link";

export default function Nav() {
  return (
    <div className=" ">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              {/* FOR A LOGO IMAGE USE THESE */}
              {/* <Image
                src="/xlogo.svg"
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              /> */}
              <h2 className="h-12 w-auto text-black font-bold mt-2 text-lg">
                WebAudit
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/premium"
              className="text-black hover:text-black  hidden md:block"
            >
              Contribute
            </Link>

            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white hover:bg-black"
            >
              Try now free
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
