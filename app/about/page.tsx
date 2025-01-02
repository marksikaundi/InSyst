import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry background pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 2px)`,
          backgroundSize: '30px 30px'
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight">
            Building the modern<br />WebAudit platform
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The web has come a long way in the last ten years, but why is email stuck in the past?
            It doesn&apos;t have to be that way. We want to change that. We want to reimagine email.
          </p>
        </div>
      </div>
    </div>
  )
}

