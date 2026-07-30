import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
FaArrowLeft,
FaBoxOpen,
FaUser,
FaEnvelope,
FaPhone,
FaCalendarAlt,
FaInbox,
} from "react-icons/fa";

function AdminProductRequests() {
const navigate = useNavigate();

const [requests, setRequests] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

// ================= FETCH PRODUCT REQUESTS =================

useEffect(() => {
const fetchProductRequests = async () => {
try {
setLoading(true);
setError("");


    const response = await fetch(
      "http://localhost:5000/api/product-request"
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch product requests"
      );
    }

    setRequests(
      data.productRequests ||
      data.requests ||
      data.data ||
      []
    );

  } catch (error) {
    console.error(
      "Fetch Product Requests Error:",
      error
    );

    setError(
      "Unable to load product requests. Please check your backend server."
    );

  } finally {
    setLoading(false);
  }
};

fetchProductRequests();


}, []);

return ( <div className="min-h-screen bg-gray-100">

  {/* ================= HEADER ================= */}

  <header className="bg-white border-b px-4 sm:px-6 py-5">

    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

      <div className="flex items-center gap-4">

        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition"
        >
          <FaArrowLeft />
        </button>

        <div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Product Requests
          </h1>

          <p className="text-gray-500 mt-1">
            View product requests submitted by customers.
          </p>

        </div>

      </div>

      <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
        <FaBoxOpen />
      </div>

    </div>

  </header>


  {/* ================= MAIN ================= */}

  <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

    {/* ================= ERROR ================= */}

    {error && (

      <div className="mb-6 bg-red-100 border border-red-200 text-red-700 px-5 py-4 rounded-xl">
        {error}
      </div>

    )}


    {/* ================= LOADING ================= */}

    {loading && (

      <div className="bg-white rounded-2xl shadow-sm py-16 text-center">

        <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

        <p className="text-gray-500 mt-4">
          Loading product requests...
        </p>

      </div>

    )}


    {/* ================= NO REQUESTS ================= */}

    {!loading && requests.length === 0 && !error && (

      <div className="bg-white rounded-2xl shadow-sm py-16 text-center">

        <FaInbox className="text-gray-300 text-5xl mx-auto" />

        <p className="text-gray-500 mt-4">
          No product requests found.
        </p>

      </div>

    )}


    {/* ================= REQUESTS ================= */}

    {!loading && requests.length > 0 && (

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* ================= TITLE ================= */}

        <div className="px-5 sm:px-6 py-5 border-b">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Customer Product Requests
              </h2>

              <p className="text-gray-500 mt-1">
                {requests.length} product requests received
              </p>

            </div>

            <div className="hidden sm:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

              <FaBoxOpen />

              {requests.length}

            </div>

          </div>

        </div>


        {/* ================= TABLE ================= */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Customer
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Contact
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Product
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Message
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Date
                </th>

              </tr>

            </thead>


            <tbody>

              {requests.map((request) => (

                <tr
                  key={request._id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  {/* ================= CUSTOMER ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-green-100 text-green-600 flex items-center justify-center">

                        <FaUser />

                      </div>

                      <div>

                        <p className="font-semibold text-gray-800">
                          {request.name || "N/A"}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          ID: {request._id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* ================= CONTACT ================= */}

                  <td className="px-6 py-5">

                    <div className="space-y-2">

                      <div className="flex items-center gap-2 text-gray-600">

                        <FaEnvelope className="text-green-600" />

                        <span>
                          {request.email || "N/A"}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-gray-600">

                        <FaPhone className="text-green-600" />

                        <span>
                          {request.phone || "N/A"}
                        </span>

                      </div>

                    </div>

                  </td>


                  {/* ================= PRODUCT ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaBoxOpen className="text-green-600" />

                      <p className="font-semibold text-gray-800">
                        {request.product || "N/A"}
                      </p>

                    </div>

                  </td>


                  {/* ================= MESSAGE ================= */}

                  <td className="px-6 py-5 max-w-md">

                    <p className="text-gray-600 whitespace-normal break-words">
                      {request.message || "N/A"}
                    </p>

                  </td>


                  {/* ================= DATE ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-gray-500">

                      <FaCalendarAlt className="text-green-600" />

                      <span>
                        {request.createdAt
                          ? new Date(
                              request.createdAt
                            ).toLocaleDateString()
                          : "N/A"}
                      </span>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    )}

  </main>

</div>


);
}

export default AdminProductRequests;
