import React from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
// import { useNavigate } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";

const FeaturedDestination = () => {
  //   const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />

      <TestimonialCard />
    </div>
  );
};

export default FeaturedDestination;
