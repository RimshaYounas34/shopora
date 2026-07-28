
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">

        {/* Previous Button */}
        <button
          type="button"
          aria-label="Previous Page"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            border border-gray-200
            flex items-center justify-center
            hover:bg-emerald-600
            hover:text-white
            hover:border-emerald-600
            transition
          "
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

        {/* Page 1 */}
        <button
          type="button"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            bg-emerald-600
            text-white
            font-medium
          "
        >
          1
        </button>

        {/* Page 2 */}
        <button
          type="button"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            border border-gray-200
            hover:bg-emerald-600
            hover:text-white
            hover:border-emerald-600
            transition
          "
        >
          2
        </button>

        {/* Page 3 */}
        <button
          type="button"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            border border-gray-200
            hover:bg-emerald-600
            hover:text-white
            hover:border-emerald-600
            transition
          "
        >
          3
        </button>

        {/* Page 4 */}
        <button
          type="button"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            border border-gray-200
            hover:bg-emerald-600
            hover:text-white
            hover:border-emerald-600
            transition
          "
        >
          4
        </button>

        {/* Next Button */}
        <button
          type="button"
          aria-label="Next Page"
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-lg
            border border-gray-200
            flex items-center justify-center
            hover:bg-emerald-600
            hover:text-white
            hover:border-emerald-600
            transition
          "
        >
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>

      </div>
    </div>
  );
}

export default Pagination;
