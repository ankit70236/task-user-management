
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">MyApp</div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/userlist" className="hover:text-blue-400">Userslist</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/register" className="hover:text-blue-400">Register</Link>
          <Link to="/profile" className="hover:text-blue-400 text-sm">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
