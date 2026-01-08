import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
