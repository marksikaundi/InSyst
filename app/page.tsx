export default function Hero() {
  return (
    <div className="bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <div className="inline-flex">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-purple-500/10 to-purple-500/20 text-purple-300 px-4 py-2 rounded-full hover:from-purple-500/20 hover:to-purple-500/30 transition-colors"
              >
                Announcing our Series A
                <svg
                  className="w-4 h-4"
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
              </a>
            </div> */}

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                A tool for developers
              </h1>
              <div className="space-y-2 text-gray-400 text-lg sm:text-xl">
                <p>The best way to check if your website has vulnerability.</p>
                <p>Report is delivered direct to your email of your choice.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Try now
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
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:border-gray-600 hover:text-gray-200 transition-colors"
              >
                Contribute
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
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-3xl">
                <div className="w-full h-full" style={{ transform: 'rotateX(10deg) rotateY(45deg)' }}>
                  <div className="grid grid-cols-3 grid-rows-3 gap-2 p-8">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-800 rounded-lg shadow-xl"
                        style={{
                          transform: `translateZ(${Math.random() * 50}px)`,
                          transition: 'transform 0.3s ease-out',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

