import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import MultiDestination from './pages/MultiDestination';
import LoadingScreen from './pages/LoadingScreen';
import SearchResults from './pages/SearchResults';
import FlightDetails from './pages/FlightDetails';
import TripReview from './pages/TripReview';
import HolidayPackages from './pages/HolidayPackages';
import Itinerary from './pages/Itinerary';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/multi-destination" element={<MultiDestination />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
        <Route path="/trip-review" element={<TripReview />} />
        <Route path="/holiday-packages" element={<HolidayPackages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}


















