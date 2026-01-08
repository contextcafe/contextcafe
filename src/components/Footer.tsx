import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        <p className="mb-2">
          ContextCafe is an educational and research-oriented platform. It does
          not provide legal advice or client-specific guidance.
        </p>

        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} ContextCafe</p>
          <Link href="/disclaimer" className="hover:text-black">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
