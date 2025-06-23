import bgImage from '../assets/signup.jpg'; 

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10 max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-300">We’d love to hear from you. Fill out the form or visit us!</p>
        </div>

        {/* Grid: Form + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your-email@example.com" // Replace with your email
            method="POST"
            className="bg-white bg-opacity-90 backdrop-blur-md shadow p-6 rounded space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Send Message
            </button>

            {/* Hidden fields to improve UX */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
          </form>

          {/* Google Map Embed */}
          <div className="w-full h-72 md:h-full shadow rounded overflow-hidden">
            <iframe
              title="FlyGlobe Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609839366!2d72.74109863241273!3d19.0821978393128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d630da5f3%3A0xe60f77a98a8f3c97!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684828417799!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
