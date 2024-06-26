import React, { useState } from "react";
import Box from "../box";
import toast from "react-hot-toast";
import { movieNames, totalSeats, movieTimes } from "../../Constant";
import axios from "axios";

const Movie = ({ setInfoSubmitted }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const submitData = async () => {
    try {
      if (!selectedMovie || !selectedSeat || !selectedSlot) {
        toast.error("Please select a movie, seat, and slot");
        return;
      }

      // Show loading toast
      const loadingToast = toast.loading("Booking in progress...");

      // Make POST request to server
      await axios.post(
        "https://movie-book-api-e4e1fddd3872.herokuapp.com/api/booking",
        {
          movie: selectedMovie,
          seats: selectedSeat,
          slot: selectedSlot,
        }
      );

      // Close loading toast and show success toast
      toast.dismiss(loadingToast);
      toast.success("Booking done");

      // Reset form fields after successful booking
      setSelectedMovie("");
      setSelectedSeat("");
      setSelectedSlot("");
      setInfoSubmitted(true);
      window.location.reload();
    } catch (error) {
      // Show error toast
      toast.error("Booking failed. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:h-fit md:w-[70%] bg-slate-100 rounded p-3 gap-4">
      <h2 className="text-3xl text-slate-700 mb-4 font-medium">
        Book that Show
      </h2>
      <Box movieData={movieNames} setSelectedData={setSelectedMovie} />
      <Box movieData={movieTimes} setSelectedData={setSelectedSlot} />
      <Box movieData={totalSeats} setSelectedData={setSelectedSeat} />
      <button
        className="bg-purple-600 px-9 py-3 text-white w-fit rounded hover:bg-purple-700 transition-all border-none outline-none"
        onClick={submitData}
      >
        Book ticket
      </button>
    </div>
  );
};

export default Movie;
