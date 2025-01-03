export default function FooterSection() {
  return (
    <footer className=" text-white py-16 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Lupleg is open source and 100% free.
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Help us provide opportunity for people of all backgrounds by helping
          them develop their programming skills through code practice and
          mentorship.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-600 mb-16"></div>
    </footer>
  );
}
