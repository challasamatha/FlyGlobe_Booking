import bgImage from '../assets/signup.jpg'; 

export default function Signup() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Signup Form */}
      <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Signup</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

