  "use client";

  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  import { Link } from "react-router-dom";

  export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // Height of your header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false); // Close mobile menu after click
    };

    return (
      <header className="w-full border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="" width={150} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("platform")}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Platform
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Catalog
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Results
              </button>
              {/* <a
                href="#resources"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Resources
              </a> */}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                className="hidden sm:inline-flex font-medium text-gray-700 hover:text-gray-900"
                onClick={() => scrollToSection("signup")}
              >
                Sign up
              </Button> */}
              <Button
                onClick={() => scrollToSection("demo")}
                variant="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to="/book-demo">Book a Demo</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("platform")}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                >
                  Platform
                </button>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                >
                  Solutions
                </button>
                <button
                  onClick={() => scrollToSection("catalog")}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                >
                  Catalog
                </button>
                <button
                  onClick={() => scrollToSection("results")}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                >
                  Results
                </button>
                {/* <a
                  href="#resources"
                  className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                >
                  Resources
                </a> */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center font-medium"
                    onClick={() => scrollToSection("signup")}
                  >
                    Sign up
                  </Button>
                  <Button
                    onClick={() => scrollToSection("demo")}
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
