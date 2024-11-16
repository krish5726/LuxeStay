const Footer = () => {
  return (
    <div className="bg-teal-600 text-gray-100 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">LuxeStay</h2>
          <p className="text-gray-200">
            Your trusted partner for exceptional stays. Discover the perfect
            hotel for your journey with LuxeStay.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-teal-300 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/destinations"
                className="hover:text-teal-300 transition-colors"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-teal-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-teal-300 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-teal-300 transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-teal-300 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-teal-300 transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-teal-300 transition-colors"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-teal-300 transition-colors"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-teal-300 transition-colors"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300 border-t border-teal-500 pt-6">
        &copy; {new Date().getFullYear()} LuxeStay. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
