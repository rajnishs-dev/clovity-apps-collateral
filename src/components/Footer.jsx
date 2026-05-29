import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2e] border-t border-[#1e3a5f]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  width={120}
                  height={35}
                  src="/images/global/png/clovity_logo_white.webp"
                  alt="Clovity"
                  style={{ height: "auto" }}
                />
              </Link>
            </div>
            <p className="text-sm text-blue-200/90 leading-relaxed max-w-xs">
              Atlassian Platinum Solution Partner delivering enterprise AI,
              Atlassian, and workforce solutions globally.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-blue-300 bg-[#1e3a5f] px-2 py-1 rounded-full">
                Atlassian Platinum Partner
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-blue-100 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blue-200/90 hover:text-blue-100 transition-colors"
                >
                  Help Center Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://marketplace.atlassian.com/vendors/398573336/clovity"
                  target="_blank"
                  className="text-blue-200/90 hover:text-blue-100 transition-colors"
                >
                  Atlassian Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-blue-100 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-blue-200/90">
              <li>
                <a
                  href="mailto:info-global@clovity.com"
                  className="hover:text-blue-100 transition-colors"
                >
                  info-global@clovity.com
                </a>
              </li>
                <li>
                <Link
                  href="https://clovity.com/contact"
                  target="_blank"
                  className="text-blue-200/90 hover:text-blue-100 transition-colors"
                >
                  Our Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e3a5f] mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-200/90">
          <p>© {new Date().getFullYear()} Clovity Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for Atlassian Marketplace apps</p>
        </div>
      </div>
    </footer>
  );
}
