import React, { useEffect, useState } from "react";
import BgImage from "../../components/BgImage/BgImage";
import singleServiceImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { useParams } from "react-router-dom";
import { AiOutlineClockCircle, AiTwotoneStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { FaDollarSign, FaPlaneDeparture } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
const SingleService = () => {
  const { id } = useParams();
  const [singleTrip, setSingleTrip] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/trips/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSingleTrip(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const {
    _id,
    tripName,
    Price,
    Rating,
    capacity,
    imgCover,
    location,
    tripDetails,
  } = singleTrip;

  console.log(singleTrip?.tripLength);
  return (
    <div>
      <BgImage img={singleServiceImg} content={`${tripName}`} />

      <div className="bg-gray-100">
        <div className="py-9 container mx-auto">
          <div className="w-5/6 mx-auto">
            <div className="">
              <div className="bg-white p-6 rounded-lg mx-auto w-3/4">
                <img src={imgCover} className="h-3/4 w-full rounded" alt="" />
                <div className="bg-gray-100 my-4 p-4 rounded-lg flex justify-between px-4">
                  <li className="flex gap-1 text-slate-700 items-center">
                    <AiOutlineClockCircle />{" "}
                    <span className="font-medium">
                      Duration : {singleTrip?.tripLength?.duration}
                    </span>
                  </li>
                  <li className="flex gap-1 text-slate-700 items-center">
                    <FaPlaneDeparture />{" "}
                    <span className="font-medium">
                      Departure :{singleTrip?.tripLength?.departure}
                    </span>
                  </li>
                  <li className="flex gap-1 text-slate-700 items-center">
                    <IoMdReturnLeft />{" "}
                    <span className="font-medium">
                      Return:{singleTrip?.tripLength?.return}
                    </span>
                  </li>
                  <li className="flex gap-1 text-slate-700 items-center">
                    <FiUsers />{" "}
                    <span className="font-medium">Capacity:{capacity}</span>
                  </li>
                  <li className="flex gap-1 text-slate-700 items-center">
                    <ImLocation />{" "}
                    <span className="font-medium">Location:{location}</span>
                  </li>
                </div>
                <div>
                  <h2 className="my-5 font-semibold text-3xl ">{tripName}</h2>
                  <button className="flex items-center text-white rounded px-4 py-3 text-lg font-medium bg-orange-500">
                    Per Person Cost <FaDollarSign /> {Price}
                  </button>

                  <p className="my-5 text-lg text-slate-700 font-medium">
                    {tripDetails}{" "}
                  </p>
                  <p className="flex gap-1 items-center py-3">
                    <span className="text-lg font-medium mr-2 ">Ratings</span>
                    {[...Array(Rating).keys()].map((k, index) =>
                      k === 0 ? (
                        <AiTwotoneStar
                          key={index}
                          className="text-amber-400 text-lg"
                        />
                      ) : (
                        <AiTwotoneStar
                          key={index}
                          className="text-amber-400 text-lg"
                        />
                      )
                    )}
                    <span className="mr-2 ml-3 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                      {Rating} .0
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
