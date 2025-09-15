import React, { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - Get In Touch
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-red-600">
            <span className="text-white bricolage-font">Contact </span>Us
          </h1>
        </div>
      </div>

       {/* Contact Section */}
      <div className="py-16 lg:py-24 px-[8%] lg:px-[12%] bg-gray-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white bricolage-font">
              Get In <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We’d love to hear from you. Whether you have a question about our
              services, pricing, or anything else, feel free to reach out.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-red-600 text-2xl"></i>
                <p>123 Main Street, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-phone text-red-600 text-2xl"></i>
                <p>+880 123 456 789</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-envelope text-red-600 text-2xl"></i>
                <p>support@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-md">
             <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
          </div>
        </div>
      </div>

       {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-white text-black rounded-xl p-8 shadow-xl text-center max-w-sm">
            <h3 className="text-2xl font-bold mb-3">✅ Message Sent!</h3>
            <p className="mb-6">Thank you for reaching out. We’ll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact
