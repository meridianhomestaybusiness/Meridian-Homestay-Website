import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Meridian Homestay</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-lg">
          {/* Large 404 */}
          <h1 className="font-heading text-[10rem] md:text-[14rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-400 select-none">
            404
          </h1>
          
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 -mt-6 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved. Let us help you find your way back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 hover:bg-zinc-200 text-gray-900 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
