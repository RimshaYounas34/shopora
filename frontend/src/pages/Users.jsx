import { useEffect, useState } from "react";
import { FaUsers, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/users"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch users"
          );
        }

        setUsers(data.users || []);
      } catch (error) {
        console.error("Fetch Users Error:", error);

        setError(
          "Unable to load users. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <header className="bg-white border-b px-4 sm:px-6 py-5">

        <div className="max-w-7xl mx-auto">

          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 mb-4"
          >
            <FaArrowLeft />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
              <FaUsers />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Users
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all registered users.
              </p>
            </div>

          </div>

        </div>

      </header>


      {/* Main */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {error && (
          <div className="mb-6 bg-red-100 border border-red-200 text-red-700 px-5 py-4 rounded-xl">
            {error}
          </div>
        )}


        {/* Total Users */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <p className="text-gray-500 text-sm">
            Total Registered Users
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {loading ? "..." : users.length}
          </h2>

        </div>


        {/* Loading */}

        {loading && (
          <div className="bg-white rounded-2xl p-16 text-center">

            <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

            <p className="text-gray-500 mt-4">
              Loading users...
            </p>

          </div>
        )}


        {/* No Users */}

        {!loading && users.length === 0 && (
          <div className="bg-white rounded-2xl p-16 text-center">

            <FaUsers className="text-gray-300 text-5xl mx-auto" />

            <p className="text-gray-500 mt-4">
              No users found.
            </p>

          </div>
        )}


        {/* Users Table */}

        {!loading && users.length > 0 && (

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead className="bg-gray-50">

                  <tr>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Name
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Email
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Phone
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Role
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Provider
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {users.map((user) => (

                    <tr
                      key={user._id}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="px-6 py-5 font-semibold text-gray-800">
                        {user.name}
                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {user.email}
                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {user.phone || "N/A"}
                      </td>

                      <td className="px-6 py-5">

                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          {user.role}
                        </span>

                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {user.provider || "local"}
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

export default Users;