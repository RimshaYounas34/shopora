import { useEffect, useState } from "react";

import {
  FaShoppingCart,
  FaUsers,
  FaEnvelope,
  FaNewspaper,
  FaBoxOpen,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function AdminDashboard() {
  // ================= STATES =================

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // ================= FETCH ORDERS =================

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/orders"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch orders."
          );
        }

        setOrders(data.orders || []);

      } catch (error) {
        console.error(
          "Fetch Orders Error:",
          error
        );

        setError(
          "Unable to load orders. Please try again."
        );

      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  // ================= DASHBOARD STATS =================

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum + Number(order.total || 0),
    0
  );

  const pendingOrders = orders.filter(
    (order) =>
      order.status === "Pending"
  ).length;

  // ================= RECENT ORDERS =================

  const recentOrders = orders.slice(0, 5);


  // ================= PAYMENT NAME =================

  const getPaymentName = (payment) => {
    if (payment === "cod") {
      return "Cash On Delivery";
    }

    if (payment === "card") {
      return "Credit / Debit Card";
    }

    if (payment === "paypal") {
      return "PayPal";
    }

    return payment || "N/A";
  };


  // ================= STATUS STYLE =================

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Shipped") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Processing") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-orange-100 text-orange-700";
  };


  // ================= STATUS ICON =================

  const getStatusIcon = (status) => {
    if (status === "Delivered") {
      return <FaCheckCircle />;
    }

    if (status === "Pending") {
      return <FaClock />;
    }

    return null;
  };


  return (
    <div className="min-h-screen bg-gray-100">


      {/* ================= HEADER ================= */}

      <header className="bg-white border-b px-6 py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your store and monitor everything from here.
            </p>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <FaUsers />
            </div>

            <div>

              <p className="font-semibold text-gray-800">
                Admin
              </p>

              <p className="text-sm text-gray-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 py-10">


        {/* ================= ERROR ================= */}

        {error && (

          <div className="mb-6 bg-red-100 border border-red-200 text-red-700 px-5 py-4 rounded-xl">

            {error}

          </div>

        )}


        {/* ================= STATS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {/* TOTAL ORDERS */}

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Total Orders
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {loading ? "..." : totalOrders}
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">

                <FaShoppingCart />

              </div>

            </div>

          </div>


          {/* TOTAL USERS */}

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Total Users
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  —
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">

                <FaUsers />

              </div>

            </div>

          </div>


          {/* TOTAL REVENUE */}

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Total Revenue
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">

                  {loading
                    ? "..."
                    : `$${totalRevenue.toFixed(2)}`
                  }

                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">

                <FaDollarSign />

              </div>

            </div>

          </div>


          {/* PENDING ORDERS */}

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">
                  Pending Orders
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {loading ? "..." : pendingOrders}
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">

                <FaClock />

              </div>

            </div>

          </div>


        </div>


        {/* ================= QUICK ACCESS ================= */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">


          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <FaUsers className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Users
            </h3>

            <p className="text-gray-500 mt-2">
              Manage registered users.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <FaEnvelope className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Contact Messages
            </h3>

            <p className="text-gray-500 mt-2">
              View customer messages.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <FaNewspaper className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Newsletters
            </h3>

            <p className="text-gray-500 mt-2">
              View newsletter subscribers.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <FaBoxOpen className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl">
              Product Requests
            </h3>

            <p className="text-gray-500 mt-2">
              Manage product requests.
            </p>

          </div>


        </div>


        {/* ================= RECENT ORDERS ================= */}

        <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">


          <div className="p-6 border-b">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Recent Orders
                </h2>

                <p className="text-gray-500 mt-1">
                  Latest orders placed by customers.
                </p>

              </div>


              <button
                type="button"
                className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
              >
                View All Orders
              </button>


            </div>

          </div>


          {/* ================= LOADING ================= */}

          {loading && (

            <div className="py-16 text-center">

              <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

              <p className="text-gray-500 mt-4">
                Loading orders...
              </p>

            </div>

          )}


          {/* ================= NO ORDERS ================= */}

          {!loading && orders.length === 0 && (

            <div className="py-16 text-center">

              <FaShoppingCart className="text-gray-300 text-5xl mx-auto" />

              <p className="text-gray-500 mt-4">
                No orders found.
              </p>

            </div>

          )}


          {/* ================= ORDERS TABLE ================= */}

          {!loading && orders.length > 0 && (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">


                <thead className="bg-gray-50">

                  <tr>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Order ID
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Customer
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Total
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Payment
                    </th>

                    <th className="text-left px-6 py-4 text-gray-600">
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {recentOrders.map((order) => (

                    <tr
                      key={order._id}
                      className="border-t hover:bg-gray-50"
                    >


                      {/* ORDER ID */}

                      <td className="px-6 py-5">

                        <span className="font-semibold text-green-600">
                          {order.orderId}
                        </span>

                      </td>


                      {/* CUSTOMER */}

                      <td className="px-6 py-5">

                        <p className="font-semibold text-gray-800">

                          {order.customer?.firstName}{" "}

                          {order.customer?.lastName}

                        </p>

                        <p className="text-sm text-gray-500">
                          {order.customer?.email}
                        </p>

                      </td>


                      {/* TOTAL */}

                      <td className="px-6 py-5 font-bold text-gray-800">

                        ${Number(order.total || 0).toFixed(2)}

                      </td>


                      {/* PAYMENT */}

                      <td className="px-6 py-5 text-gray-600">

                        {getPaymentName(
                          order.paymentMethod
                        )}

                      </td>


                      {/* STATUS */}

                      <td className="px-6 py-5">

                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusStyle(
                            order.status
                          )}`}
                        >

                          {getStatusIcon(
                            order.status
                          )}

                          {order.status}

                        </span>

                      </td>


                    </tr>

                  ))}

                </tbody>


              </table>

            </div>

          )}


        </div>


      </main>

    </div>
  );
}

export default AdminDashboard;