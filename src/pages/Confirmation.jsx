export default function Confirmation() {
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-2xl font-bold mt-4">Booking Confirmed!</h2>
      <p className="text-gray-600 mt-2">Thank you for choosing FlyGlobe. Safe travels!</p>
    </div>
  );
}
