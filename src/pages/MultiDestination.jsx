import Navbar from '../components/Navbar';
import bgImage from '../assets/multi.jpg'; 

export default function MultiDestination() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content above overlay */}
      <div className="relative z-10">
        <Navbar />
        <section className="p-10 flex flex-col items-center justify-center min-h-[90vh]">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow max-w-2xl w-full space-y-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">Plan a Multi-Destination Trip</h2>
            <input placeholder="Destination 1" className="w-full p-2 border rounded" />
            <input placeholder="Destination 2" className="w-full p-2 border rounded" />
            <input placeholder="Destination 3" className="w-full p-2 border rounded" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
              Search Flights
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
