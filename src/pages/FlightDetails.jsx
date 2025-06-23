import { useParams } from 'react-router-dom';
import { useState } from 'react';

const flightDetails = {
  1: {
    name: 'Air India',
    route: 'Delhi → Mumbai',
    duration: '2h 15m',
    baggage: 'Cabin: 7kg | Check-in: 15kg',
  },
  2: {
    name: 'SpiceJet',
    route: 'Hyderabad → Chennai',
    duration: '1h 10m',
    baggage: 'Cabin: 7kg | Check-in: 20kg',
  },
  3: {
    name: 'IndiGo',
    route: 'Bangalore → Dubai → Paris',
    duration: '11h 30m',
    baggage: 'Cabin: 8kg | Check-in: 30kg',
  },
};

export default function FlightDetails() {
  const { id } = useParams();
  const [showBaggage, setShowBaggage] = useState(false);
  const flight = flightDetails[id];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Flight Details</h2>
      <div className="bg-white shadow p-6 rounded-lg space-y-3">
        <h3 className="text-xl font-semibold">{flight.name}</h3>
        <p>Route: {flight.route}</p>
        <p>Duration: {flight.duration}</p>
        <button
          onClick={() => setShowBaggage(!showBaggage)}
          className="text-blue-600 underline mt-2"
        >
          {showBaggage ? 'Hide Baggage Info' : 'View Baggage Info'}
        </button>
        {showBaggage && (
          <p className="mt-2 bg-blue-50 p-3 rounded border border-blue-200">
            {flight.baggage}
          </p>
        )}
      </div>
    </div>
  );
}
