import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Portfolio
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
