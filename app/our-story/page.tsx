interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  className = "",
}) => <span className={`text-black font-bold ${className}`}>{children}</span>;

export default function OurStory() {
  return (
    <section className=" min-h-screen flex items-center justify-center px-4 py-16">
     
      <div className="max-w-2xl mx-auto space-y-12">
        <h2 className="text-black text-4xl md:text-5xl font-medium text-center mb-16">
          Our story
        </h2>

        <div className="space-y-8 text-black text-lg md:text-xl leading-relaxed">
          <p>
            WebAudit started with an{" "}
            <HighlightedText>idea to make website security</HighlightedText>{" "}
            accessible to everyone. We wanted to build a platform that would
            help website owners secure their websites by checking for
            vulnerabilities and providing detailed reports.
          </p>

          <p>
            As we started to dig deeper, it{" "}
            <HighlightedText>became clear</HighlightedText> that this was just
            the beginning. We wanted to build something that would not only help
            website owners secure their websites but also help them grow their
            businesses.
          </p>

          <p>
            In 2024, we launched a beta version of WebAudit. It was a simple
            platform that allowed users to scan their websites for
            vulnerabilities and receive detailed reports. The response was{" "}
            <HighlightedText>overwhelmingly positive</HighlightedText>.
          </p>

          <p>
            Since then, we have been working hard to{" "}
            <HighlightedText>improve and expand</HighlightedText> the platform.
            We have added new features, improved the user experience, and
            expanded our team. Our goal is to provide website owners with the
            tools they need to secure their websites and grow their businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
