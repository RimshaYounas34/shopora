import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hidden lg:flex w-[520px] relative"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Products..."
        className="w-full border-2 border-green-500 rounded-full py-3 pl-6 pr-14 outline-none focus:border-green-600"
      />

      <button
        type="submit"
        className="absolute right-2 top-2 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition cursor-pointer"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;