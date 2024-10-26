// components/ContactForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
              status === "sending"
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
