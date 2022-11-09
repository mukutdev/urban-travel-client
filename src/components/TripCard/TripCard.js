import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const TripCard = ({ trips }) => {
  const {
    _id,
    tripName,
    location,
    tripDetails,
    tripLength,
    Price,
    capacity,
    thumbnail,
    Rating,
  } = trips;

  return (
    <div className="shadow-lg">
      <div className=" relative w-full">
        <img className="h-80 w-full" src={thumbnail} alt="" />

        <div className="bg-sky-500 w-full px-4 py-3 flex justify-between gap-2 list-none absolute bottom-0 ">
          <li className="flex gap-1 text-white items-center">
            <AiOutlineClockCircle /> <span>{tripLength.duration}</span>
          </li>
          <li className="flex gap-1 text-white items-center">
            <FiUsers /> <span>Capacity: {capacity}</span>
          </li>
          <li className="flex gap-1 text-white items-center">
            <ImLocation /> <span>{location}</span>
          </li>
        </div>
        <p className="absolute top-4 px-3 text right-4 bg-orange-500 py-2 flex items-center text-white">
          <strong className="flex items-center text-xl">
            <FaDollarSign />
            {Price}
          </strong>{" "}
          / per person
        </p>
      </div>

      <div className="px-7 pt-3 pb-7">
        <h2 className="text-2xl font-semibold pt-3">{tripName}</h2>
        <p className="flex gap-1 items-center py-3">
          <span className="text-lg font-medium mr-2 ">Ratings</span>
          {[...Array(Rating).keys()].map((k, index) =>
            k === 0 ? (
              <AiTwotoneStar key={index} className="text-amber-400 text-lg" />
            ) : (
              <AiTwotoneStar key={index} className="text-amber-400 text-lg" />
            )
          )}
          <span className="mr-2 ml-3 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {Rating} .0
          </span>
        </p>
        <p className="text-lg ">{tripDetails.slice(0, 100)}</p>
        <Link to={`/services/${_id}`}>
          <button className="bg-orange-500 text-lg font-medium py-2 px-8 text-white mt-7 hover:bg-sky-500">
            See Trip Details
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default TripCard;
