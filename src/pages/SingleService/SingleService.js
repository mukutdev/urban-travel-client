import React, { useContext, useEffect, useState } from "react";
import BgImage from "../../components/BgImage/BgImage";
import singleServiceImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineClockCircle,
  AiTwotoneStar,
  AiOutlineUserAdd,
  AiOutlineLink,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { FaDollarSign, FaPlaneDeparture, FaRegEnvelope } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import { AuthProvider } from "../../context/AuthContext";
// import Login from "../Login/Login";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
const SingleService = () => {
  const { user } = useContext(AuthProvider);
  const { id } = useParams();
  const [singleTrip, setSingleTrip] = useState({});

  const [star , setStar] = useState(5)

  useEffect(() => {
    fetch(`http://localhost:5000/trips/${id}`)
      .then(res => res.json())
      .then(data => {
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

  //submit review function

  const submitReview = e => {
    e.preventDefault();
    const form = e.target;
    
    const reviewErInfo = {
        id : _id,
        serviceName : tripName,
        reviewerName : form.name.value,
        reviewerEmail : user?.email,
        date : new Date(),
        starRatings : parseInt(star),
        comments : form.comments.value,
        photoURL : form.photoUrl.value
    }

        fetch('http://localhost:5000/reviews' , {
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewErInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))





  };
//   console.log(user);


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
          <div className="review-section my-14 bg-white mx-auto container rounded-lg p-6 ">
            <div>
              <h2 className="text-center font-medium text-2xl">
                Latest Reviews
              </h2>
              <div className="reviews-area">here all review fetched</div>
            </div>

            <div className="w-1/3 mx-auto my-10">
              {user?.uid ? (
                <div className="shadow p-6 mt-8">
                  <h2 className="text-center text-lg mb-4 font-medium">
                    Share Your Experience in this trip
                  </h2>
                  <form onSubmit={submitReview}>
                    <div className="mb-2 block">
                      <Label htmlFor="name4" value="Your name" />
                    </div>
                    <TextInput
                      id="name4"
                      name="name"
                      type="text"
                      defaultValue={user?.displayName}
                      required={true}
                      icon={AiOutlineUserAdd}
                    />
                    <div className="mb-2 mt-2 block">
                      <Label htmlFor="email4" value="Your email" />
                    </div>
                    <TextInput
                      id="email4"
                      name="email"
                      type="email"
                      readOnly
                      defaultValue={user?.email}
                      required={true}
                      icon={FaRegEnvelope}
                    />
                    <div className="mb-2 mt-2 block">
                      <Label htmlFor="photourl" value="Photo Url" />
                    </div>
                    <TextInput
                      id="photourl"
                      name="photoUrl"
                      type="text"
                      defaultValue={user?.photoURL ? user?.photoURL : ""}
                      required={true}
                      icon={AiOutlineLink}
                    />
                    
                    <div id="select">
                      <div className="mb-2 mt-3 block">
                        <Label
                          htmlFor="ratings"
                          value="How many star you want to give?"
                        />
                      </div>
                      <Select onChange={(e) => setStar(e.target.value)} id="ratings" required={true}>
                        <option value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                      </Select>
                    </div>
                    <div className="mb-2 mt-3 block">
                      <Label htmlFor="comment" value="Share Your Experience" />
                    </div>
                    <Textarea
                      id="comment"
                      name="comments"
                      placeholder="Leave a comment..."
                      required={true}
                      rows={4}
                    />
                    <button
                      className="my-5 bg-sky-500 hover:bg-orange-500 rounded py-2 text-white font-medium  w-full text-lg"
                      type="submit"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <p className="text-center text-lg">
                    To add review please{" "}
                    <Link className="underline text-blue-600" to={"/login"}>
                      login first
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
