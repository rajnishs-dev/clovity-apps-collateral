import { buildSearchIndex } from "@/lib/searchIndexData";
import SearchBar from "@/components/SearchBar";

const searchIndex = buildSearchIndex();

export default function SearchBarWrapper({ className }) {
  return <SearchBar className={className} searchIndex={searchIndex} />;
}
