import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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
              src="/sample.svg"
              alt="WebAudit Logo"
              width={128}
              height={128}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-tight">
            Building the modern
            <br />
            WebAudit platform
          </h1>

          {/* About who is WebAudit */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            WebAudit is a website security platform that helps you secure your
            website by checking for vulnerabilities and providing you with a
            detailed report. Our platform is designed to be easy to use and
            accessible to everyone. We believe that website security should be a
            top priority for every website owner, and we are here to help you
            protect your website from cyber threats. Try now!
          </p>

          {/* What we do at WebAudit */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            At WebAudit, we are committed to providing you with the best website
            security platform on the market. Our platform is designed to be easy
            to use, reliable, and secure. We offer a range of features to help
            you secure your website, including vulnerability scanning,
            reporting, and monitoring. Our platform is designed to be accessible
            to everyone, regardless of technical expertise. Try now!
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            The web has come a long way in the last ten years, but why is
            website security stuck in the past? It doesn&apos;t have to be that
            way. We want to change that. We want to reimagine website security.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            We offer a free trial for you to test our platform and see how it
            can help you secure your website. No credit card required. No hidden
            fees. No strings attached. Try now!
          </p>

          {/* Buttom margin */}
          <div className="mt-30" />
        </div>
      </div>
    </div>
  );
}
