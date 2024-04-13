import React, { useEffect, useState } from "react";
import axios from "axios";

const LastSeatBooking = ({ isLoading, infoSubmitted }) => {
  const [lastBooking, setLastBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://book-movie-iqfk2v6ti-atishs-projects-55a5a6a4.vercel.app/api/booking"
        );
        // Extract the last booking from the response data array
        const lastBooking = result.data[result.data.length - 1];
        setLastBooking(lastBooking);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [isLoading, infoSubmitted]);

  return (
    <div className="bg-slate-100 w-full md:h-full md:w-96 rounded p-3 md:pt-20">
      <div className="flex flex-col h-fit min-h-[455px] w-full bg-slate-50 border border-slate-500 rounded-lg p-3  ">
        {lastBooking ? (
          <div>
            <h3 className="text-3xl text-slate-700 mb-4 font-medium">
              Your last booking
            </h3>
            <h2 className="text-xl text-slate-700">
              Movie: {lastBooking.movie}
            </h2>
            <h2 className="text-xl text-slate-700">
              Seats:{lastBooking.seats.replace("TYPE ", "")}
            </h2>
            <h2 className="text-xl text-slate-700">Slot: {lastBooking.slot}</h2>
          </div>
        ) : (
          <h1 className="text-xl text-slate-700">You have no last booking</h1>
        )}
      </div>
    </div>
  );
};

export default LastSeatBooking;
