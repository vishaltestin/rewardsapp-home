import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            aria-label="RewardsApp home"
          >
            <img src="/images/logo.png" alt="RewardsApp" width={150} />
          </Link>

          <nav
            className="hidden items-center space-x-8 md:flex"
            aria-label="Main navigation"
          >
            <button
              type="button"
              onClick={() => scrollToSection("platform")}
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              Platform
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("solutions")}
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              Solutions
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("catalog")}
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              Catalog
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("results")}
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              Results
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden font-medium sm:inline-flex"
            >
              <Link to="/signup">Sign up</Link>
            </Button>

            <Button
              asChild
              className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl sm:inline-flex"
            >
              <Link to="/book-demo">Book a Demo</Link>
            </Button>

            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-gray-200 bg-white shadow-lg md:hidden">
            <div className="space-y-2 px-4 py-4">
              <button
                type="button"
                onClick={() => scrollToSection("platform")}
                className="block w-full py-2 text-left font-medium text-gray-700 hover:text-gray-900"
              >
                Platform
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("solutions")}
                className="block w-full py-2 text-left font-medium text-gray-700 hover:text-gray-900"
              >
                Solutions
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("catalog")}
                className="block w-full py-2 text-left font-medium text-gray-700 hover:text-gray-900"
              >
                Catalog
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("results")}
                className="block w-full py-2 text-left font-medium text-gray-700 hover:text-gray-900"
              >
                Results
              </button>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center"
                >
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign up
                  </Link>
                </Button>

                <Button
                  asChild
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white hover:from-blue-700 hover:to-purple-700"
                >
                  <Link to="/book-demo" onClick={() => setIsMenuOpen(false)}>
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
