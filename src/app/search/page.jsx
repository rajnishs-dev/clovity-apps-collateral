import { Suspense } from "react";
import Link from "next/link";
import { buildSearchIndex } from "@/lib/searchIndexData";
import SearchResults from "./SearchResults";
import SearchBarWrapper from "@/components/SearchBarWrapper";

export default function SearchPage() {
  const searchIndex = buildSearchIndex();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-600">Search</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Search Documentation
      </h1>

      <div className="mb-8">
        <SearchBarWrapper />
      </div>

      <Suspense fallback={<p className="text-gray-400 text-sm">Loading...</p>}>
        <SearchResults searchIndex={searchIndex} />
      </Suspense>
    </div>
  );
}
