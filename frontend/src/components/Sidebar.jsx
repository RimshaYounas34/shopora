function Sidebar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">

      <h3 className="text-lg font-semibold mb-5">
        Categories
      </h3>

      <ul className="space-y-3 text-gray-600">

        <li className="flex justify-between">
          <span>Electronics</span>
          <span>(12)</span>
        </li>

        <li className="flex justify-between">
          <span>Fashion</span>
          <span>(8)</span>
        </li>

        <li className="flex justify-between">
          <span>Home</span>
          <span>(15)</span>
        </li>

        <li className="flex justify-between">
          <span>Sports</span>
          <span>(6)</span>
        </li>

        <li className="flex justify-between">
          <span>Beauty</span>
          <span>(10)</span>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;