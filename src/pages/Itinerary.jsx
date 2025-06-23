import bgImage from '../assets/package.avif'; 

export default function Itinerary() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content above overlay */}
      <div className="relative z-10 p-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Trip Itinerary</h2>

        <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded shadow max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold mb-2 text-xl text-blue-700">Day 1: Arrival in Goa</h3>
            <p className="text-gray-700">Check-in at hotel and leisure evening at Baga Beach.</p>
          </div>

          <div>
            <h3 className="font-semibold mt-4 mb-2 text-xl text-blue-700">Day 2: North Goa Tour</h3>
            <p className="text-gray-700">Visit Aguada Fort, Calangute, Anjuna Beach, and nightlife in Goa.</p>
          </div>

          <div>
            <h3 className="font-semibold mt-4 mb-2 text-xl text-blue-700">Day 3: South Goa & River Cruise</h3>
            <p className="text-gray-700">Temples, Churches, Colva Beach, Mandovi Cruise in evening.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
