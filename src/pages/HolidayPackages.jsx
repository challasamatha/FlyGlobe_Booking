import goaImg from '../assets/goa.jpg';
import himalayaImg from '../assets/himalaya.jpg';
import thailandImg from '../assets/thailand.avif';
import bgImage from '../assets/package.avif'; 

export default function HolidayPackages() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Main content above overlay */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Holiday Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Goa */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow overflow-hidden">
            <img src={goaImg} alt="Goa Beach" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl">Goa Beach Retreat</h3>
              <p className="text-gray-700">3N/4D - ₹12,999</p>
            </div>
          </div>

          {/* Himalaya */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow overflow-hidden">
            <img src={himalayaImg} alt="Himalayan Escape" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl">Himalayan Escape</h3>
              <p className="text-gray-700">5N/6D - ₹18,500</p>
            </div>
          </div>

          {/* Thailand */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow overflow-hidden">
            <img src={thailandImg} alt="Thailand Explorer" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl">Thailand Explorer</h3>
              <p className="text-gray-700">4N/5D - ₹24,999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
