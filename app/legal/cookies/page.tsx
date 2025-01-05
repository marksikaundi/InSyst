export default function CookiesPage() {
    return (
      <div className="min-h-screen bg-white text-black px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-normal">Cookie Policy</h1>
            <p className="text-black">Last update: July 15th, 2024</p>
          </div>
  
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">What is a Cookie</h2>
            <p className="text-black leading-relaxed">
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-black leading-relaxed">
              They are sent to your browser from a website and stored on your device.
            </p>
          </section>
  
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">How Web Audit Uses Cookies</h2>
            <p className="text-black leading-relaxed">
              Web Audit uses cookies and similar technologies like local storage to track activity on our service and hold certain information.
            </p>
            <p className="text-black leading-relaxed">
              We distinguish between two different types of cookies:
            </p>
            <ul className="space-y-4 text-black">
              <li>
                <span className="font-medium text-white">Essential</span>: Cookies that are strictly necessary for basic website or app functionality.
              </li>
              <li>
                <span className="font-medium text-white">Marketing</span>: Cookies that are used to identify users and collect information about their behavior.
              </li>
            </ul>
            <p className="text-black font-medium">
              Web Audit only uses essential cookies.
            </p>
          </section>
        </div>
      </div>
    )
  }
  
  