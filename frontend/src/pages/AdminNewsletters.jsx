import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
FaArrowLeft,
FaNewspaper,
FaEnvelope,
FaCalendarAlt,
FaInbox,
} from "react-icons/fa";

function AdminNewsletters() {
const navigate = useNavigate();

const [newsletters, setNewsletters] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

// ================= FETCH NEWSLETTER SUBSCRIBERS =================

useEffect(() => {
const fetchNewsletters = async () => {
try {
setLoading(true);
setError("");


    const response = await fetch(
      "http://localhost:5000/api/newsletter"
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch newsletter subscribers"
      );
    }

    setNewsletters(
      data.newsletters ||
      data.subscribers ||
      data.data ||
      []
    );

  } catch (error) {
    console.error("Fetch Newsletters Error:", error);

    setError(
      "Unable to load newsletter subscribers. Please check your backend server."
    );

  } finally {
    setLoading(false);
  }
};

fetchNewsletters();


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
            Newsletter Subscribers
          </h1>

          <p className="text-gray-500 mt-1">
            View all customers subscribed to your newsletter.
          </p>

        </div>

      </div>

      <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
        <FaNewspaper />
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
          Loading subscribers...
        </p>

      </div>

    )}


    {/* ================= NO SUBSCRIBERS ================= */}

    {!loading && newsletters.length === 0 && !error && (

      <div className="bg-white rounded-2xl shadow-sm py-16 text-center">

        <FaInbox className="text-gray-300 text-5xl mx-auto" />

        <p className="text-gray-500 mt-4">
          No newsletter subscribers found.
        </p>

      </div>

    )}


    {/* ================= SUBSCRIBERS ================= */}

    {!loading && newsletters.length > 0 && (

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* ================= TITLE ================= */}

        <div className="px-5 sm:px-6 py-5 border-b">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                All Subscribers
              </h2>

              <p className="text-gray-500 mt-1">
                {newsletters.length} newsletter subscribers
              </p>

            </div>

            <div className="hidden sm:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

              <FaNewspaper />

              {newsletters.length}

            </div>

          </div>

        </div>


        {/* ================= TABLE ================= */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  #
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Email
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Subscription Date
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {newsletters.map((subscriber, index) => (

                <tr
                  key={subscriber._id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  {/* ================= NUMBER ================= */}

                  <td className="px-6 py-5">

                    <div className="w-9 h-9 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>

                  </td>


                  {/* ================= EMAIL ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">

                        <FaEnvelope />

                      </div>

                      <div>

                        <p className="font-semibold text-gray-800">
                          {subscriber.email || "N/A"}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          ID: {subscriber._id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* ================= DATE ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-gray-500">

                      <FaCalendarAlt className="text-green-600" />

                      <span>

                        {subscriber.createdAt
                          ? new Date(
                              subscriber.createdAt
                            ).toLocaleDateString()
                          : "N/A"}

                      </span>

                    </div>

                  </td>


                  {/* ================= STATUS ================= */}

                  <td className="px-6 py-5">

                    <span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      Subscribed
                    </span>

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

export default AdminNewsletters;
