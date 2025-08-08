"use client";
import { useState } from "react";
import api from "../../utils/api";
import { X } from "lucide-react";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    vatNumber: "",
    consent: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setShowConfirmation(false);

    try {
      const res = await api.post("/api/contact", formData);
      setMessage(res.data.message || "Form submitted successfully!");
      setShowConfirmation(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        vatNumber: "",
        consent: false,
      });

      // Auto close confirmation popup after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
        onClose(); // optional: auto-close main popup
      }, 3000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div
        className="relative z-20 flex flex-col md:flex-row w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: 'url("/popupbg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url("/popupbg.jpg")' }}
        />

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 text-white p-8 relative backdrop-blur-md bg-black/70">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-orange-500"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-orange-400">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
            />
            <input
              type="text"
              name="vatNumber"
              placeholder="GSTIN / VAT Number (optional)"
              value={formData.vatNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/70"
            />

            <label className="flex items-center gap-2 text-sm text-white/80">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="accent-orange-500"
              />
              I agree to be contacted
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all w-full"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
            <p className="text-sm">Your form has been submitted successfully.</p>
            <p className="text-sm mt-1">We will contact you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
