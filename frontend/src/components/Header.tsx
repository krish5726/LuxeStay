import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-6 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-100 flex items-center gap-2"
          >
            LuxeStay
            <img src="favicon.png" alt="Logo" className="w-10 h-10" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-black font-semibold hover:text-white transition-colors px-3"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-black font-semibold hover:text-white transition-colors px-3"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 hover:text-teal-600 shadow transition-transform transform hover:scale-105"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
