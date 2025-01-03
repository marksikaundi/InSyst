export default function FooterSection() {
  return (
    <footer className=" text-white py-16 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          WebAudit is open source and 100% free.
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          We are committed to providing the best tools to help you grow your
          business. If you like our work, please support us by donating towards
          our development of WebAudit.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-600 mb-16"></div>
    </footer>
  );
}
