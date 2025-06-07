import { Coffee, Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">BIBEK'S CAFE</span>
            </div>
            <p className="text-amber-100 mb-6 leading-relaxed max-w-md">
              Creating memorable coffee experiences since 2012. We're more than just a cafe - 
              we're a community where great coffee and genuine connections come together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@bibekscafe.com"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-amber-100 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-100 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Contact Info</h3>
            <div className="space-y-2 text-amber-100">
              <p>MG Road, Khetrajpur</p>
              <p>Sambalpur, Odisha 768003</p>
              <p>India</p>
              <p className="mt-4">+91 1234567890 -CAFE</p>
              <p>hello@bibekscafe.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm">
            © {currentYear} BIBEK'S CAFE. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-amber-200 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
            <span>for coffee lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;