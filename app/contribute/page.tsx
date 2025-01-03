import Image from "next/image";
import Link from "next/link";

export default function Contribute() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Starry background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 2px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen grid place-items-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="w-32 h-32 mx-auto mb-12 relative">
            <Image
              src="/placeholder.svg"
              alt="WebAudit Logo"
              width={128}
              height={128}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-tight">
            Contribute to the modern
            <br />
            WebAudit platform
          </h1>

          {/* How you can contribute to WebAudit */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            WebAudit is an open-source project and we welcome contributions from
            the community. There are many ways you can contribute to WebAudit,
            including:
          </p>

          {/* List of ways to contribute */}
          <ul className="text-lg md:text-xl text-black max-w-3xl mx-auto list-disc list-inside leading-relaxed">
            <li>Submitting bug reports and feature requests</li>
            <li>Writing documentation and tutorials</li>
            <li>Improving the platform&apos;s codebase</li>
            <li>Creating new features and tools</li>
            <li>Helping with testing and quality assurance</li>
          </ul>

          {/* What you need when contributing to WebAudit */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            To contribute to WebAudit, you will need a basic understanding of
            web development and experience with Git. You will also need to be
            familiar with the technologies used in the platform, including
            Next.js, Tailwind CSS, and TypeScript.
          </p>

          {/* what you should not do */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            When contributing to WebAudit, please do not submit any code that
            contains security vulnerabilities or that is not well-tested. We
            want to ensure that the platform is secure and reliable for all
            users.
          </p>

          {/* CTA */}
          <Link
            href="#/try-now"
            className=" inline-flex justify-center items-center px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-black transition-colors"
          >
            Check us
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Buttom margin */}
          <div className="mt-30" />
        </div>
      </div>
    </div>
  );
}
