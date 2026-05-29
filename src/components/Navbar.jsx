"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              width={120}
              height={35}
              src="/images/global/svg/Clovity-logo.svg"
              alt="Clovity"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            <Link
              href="https://clovity.com/contact"
              target="_blank"
              className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              Support
            </Link>
            <Link
              href="https://marketplace.atlassian.com/vendors/398573336/clovity"
              target="_blank"
              className="ml-2 px-3 py-1.5 text-xs font-semibold text-white rounded-md hover:opacity-90 leading-[18px] transition-opacity"
              style={{ backgroundColor: "#0052CC" }}
            >
              Atlassian Marketplace
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            <Link
              href="https://clovity.com/contact"
              target="_blank"
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Support
            </Link>
            <Link
              href="https://marketplace.atlassian.com/vendors/398573336/clovity"
              target="_blank"
              className="mx-3 mt-2 px-3 py-2 text-xs font-semibold text-white rounded-md text-center"
              style={{ backgroundColor: "#0052CC" }}
            >
              Atlassian Marketplace
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
