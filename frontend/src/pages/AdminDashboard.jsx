
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaUsers,
  FaEnvelope,
  FaNewspaper,
  FaBoxOpen,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function AdminDashboard() {
  const navigate = useNavigate();

  // ================= STATES =================

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [productRequests, setProductRequests] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH DASHBOARD DATA =================

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError("");

        const [
          ordersResponse,
          usersResponse,
          contactsResponse,
          newslettersResponse,
          productRequestsResponse,
        ] = await Promise.all([
          fetch("http://localhost:5000/api/orders"),
          fetch("http://localhost:5000/api/users"),
          fetch("http://localhost:5000/api/contact"),
          fetch("http://localhost:5000/api/newsletter"),
          fetch("http://localhost:5000/api/product-request"),
        ]);

        // ================= ORDERS =================

        if (ordersResponse.ok) {
          const ordersData = await ordersResponse.json();

          setOrders(
            ordersData.orders ||
              ordersData.data ||
              []
          );
        }

        // ================= USERS =================

        if (usersResponse.ok) {
          const usersData = await usersResponse.json();

          setUsers(
            usersData.users ||
              usersData.data ||
              []
          );
        }

        // ================= CONTACTS =================

        if (contactsResponse.ok) {
          const contactsData =
            await contactsResponse.json();

          setContacts(
            contactsData.contacts ||
              contactsData.messages ||
              contactsData.data ||
              []
          );
        }

        // ================= NEWSLETTERS =================

        if (newslettersResponse.ok) {
          const newslettersData =
            await newslettersResponse.json();

          setNewsletters(
            newslettersData.newsletters ||
              newslettersData.subscribers ||
              newslettersData.data ||
              []
          );
        }

        // ================= PRODUCT REQUESTS =================

        if (productRequestsResponse.ok) {
          const productRequestsData =
            await productRequestsResponse.json();

          setProductRequests(
            productRequestsData.productRequests ||
              productRequestsData.requests ||
              productRequestsData.data ||
              []
          );
        }
      } catch (error) {
        console.error(
          "Dashboard Fetch Error:",
          error
        );

        setError(
          "Unable to load dashboard data. Please check your backend server."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // ================= STATS =================

  const totalOrders = orders.length;

  const totalUsers = users.length;

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum + Number(order.total || 0),
    0
  );

  const pendingOrders = orders.filter(
    (order) =>
      String(order.status || "").toLowerCase() ===
      "pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) =>
      String(order.status || "").toLowerCase() ===
      "delivered"
  ).length;

  const cancelledOrders = orders.filter(
    (order) =>
      String(order.status || "").toLowerCase() ===
      "cancelled"
  ).length;

  // ================= RECENT ORDERS =================

  const recentOrders = orders.slice(0, 5);

  // ================= FULL YEAR CHART =================

  const currentYear = new Date().getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData = monthNames.map(
    (monthName, monthIndex) => {
      const monthOrders = orders.filter(
        (order) => {
          if (!order.createdAt) {
            return false;
          }

          const orderDate = new Date(
            order.createdAt
          );

          return (
            orderDate.getMonth() === monthIndex &&
            orderDate.getFullYear() === currentYear
          );
        }
      );

      const revenue = monthOrders.reduce(
        (sum, order) =>
          sum + Number(order.total || 0),
        0
      );

      return {
        month: monthName,
        orders: monthOrders.length,
        revenue,
      };
    }
  );

  // ================= STATUS CHART =================

  const statusData = [
    {
      name: "Delivered",
      value: deliveredOrders,
    },
    {
      name: "Pending",
      value: pendingOrders,
    },
    {
      name: "Cancelled",
      value: cancelledOrders,
    },
  ].filter((item) => item.value > 0);

  const statusColors = [
    "#16a34a",
    "#f59e0b",
    "#ef4444",
  ];

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
    const normalizedStatus = String(
      status || ""
    ).toLowerCase();

    if (normalizedStatus === "delivered") {
      return "bg-green-100 text-green-700";
    }

    if (normalizedStatus === "shipped") {
      return "bg-blue-100 text-blue-700";
    }

    if (normalizedStatus === "processing") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (normalizedStatus === "cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-orange-100 text-orange-700";
  };

  // ================= STATUS ICON =================

  const getStatusIcon = (status) => {
    const normalizedStatus = String(
      status || ""
    ).toLowerCase();

    if (normalizedStatus === "delivered") {
      return <FaCheckCircle />;
    }

    if (normalizedStatus === "pending") {
      return <FaClock />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#f5f7f6]">

      {/* ================= HEADER ================= */}

      <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-5">

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div>

            <div className="flex items-center gap-2">

              <div className="w-2 h-8 bg-green-600 rounded-full"></div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Admin Dashboard
              </h1>

            </div>

            <p className="text-gray-500 mt-2">
              Monitor your store performance and customer activity.
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
              <FaUsers />
            </div>

            <div>

              <p className="font-bold text-gray-800">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= ERROR ================= */}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl">
            {error}
          </div>
        )}

        {/* ================= STAT CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* ORDERS */}

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  Total Orders
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                  {loading ? "..." : totalOrders}
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-3">
                  <FaArrowUp />
                  <span>Store Orders</span>
                </div>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
                <FaShoppingCart />
              </div>

            </div>

          </div>

          {/* USERS */}

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  Total Users
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                  {loading ? "..." : totalUsers}
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-3">
                  <FaArrowUp />
                  <span>Registered Customers</span>
                </div>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
                <FaUsers />
              </div>

            </div>

          </div>

          {/* REVENUE */}

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  Total Revenue
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                  {loading
                    ? "..."
                    : `$${totalRevenue.toFixed(2)}`
                  }
                </h2>

                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-3">
                  <FaArrowUp />
                  <span>All Orders</span>
                </div>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
                <FaDollarSign />
              </div>

            </div>

          </div>

          {/* PENDING */}

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  Pending Orders
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                  {loading ? "..." : pendingOrders}
                </h2>

                <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold mt-3">
                  <FaClock />
                  <span>Needs Attention</span>
                </div>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl">
                <FaClock />
              </div>

            </div>

          </div>

        </div>

        {/* ================= CHARTS ================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          {/* FULL YEAR SALES CHART */}

          <div className="xl:col-span-2 bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-gray-100">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">

              <div>

                <div className="flex items-center gap-2">

                  <FaChartLine className="text-green-600" />

                  <h2 className="text-xl font-bold text-gray-800">
                    Sales Overview
                  </h2>

                </div>

                <p className="text-gray-500 text-sm mt-1">
                  Revenue and orders for {currentYear}.
                </p>

              </div>

              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                {currentYear}
              </div>

            </div>

            <div className="w-full h-[320px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <AreaChart data={monthlyData}>

                  <defs>

                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#16a34a"
                        stopOpacity={0.35}
                      />

                      <stop
                        offset="100%"
                        stopColor="#16a34a"
                        stopOpacity={0.03}
                      />

                    </linearGradient>

                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "14px",
                      border: "none",
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                    formatter={(value, name) => [
                      name === "revenue"
                        ? `$${Number(value).toFixed(2)}`
                        : value,
                      name === "revenue"
                        ? "Revenue"
                        : "Orders",
                    ]}
                  />

                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#16a34a"
                    strokeWidth={3}
                    fill="url(#revenueGradient)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ORDER STATUS */}

          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-gray-100">

            <div className="flex items-center gap-2">

              <FaShoppingCart className="text-green-600" />

              <h2 className="text-xl font-bold text-gray-800">
                Order Status
              </h2>

            </div>

            <p className="text-gray-500 text-sm mt-1">
              Current order distribution.
            </p>

            <div className="h-[250px] mt-4">

              {statusData.length > 0 ? (

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <PieChart>

                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={4}
                      dataKey="value"
                    >

                      {statusData.map(
                        (_, index) => (
                          <Cell
                            key={index}
                            fill={
                              statusColors[
                                index %
                                  statusColors.length
                              ]
                            }
                          />
                        )
                      )}

                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              ) : (

                <div className="h-full flex items-center justify-center">

                  <div className="text-center">

                    <FaShoppingCart className="text-gray-200 text-5xl mx-auto" />

                    <p className="text-gray-400 mt-3">
                      No order data
                    </p>

                  </div>

                </div>

              )}

            </div>

            <div className="space-y-3">

              {statusData.map(
                (item, index) => (

                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-2">

                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            statusColors[
                              index %
                                statusColors.length
                            ],
                        }}
                      ></span>

                      <span className="text-gray-600 text-sm">
                        {item.name}
                      </span>

                    </div>

                    <span className="font-bold text-gray-800">
                      {item.value}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* ================= FULL YEAR ORDERS BAR CHART ================= */}

        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-gray-100 mt-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">

            <div>

              <div className="flex items-center gap-2">

                <FaChartLine className="text-green-600" />

                <h2 className="text-xl font-bold text-gray-800">
                  Monthly Orders
                </h2>

              </div>

              <p className="text-gray-500 text-sm mt-1">
                Number of orders received from January to December {currentYear}.
              </p>

            </div>

            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
              Full Year
            </div>

          </div>

          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={monthlyData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "14px",
                    border: "none",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                />

                <Bar
                  dataKey="orders"
                  fill="#16a34a"
                  radius={[
                    8,
                    8,
                    0,
                    0,
                  ]}
                  barSize={34}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* ================= QUICK ACCESS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          {/* USERS */}

          <button
            type="button"
            onClick={() =>
              navigate("/admin/users")
            }
            className="text-left bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
          >

            <FaUsers className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl text-gray-800">
              Users
            </h3>

            <p className="text-gray-500 mt-2">
              {loading
                ? "Loading users..."
                : `${totalUsers} registered users`
              }
            </p>

          </button>

          {/* CONTACT */}

          <button
            type="button"
            onClick={() =>
              navigate("/admin/contacts")
            }
            className="text-left bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
          >

            <FaEnvelope className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl text-gray-800">
              Contact Messages
            </h3>

            <p className="text-gray-500 mt-2">
              {loading
                ? "Loading messages..."
                : `${contacts.length} customer messages`
              }
            </p>

          </button>

          {/* NEWSLETTER */}

          <button
            type="button"
            onClick={() =>
              navigate("/admin/newsletters")
            }
            className="text-left bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
          >

            <FaNewspaper className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl text-gray-800">
              Newsletters
            </h3>

            <p className="text-gray-500 mt-2">
              {loading
                ? "Loading subscribers..."
                : `${newsletters.length} newsletter subscribers`
              }
            </p>

          </button>

          {/* PRODUCT REQUESTS */}

          <button
            type="button"
            onClick={() =>
              navigate(
                "/admin/product-requests"
              )
            }
            className="text-left bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
          >

            <FaBoxOpen className="text-green-600 text-3xl mb-4" />

            <h3 className="font-bold text-xl text-gray-800">
              Product Requests
            </h3>

            <p className="text-gray-500 mt-2">
              {loading
                ? "Loading requests..."
                : `${productRequests.length} product requests`
              }
            </p>

          </button>

        </div>

        {/* ================= RECENT ORDERS ================= */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-8 overflow-hidden">

          <div className="p-5 sm:p-7 border-b border-gray-100">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Recent Orders
                </h2>

                <p className="text-gray-500 mt-1">
                  Latest orders placed by customers.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  navigate("/admin/orders")
                }
                className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
              >
                View All Orders
              </button>

            </div>

          </div>

          {/* LOADING */}

          {loading && (

            <div className="py-16 text-center">

              <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

              <p className="text-gray-500 mt-4">
                Loading dashboard...
              </p>

            </div>

          )}

          {/* NO ORDERS */}

          {!loading &&
            orders.length === 0 && (

              <div className="py-16 text-center">

                <FaShoppingCart className="text-gray-200 text-5xl mx-auto" />

                <p className="text-gray-500 mt-4">
                  No orders found.
                </p>

              </div>
            )}

          {/* ORDERS */}

          {!loading &&
            orders.length > 0 && (

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

                    {recentOrders.map(
                      (order) => (

                        <tr
                          key={order._id}
                          className="border-t hover:bg-gray-50"
                        >

                          <td className="px-6 py-5">

                            <span className="font-semibold text-green-600">
                              {order.orderId ||
                                order._id}
                            </span>

                          </td>

                          <td className="px-6 py-5">

                            <p className="font-semibold text-gray-800">

                              {order.customer
                                ?.firstName}{" "}

                              {order.customer
                                ?.lastName}

                            </p>

                            <p className="text-sm text-gray-500">
                              {order.customer
                                ?.email}
                            </p>

                          </td>

                          <td className="px-6 py-5 font-bold text-gray-800">

                            $
                            {Number(
                              order.total || 0
                            ).toFixed(2)}

                          </td>

                          <td className="px-6 py-5 text-gray-600">

                            {getPaymentName(
                              order.paymentMethod
                            )}

                          </td>

                          <td className="px-6 py-5">

                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusStyle(
                                order.status
                              )}`}
                            >

                              {getStatusIcon(
                                order.status
                              )}

                              {order.status ||
                                "Pending"}

                            </span>

                          </td>

                        </tr>

                      )
                    )}

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
