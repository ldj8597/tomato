import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="sticky top-0 py-5">
      <input
        type="text"
        placeholder="Search Twitter"
        className="w-full rounded-full border-none bg-slate-100 px-10"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-slate-500" />
    </div>
  );
}
