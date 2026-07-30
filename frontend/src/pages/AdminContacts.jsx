import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
FaArrowLeft,
FaEnvelope,
FaUser,
FaCalendarAlt,
FaInbox,
} from "react-icons/fa";

function AdminContacts() {
const navigate = useNavigate();

const [contacts, setContacts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

// ================= FETCH CONTACT MESSAGES =================

useEffect(() => {
const fetchContacts = async () => {
try {
setLoading(true);
setError("");

    const response = await fetch(
      "http://localhost:5000/api/contact"
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch contact messages"
      );
    }

    setContacts(
      data.contacts ||
      data.messages ||
      data.data ||
      []
    );

  } catch (error) {
    console.error("Fetch Contacts Error:", error);

    setError(
      "Unable to load contact messages. Please check your backend server."
    );

  } finally {
    setLoading(false);
  }
};

fetchContacts();


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
            Contact Messages
          </h1>

          <p className="text-gray-500 mt-1">
            View messages submitted by your customers.
          </p>

        </div>

      </div>

      <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
        <FaEnvelope />
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
          Loading contact messages...
        </p>

      </div>

    )}


    {/* ================= NO MESSAGES ================= */}

    {!loading && contacts.length === 0 && !error && (

      <div className="bg-white rounded-2xl shadow-sm py-16 text-center">

        <FaInbox className="text-gray-300 text-5xl mx-auto" />

        <p className="text-gray-500 mt-4">
          No contact messages found.
        </p>

      </div>

    )}


    {/* ================= CONTACT MESSAGES ================= */}

    {!loading && contacts.length > 0 && (

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* ================= TITLE ================= */}

        <div className="px-5 sm:px-6 py-5 border-b">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Customer Messages
              </h2>

              <p className="text-gray-500 mt-1">
                {contacts.length} messages received
              </p>

            </div>

            <div className="hidden sm:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

              <FaEnvelope />

              {contacts.length}

            </div>

          </div>

        </div>


        {/* ================= TABLE ================= */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Customer
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Email
                </th>

                <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                  Subject
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

              {contacts.map((contact) => (

                <tr
                  key={contact._id}
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
                          {contact.name || "N/A"}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          ID: {contact._id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* ================= EMAIL ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-gray-600">

                      <FaEnvelope className="text-green-600" />

                      <span>
                        {contact.email || "N/A"}
                      </span>

                    </div>

                  </td>


                  {/* ================= SUBJECT ================= */}

                  <td className="px-6 py-5">

                    <p className="font-semibold text-gray-800">
                      {contact.subject || "N/A"}
                    </p>

                  </td>


                  {/* ================= MESSAGE ================= */}

                  <td className="px-6 py-5 max-w-md">

                    <p className="text-gray-600 whitespace-normal break-words">
                      {contact.message || "N/A"}
                    </p>

                  </td>


                  {/* ================= DATE ================= */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-gray-500">

                      <FaCalendarAlt className="text-green-600" />

                      <span>

                        {contact.createdAt
                          ? new Date(
                              contact.createdAt
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

export default AdminContacts;
