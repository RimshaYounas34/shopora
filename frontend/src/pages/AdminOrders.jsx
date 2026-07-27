import { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaClock,
  FaCheckCircle,
  FaTruck,
  FaTimesCircle,
} from "react-icons/fa";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingOrder, setUpdatingOrder] = useState(null);

  // ================= FETCH ALL ORDERS =================

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
      console.error("Fetch Orders Error:", error);

      setError(
        "Unable to load orders. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };


  // ================= LOAD ORDERS =================

  useEffect(() => {
    fetchOrders();
  }, []);


  // ================= UPDATE ORDER STATUS =================

  const updateOrderStatus = async (
    orderId,
    newStatus
  ) => {
    try {
      setUpdatingOrder(orderId);

      const response = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to update order status."
        );
      }

      // Update frontend immediately
      setOrders((previousOrders) =>
        previousOrders.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                status: newStatus,
              }
            : order
        )
      );

    } catch (error) {
      console.error(
        "Update Status Error:",
        error
      );

      alert(
        "Failed to update order status."
      );

    } finally {
      setUpdatingOrder(null);
    }
  };


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

    if (status === "Shipped") {
      return <FaTruck />;
    }

    if (status === "Processing") {
      return <FaBoxOpen />;
    }

    if (status === "Cancelled") {
      return <FaTimesCircle />;
    }

    return <FaClock />;
  };


  return (
    <div className="min-h-screen bg-gray-100">


      {/* ================= HEADER ================= */}

      <header className="bg-white border-b px-6 py-5">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-800">
            All Orders
          </h1>

          <p className="text-gray-500 mt-1">
            Manage and track all customer orders.
          </p>

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


        {/* ================= ORDER COUNT ================= */}

        {!loading && (

          <div className="mb-6">

            <p className="text-gray-600">

              Total Orders:

              <span className="font-bold text-gray-800 ml-2">
                {orders.length}
              </span>

            </p>

          </div>

        )}


        {/* ================= LOADING ================= */}

        {loading && (

          <div className="bg-white rounded-2xl p-16 text-center shadow-sm">

            <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>

            <p className="text-gray-500 mt-4">
              Loading orders...
            </p>

          </div>

        )}


        {/* ================= NO ORDERS ================= */}

        {!loading &&
          orders.length === 0 && (

            <div className="bg-white rounded-2xl p-16 text-center shadow-sm">

              <FaBoxOpen className="text-gray-300 text-6xl mx-auto" />

              <h2 className="text-xl font-bold text-gray-700 mt-5">
                No Orders Found
              </h2>

              <p className="text-gray-500 mt-2">
                There are no customer orders yet.
              </p>

            </div>

          )}


        {/* ================= ORDERS ================= */}

        {!loading &&
          orders.length > 0 && (

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[1200px]">


                  {/* ================= TABLE HEADER ================= */}

                  <thead className="bg-gray-50">

                    <tr>

                      <th className="text-left px-6 py-4 text-gray-600">
                        Order ID
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600">
                        Customer
                      </th>

                      <th className="text-left px-6 py-4 text-gray-600">
                        Products
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

                      <th className="text-left px-6 py-4 text-gray-600">
                        Update Status
                      </th>

                    </tr>

                  </thead>


                  {/* ================= TABLE BODY ================= */}

                  <tbody>

                    {orders.map((order) => (

                      <tr
                        key={order._id}
                        className="border-t hover:bg-gray-50 transition"
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

                          <p className="text-sm text-gray-500">

                            {order.customer?.phone}

                          </p>

                        </td>


                        {/* PRODUCTS */}

                        <td className="px-6 py-5">

                          <div className="space-y-2">

                            {order.products?.map(
                              (product, index) => (

                                <div
                                  key={index}
                                  className="flex items-center gap-3"
                                >

                                  {product.image ? (

                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className="w-12 h-12 object-cover rounded-lg"
                                    />

                                  ) : (

                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">

                                      <FaBoxOpen className="text-gray-400" />

                                    </div>

                                  )}

                                  <div>

                                    <p className="font-semibold text-gray-800">

                                      {product.name}

                                    </p>

                                    <p className="text-sm text-gray-500">

                                      Qty: {product.quantity}

                                    </p>

                                  </div>

                                </div>

                              )
                            )}

                          </div>

                        </td>


                        {/* TOTAL */}

                        <td className="px-6 py-5">

                          <p className="font-bold text-gray-800">

                            $
                            {Number(
                              order.total || 0
                            ).toFixed(2)}

                          </p>

                        </td>


                        {/* PAYMENT */}

                        <td className="px-6 py-5 text-gray-600">

                          {getPaymentName(
                            order.paymentMethod
                          )}

                        </td>


                        {/* CURRENT STATUS */}

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


                        {/* UPDATE STATUS */}

                        <td className="px-6 py-5">

                          <select
                            value={order.status}
                            disabled={
                              updatingOrder ===
                              order.orderId
                            }
                            onChange={(e) =>
                              updateOrderStatus(
                                order.orderId,
                                e.target.value
                              )
                            }
                            className="border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
                          >

                            <option value="Pending">
                              Pending
                            </option>

                            <option value="Processing">
                              Processing
                            </option>

                            <option value="Shipped">
                              Shipped
                            </option>

                            <option value="Delivered">
                              Delivered
                            </option>

                            <option value="Cancelled">
                              Cancelled
                            </option>

                          </select>

                          {updatingOrder ===
                            order.orderId && (

                            <p className="text-xs text-gray-500 mt-2">
                              Updating...
                            </p>

                          )}

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

export default AdminOrders;