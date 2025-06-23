import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import BookingDetails from "./pages/BookingDetails";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  // Check if the current URL path contains the word "owner"
  // If true, we'll hide the Navbar (e.g., for owner dashboard pages)
  const isOwner = useLocation().pathname.includes("owner");

  return (
    <div>
      {/* Show Navbar only if user is NOT on an 'owner' route */}
      {!isOwner && <Navbar />}
      {/* {false && <HotelReg />} */}
      {/* Main content area with a maximum height of 70% of the viewport height */}
      <div className="min-h-[70vh]">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<BookingDetails />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />ß
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
