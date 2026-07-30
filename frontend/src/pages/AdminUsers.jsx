
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUsers,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGoogle,
  FaUserShield,
  FaInbox,
  FaSyncAlt,
} from "react-icons/fa";

function AdminUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH USERS =================

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      // IMPORTANT:
      // server.js has:
      // app.use("/api/users", userRoutes)

      const response = await fetch(
        "http://localhost:5000/api/users"
      );

      const data = await response.json();

      console.log("Users API Response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch users"
        );
      }

      setUsers(data.users || data.data || []);
    } catch (error) {
      console.error("Fetch Users Error:", error);

      setUsers([]);

      setError(
        error.message ||
          "Unable to load users. Please check your backend server."
      );
    } finally {
      setLoading(false);
    }
  };

  // ================= LOAD USERS =================

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= FORMAT DATE =================

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

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
                Users
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all registered users of your store.
              </p>

            </div>

          </div>

          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
            <FaUsers />
          </div>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= TOP BAR ================= */}

        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Registered Users
              </h2>

              <p className="text-gray-500 mt-1">
                {loading
                  ? "Loading users..."
                  : `${users.length} registered users`}
              </p>

            </div>

            <button
              type="button"
              onClick={fetchUsers}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold transition"
            >
              <FaSyncAlt
                className={loading ? "animate-spin" : ""}
              />

              Refresh
            </button>

          </div>

        </div>


        {/* ================= ERROR ================= */}

        {error && (

          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl">

            <p className="font-semibold">
              Unable to load users
            </p>

            <p className="text-sm mt-1">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchUsers}
              className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold"
            >
              Try Again
            </button>

          </div>

        )}


        {/* ================= LOADING ================= */}

        {loading && (

          <div className="bg-white rounded-2xl shadow-sm py-20 text-center">

            <div className="w-11 h-11 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

            <p className="text-gray-500 mt-4">
              Loading registered users...
            </p>

          </div>

        )}


        {/* ================= NO USERS ================= */}

        {!loading &&
          !error &&
          users.length === 0 && (

            <div className="bg-white rounded-2xl shadow-sm py-20 text-center">

              <FaInbox className="text-gray-300 text-6xl mx-auto" />

              <h3 className="text-xl font-bold text-gray-700 mt-5">
                No Registered Users
              </h3>

              <p className="text-gray-500 mt-2">
                No users have registered yet.
              </p>

            </div>

          )}


        {/* ================= USERS TABLE ================= */}

        {!loading &&
          !error &&
          users.length > 0 && (

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

              {/* ================= TABLE HEADER ================= */}

              <div className="px-5 sm:px-6 py-5 border-b">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-bold text-gray-800">
                      All Users
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Complete registered user information
                    </p>

                  </div>

                  <div className="hidden sm:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

                    <FaUsers />

                    {users.length}

                  </div>

                </div>

              </div>


              {/* ================= TABLE ================= */}

              <div className="overflow-x-auto">

                <table className="w-full min-w-[1150px]">

                  <thead className="bg-gray-50">

                    <tr>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        User
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Email
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Phone
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Address
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Provider
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Role
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600 font-semibold">
                        Joined
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {users.map((user) => (

                      <tr
                        key={user._id}
                        className="border-t hover:bg-gray-50 transition"
                      >

                        {/* ================= USER ================= */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            {user.image ? (

                              <img
                                src={user.image}
                                alt={user.name || "User"}
                                className="w-12 h-12 rounded-full object-cover border border-gray-200"
                              />

                            ) : (

                              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">
                                <FaUser />
                              </div>

                            )}

                            <div>

                              <p className="font-semibold text-gray-800">
                                {user.name || "N/A"}
                              </p>

                              <p className="text-xs text-gray-400 mt-1">
                                ID: {user._id || "N/A"}
                              </p>

                            </div>

                          </div>

                        </td>


                        {/* ================= EMAIL ================= */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-gray-600">

                            <FaEnvelope className="text-green-600 flex-shrink-0" />

                            <span>
                              {user.email || "N/A"}
                            </span>

                          </div>

                        </td>


                        {/* ================= PHONE ================= */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-gray-600">

                            <FaPhone className="text-green-600 flex-shrink-0" />

                            <span>
                              {user.phone || "N/A"}
                            </span>

                          </div>

                        </td>


                        {/* ================= ADDRESS ================= */}

                        <td className="px-6 py-5">

                          <div className="flex items-start gap-2 text-gray-600 max-w-[220px]">

                            <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />

                            <span>
                              {user.address || "N/A"}
                            </span>

                          </div>

                        </td>


                        {/* ================= PROVIDER ================= */}

                        <td className="px-6 py-5">

                          {user.provider === "google" ? (

                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">

                              <FaGoogle />

                              Google

                            </span>

                          ) : (

                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">

                              <FaUser />

                              Local

                            </span>

                          )}

                        </td>


                        {/* ================= ROLE ================= */}

                        <td className="px-6 py-5">

                          {user.role === "admin" ? (

                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">

                              <FaUserShield />

                              Admin

                            </span>

                          ) : (

                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

                              <FaUser />

                              User

                            </span>

                          )}

                        </td>


                        {/* ================= JOINED ================= */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-gray-500">

                            <FaCalendarAlt className="text-green-600" />

                            <span>
                              {formatDate(user.createdAt)}
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

export default AdminUsers;
