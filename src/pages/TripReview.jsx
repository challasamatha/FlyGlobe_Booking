export default function TripReview() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Trip Review</h2>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <p><strong>From:</strong> Delhi</p>
        <p><strong>To:</strong> Mumbai</p>
        <p><strong>Departure:</strong> 2025-07-10</p>
        <p><strong>Return:</strong> 2025-07-20</p>
        <p><strong>Passenger:</strong> 2 Adults</p>
        <p><strong>Class:</strong> Economy</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Continue to Booking
        </button>
      </div>
    </div>
  );
}
