import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50">My Main Content</div>
      <Footer />
    </div>
  );
}
