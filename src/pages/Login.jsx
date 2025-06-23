import bgImage from '../assets/login.jpg';

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Login form */}
      <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>
        <form className="space-y-4">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
