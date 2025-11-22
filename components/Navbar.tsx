import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800/60 bg-black/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg font-bold text-purdue-gold hover:text-purdue-gold-dark transition-colors duration-200 tracking-tight"
          >
            Dhruv Chaudhary
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm md:text-base text-gray-300 hover:text-purdue-gold transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purdue-gold transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-sm md:text-base text-gray-300 hover:text-purdue-gold transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purdue-gold transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
