import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/">
            <Button className="bg-[#2D1537] hover:bg-[#2D1537] ">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
