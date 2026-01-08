import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold">
          ContextCafe
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/constitution" className="hover:text-black">
            Constitution
          </Link>
          <Link href="/tools" className="hover:text-black">
            Tools
          </Link>
          <Link href="/notes" className="hover:text-black">
            Notes
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
