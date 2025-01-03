"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import FooterSection from "./features-section/footer-section";
import { FcDonate } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About us", path: "/about" },
      { name: "Terms", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Challenge", path: "/challenges/frontend" },
      { name: "Affiliates", path: "/affiliates" },
      { name: "Partner with Us", path: "/resources/supporting/partner" },
      { name: "Research", path: "/research" },
      { name: "Changelog", path: "/changelogs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Books", path: "/resources/books" },
      { name: "Sitemap", path: "/sitemap" },
      { name: "Tips", path: "/tips" },
      { name: "Projects", path: "https://projects.lupleg.org" },
      { name: "Docs", path: "/docs" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="pt-28">
      <footer className="bg-black p-10 text-white">
        <FooterSection />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h5 className="mb-4 font-bold">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {/* Use Link for internal paths */}
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.path}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support */}
          <div>
            <h5 className="mb-4 font-bold">Support us</h5>
            <div className="mt-8">
              <Button className="bg-[#F3A833] hover:bg-[#F3A833]">
                <FcDonate className="mr-2"  />

                Donate
              </Button>
            </div>
            <div className="pt-5">
              <Button className="border border-[#F3A833] ">
                <Link href="/careers" className="p-2">
                  Careers
                </Link>
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D1537] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-600 py-6 md:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com/Lupleg_Dev">
              <FaXTwitter className="text-white" />

            </Link>
            <Link href="https://facebook.com/lupleg">
              <FaFacebook className="text-white" />
            </Link>
            <Link href="https://linkedin.com/school/lupleg">
              <FaLinkedinIn className="text-white" />
            </Link>
            <Link href="https://github.com/lupleg">
              <FaGithub className="text-white" />
            </Link>
          </div>
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white">
          <p>
            Disclaimer: The programs, courses, and opportunities described on
            this website are based on real offerings. However, any images or
            photographs used are for illustrative purposes only and do not
            represent actual participants or individuals involved. We take this
            step to protect the privacy of those associated with the programs we
            offer.
          </p>
        </div>
      </footer>
    </div>
  );
}