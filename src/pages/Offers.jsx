import Navbar from '../components/Navbar';

export default function Offers() {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Best Travel Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">30% off to Bangkok</div>
          <div className="bg-white p-4 rounded shadow">Flat ₹1000 off on Domestic Flights</div>
          <div className="bg-white p-4 rounded shadow">Early Bird Europe Tour Offer</div>
        </div>
      </section>
    </div>
  );
}
