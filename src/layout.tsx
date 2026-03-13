import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";

export default function layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar brandName="My Brand" />
      <HomePage />
      <Footer />
    </div>
  );
}
