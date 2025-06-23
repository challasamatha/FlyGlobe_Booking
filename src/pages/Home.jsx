import Navbar from '../components/Navbar';
import BookingCard from '../components/BookingCard';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10">
        <Navbar />
        <section className="p-10 flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
          <div className="max-w-xl space-y-6 text-center md:text-left text-white">
            <h1 className="text-4xl font-bold">Explore the World with FlyGlobe</h1>
            <p className="text-lg">Find unbeatable flight deals and travel packages to your dream destinations.</p>
            <button
              onClick={() => navigate('/offers')}
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
            >
              Discover Now
            </button>
          </div>
          <div className="mt-10 md:mt-0">
            <BookingCard />
          </div>
        </section>
      </div>
    </div>
  );
}












