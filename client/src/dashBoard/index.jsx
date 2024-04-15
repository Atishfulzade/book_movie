import React, { useState } from "react";
import LastSeatBooking from "../component/lastBooking";
import Movie from "../component/movie";
import { Toaster } from "react-hot-toast";
const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-fit gap-3  flex-wrap bg-slate-100 md:h-screen">
        <Toaster />
        <Movie
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setInfoSubmitted={setInfoSubmitted}
        />
        <LastSeatBooking isLoading={isLoading} infoSubmitted={infoSubmitted} />
      </div>
    </>
  );
};

export default DashBoard;
