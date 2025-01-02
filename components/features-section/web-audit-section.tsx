import { Shield } from "lucide-react";

export default function WebAuditSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <Shield className="w-4 h-4" />
          <span>Reliable</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
          The tool that
          <br />
          you can trust
        </h1>

        <div className="space-y-2 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          <p>
            The support that your business needs. The reliability that your team
            needs.
          </p>
          <p>The security that your mission-critical application needs.</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mt-16 px-4">
        {/* Uptime Feature */}
        <div className="space-y-3">
          <h2 className="text-2xl font-medium">99.9% uptime</h2>
          <p className="text-gray-400 leading-relaxed">
            APIs that are built from the ground up to be highly available,
            reliable, and scalable.
          </p>
        </div>

        {/* Security Feature */}
        <div className="space-y-3">
          <h2 className="text-2xl font-medium">Secure & compliant</h2>
          <p className="text-gray-400 leading-relaxed">
            Committed to the security and privacy of customer data, WebAudit is
            GDPR and SOC 2 compliant.
          </p>
        </div>

        {/* Support Feature */}
        <div className="space-y-3">
          <h2 className="text-2xl font-medium">Premium support</h2>
          <p className="text-gray-400 leading-relaxed">
            Our team of experts is here to help you with any issues you may
            encounter. We&apos;re here to help. Always.
          </p>
        </div>
      </div>
    </div>
  );
}
