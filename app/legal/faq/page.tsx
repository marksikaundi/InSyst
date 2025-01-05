"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Web Audit?",
    answer:
      "Web Audit is a comprehensive web performance analysis and monitoring tool. It helps website owners and developers identify performance issues, track key metrics, and optimize their web applications for better user experience and search engine rankings.",
  },
  {
    question: "How does Web Audit work?",
    answer:
      "Web Audit uses advanced algorithms to analyze various aspects of your website, including load times, resource usage, SEO factors, and user experience metrics. It provides detailed reports and actionable insights to help you improve your website's performance.",
  },
  {
    question: "Is Web Audit suitable for all types of websites?",
    answer:
      "Yes, Web Audit is designed to work with all types of websites, from simple static sites to complex web applications. Whether you're running a personal blog, an e-commerce store, or a large corporate site, Web Audit can provide valuable insights to improve your web performance.",
  },
  {
    question: "How often should I run a Web Audit?",
    answer:
      "We recommend running a Web Audit at least once a month, or after any significant changes to your website. For sites with high traffic or frequent updates, weekly or even daily audits can be beneficial to catch and address performance issues quickly.",
  },
  {
    question: "Can Web Audit help improve my website's SEO?",
    answer:
      "Web Audit includes SEO analysis as part of its comprehensive review. It checks for common SEO issues like missing meta tags, broken links, and poor mobile responsiveness, all of which can impact your search engine rankings.",
  },
  {
    question: "Is my website data secure with Web Audit?",
    answer:
      "Yes, we take data security very seriously. All data collected by Web Audit is encrypted in transit and at rest. We do not share your data with third parties, and you have full control over your data, including the ability to delete it at any time.",
  },
  {
    question: "Does Web Audit offer real-time monitoring?",
    answer:
      "Yes, Web Audit offers real-time monitoring features in our premium plans. This allows you to track your website's performance continuously and receive instant alerts if any issues are detected.",
  },
  {
    question: "How do I get started with Web Audit?",
    answer:
      "Getting started is easy! Simply sign up for an account on our website, add your website URL, and run your first audit. Our user-friendly dashboard will guide you through the process and help you interpret the results.",
  },
];

function FAQItem({
  question,
  answer,
  className,
}: {
  question: string;
  answer: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-800 py-4 ${className}`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-normal">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-black" />
        ) : (
          <ChevronDown className="w-6 h-6 text-black" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-300 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default function FAQContent() {
  return (
    <div className="max-w-3xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-normal mt-20">
          Frequently Asked Questions
        </h1>
        <p className="text-black">
          Find answers to common questions about Web Audit
        </p>
      </div>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem
            className="text-black"
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>
    </div>
  );
}
