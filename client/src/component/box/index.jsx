import React, { useState } from "react";
import toast from "react-hot-toast";

const Box = ({ movieData, setSelectedData }) => {
  const [seatBooked, setSeatBooked] = useState(0);
  const [clicked, setClicked] = useState();

  const handleClick = (movieId, movieCategory, movieTitle) => {
    if (movieCategory === "seat" && seatBooked < 1) {
      toast.error("Select at least one seat");
      return;
    }

    // Toggle clicked state
    setClicked((prevClicked) => (prevClicked === movieId ? movieId : movieId));
    // Set selected data based on the movie category
    setSelectedData(
      movieCategory === "seat" ? `${movieTitle}:${seatBooked}` : movieTitle
    );
  };

  return (
    <div className="h-fit px-10 py-5 border bg-slate-50 rounded-lg border-slate-500">
      <h3 className="text-xl mb-4 text-slate-800 font-semibold">
        Select a {movieData[0].category}
      </h3>
      <div className="flex gap-3 flex-wrap">
        {movieData.map((movie) => (
          <label
            htmlFor={movie.id}
            key={movie.id}
            onClick={() => handleClick(movie.id, movie.category, movie.title)}
            className={`border border-slate-300 bg-gray-50 cursor-pointer flex items-center gap-3 hover:text-white hover:bg-slate-500 transition-all px-5 rounded-md py-3 ${
              clicked === movie.id ? "bg-slate-500 text-white" : "bg-gray-50"
            }`}
          >
            {movie.title}
            <input
              type="radio"
              name={movie.category}
              id={movie.id}
              className="hidden"
            />
            {movie.category === "seat" && (
              <input
                type="number"
                max="10"
                defaultValue={0}
                onChange={(e) => setSeatBooked(e.target.value)}
                className="border w-14 border-slate-300  cursor-pointer bg-transparent hover:text-white hover:bg-slate-500 transition-all px-2 rounded-md py-1"
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Box;
