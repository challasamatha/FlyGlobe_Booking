import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl bg-white p-6 rounded shadow">
        <input placeholder="From" className="w-full p-2 border rounded" required />
        <input placeholder="To" className="w-full p-2 border rounded" required />
        <input placeholder="Mobile Number" className="w-full p-2 border rounded" required />
        <input placeholder="Email ID" className="w-full p-2 border rounded" required />
        <input placeholder="Passport ID" className="w-full p-2 border rounded" required />
        <input placeholder="Visa ID" className="w-full p-2 border rounded" required />
        <input placeholder="Ticket Number" className="w-full p-2 border rounded" required />
        <input placeholder="Seat Number" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
