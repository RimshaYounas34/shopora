
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const search = searchTerm.trim();

    if (!search) {
      return;
    }

    // Search query ko Shop page par bhejna
    navigate(`/shop?search=${encodeURIComponent(search)}`);

    // Input clear karna
    setSearchTerm("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-full max-w-full sm:max-w-md md:max-w-lg lg:w-[420px] xl:w-[520px]"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Products..."
        className="
          w-full
          h-11
          sm:h-12
          border-2
          border-green-500
          rounded-full
          pl-4
          sm:pl-6
          pr-14
          text-sm
          sm:text-base
          outline-none
          focus:border-green-600
          focus:ring-2
          focus:ring-green-100
          transition
        "
      />

      <button
        type="submit"
        aria-label="Search products"
        className="
          absolute
          right-1
          sm:right-2
          top-1/2
          -translate-y-1/2
          w-9
          h-9
          sm:w-10
          sm:h-10
          rounded-full
          bg-green-600
          hover:bg-green-700
          text-white
          flex
          items-center
          justify-center
          transition
          active:scale-95
        "
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
