import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";

const App = () => {
  // Check if the current URL path contains the word "owner"
  // If true, we'll hide the Navbar (e.g., for owner dashboard pages)
  const isOwner = useLocation().pathname.includes("owner");

  return (
    <div>
      {/* Show Navbar only if user is NOT on an 'owner' route */}
      {!isOwner && <Navbar />}

      {/* Main content area with a maximum height of 70% of the viewport height */}
      <div className="min-h-[70vh]">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
