import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="flex items-center gap-3">

      <button className="w-10 h-10 rounded-lg border hover:bg-emerald-600 hover:text-white transition">
        <FaChevronLeft className="mx-auto" />
      </button>

      <button className="w-10 h-10 rounded-lg bg-emerald-600 text-white">
        1
      </button>

      <button className="w-10 h-10 rounded-lg border hover:bg-emerald-600 hover:text-white transition">
        2
      </button>

      <button className="w-10 h-10 rounded-lg border hover:bg-emerald-600 hover:text-white transition">
        3
      </button>

      <button className="w-10 h-10 rounded-lg border hover:bg-emerald-600 hover:text-white transition">
        4
      </button>

      <button className="w-10 h-10 rounded-lg border hover:bg-emerald-600 hover:text-white transition">
        <FaChevronRight className="mx-auto" />
      </button>

    </div>
  );
}

export default Pagination;