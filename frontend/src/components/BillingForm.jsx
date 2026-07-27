import { useState } from "react";

function BillingForm({ onBillingChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    country: "Pakistan",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    // Send billing data to Checkout page
    if (onBillingChange) {
      onBillingChange(updatedData);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Billing Details
      </h2>


      <div className="grid md:grid-cols-2 gap-6">

        {/* First Name */}

        <div>
          <label className="font-medium text-gray-700">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Last Name */}

        <div>
          <label className="font-medium text-gray-700">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Company */}

        <div className="md:col-span-2">
          <label className="font-medium text-gray-700">
            Company Name (Optional)
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Street Address */}

        <div className="md:col-span-2">
          <label className="font-medium text-gray-700">
            Street Address
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="House No, Street"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* City */}

        <div>
          <label className="font-medium text-gray-700">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Lahore"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Country */}

        <div>
          <label className="font-medium text-gray-700">
            Country
          </label>

          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Pakistan"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Phone */}

        <div>
          <label className="font-medium text-gray-700">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Email */}

        <div>
          <label className="font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>


        {/* Order Notes */}

        <div className="md:col-span-2">
          <label className="font-medium text-gray-700">
            Order Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="5"
            placeholder="Write your notes..."
            className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          ></textarea>
        </div>

      </div>

    </div>
  );
}

export default BillingForm;