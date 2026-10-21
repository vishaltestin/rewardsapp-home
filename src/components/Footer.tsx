import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  // Mail,
  // MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/images/logo.png"
                  alt="Lukeit Logo"
                  width={140}
                  className="mb-4"
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Global group gifting, rewards & swag platform for modern
                  teams.
                </p>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/LukitGifts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="https://www.instagram.com/lukitgifts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/lukitgifts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCo_48wQvzVQhkFoG05x_Ggg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            {/* <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-3">
                {["About Us", "Careers", "Contact", "Help Center", "Blog"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                Contact
              </h3>
              <div className="space-y-3">
                {/* <div className="flex items-center space-x-3 text-gray-600 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>hello@lukeit.com</span>
                </div> */}
                <div className="flex items-center space-x-3 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a
                    href="tel:+919217177035"
                    className="hover:text-gray-900 transition-colors"
                  >
                    +91 9217177035
                  </a>
                </div>
                {/* <div className="flex items-center space-x-3 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Global HQ</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Lukeit. All rights reserved.
            </div>
            {/* <div className="text-gray-500 text-sm">
              Trusted by 1000+ companies worldwide
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
