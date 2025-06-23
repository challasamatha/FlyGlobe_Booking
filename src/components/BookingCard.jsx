import bgImage from '../assets/card.png';

export default function BookingCard() {
  return (
    <div
      className="relative bg-cover bg-center shadow-lg rounded-lg p-6 w-full max-w-md"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to make form readable */}
      <div className="absolute inset-0 bg-white bg-opacity-80 rounded-lg z-0" />

      {/* Form Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-4">Book Your Flight</h3>
        <form className="space-y-3">
          <select className="w-full p-2 border rounded">
            <option>Round Trip</option>
            <option>One Way</option>
            <option>Multi-City</option>
          </select>
          <input type="text" placeholder="From" className="w-full p-2 border rounded" />
          <input type="text" placeholder="To" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <input type="number" placeholder="Passengers" className="w-full p-2 border rounded" />
          <select className="w-full p-2 border rounded">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
          <select className="w-full p-2 border rounded">
            <option>Any Airline</option>
            <option>Indigo</option>
            <option>SpiceJet</option>
            <option>Air India</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}











