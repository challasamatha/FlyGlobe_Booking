import { Link } from 'react-router-dom';

const flights = [
  { id: 1, name: 'Air India', price: '₹8500', route: 'Delhi → Mumbai', type: 'Round Trip' },
  { id: 2, name: 'SpiceJet', price: '₹5600', route: 'Hyderabad → Chennai', type: 'One Way' },
  { id: 3, name: 'IndiGo', price: '₹12200', route: 'Bangalore → Dubai → Paris', type: 'Multi-City' },
];

export default function SearchResults() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Search Results</h2>
      <div className="grid gap-6">
        {flights.map(flight => (
          <div key={flight.id} className="border p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{flight.name}</h3>
              <p>{flight.route}</p>
              <span className="text-sm text-gray-600">{flight.type}</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-blue-700">{flight.price}</p>
              <Link to={`/flight/${flight.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-1 rounded">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
