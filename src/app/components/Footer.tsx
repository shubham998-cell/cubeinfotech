import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20 max-w-[1440px] mx-auto px-6 md:px-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/file.svg"
            alt="CubeInfoTech Logo"
            width={150}
            height={40}
            className="mb-6"
          />
          <p className="text-sm max-w-xs">
            CubeInfoTech is a leading web design and development company based
            in Toronto, delivering innovative digital solutions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-sm space-y-2">
            <p>123 Web St, Toronto, ON, Canada</p>
            <p>Email: info@cubeinfotech.com</p>
            <p>Phone: +1 234 567 8900</p>
          </address>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/cubeinfotech"
                aria-label="Facebook"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/cubeinfotech"
                aria-label="Twitter"
                className="hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cubeinfotech"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8">
        &copy; {new Date().getFullYear()} CubeInfoTech. All rights reserved.
      </div>
    </footer>
  );
}
