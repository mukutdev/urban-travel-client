/* eslint-disable react/style-prop-object */
import { Tooltip } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import myReviewImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import BgImage from "../../components/BgImage/BgImage";
import { AuthProvider } from "../../context/AuthContext";
const MyReviews = () => {
  const { user } = useContext(AuthProvider);
  const [myReviews, setMyReviews] = useState([]);
//   const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://travel-server-mukutdev.vercel.app/emailBase?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyReviews(data);
      });
  }, [user?.email]);


  //deelete review function


  const handleDeleteReview = id =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, when you delete the review , it will remove from website",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://travel-server-mukutdev.vercel.app/emailBase/${id}` , {
              method: 'DELETE',
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount){
              const remaining = myReviews.filter(site => site._id !== id)
              setMyReviews(remaining)
              swal("Poof! your review has been deleted!", {
                icon: "success",
              });
            } 
          })  
         
        }
        else{
          swal("Your review  is safe!"); 
        }
      });
  }

  //update review function

  const handleUpdate = (id) =>{
    console.log(id);
    navigate(`/myreviews/edit/${id}`)
  }

  return (
    <div>
      <BgImage img={myReviewImg} content={"My Reviews"} />
      <div className="my-8 container mx-auto">
        <div className="w-3/4 mx-auto  rounded p-11">
          <div className="reviews-area mx-auto my-7 flex flex-col gap-4">
            {myReviews.length > 0 ? (
              myReviews.map(singleReview => {
                return (
                  <div
                    key={singleReview._id}
                    className="shadow bg-slate-50 py-3 px-6 rounded-md flex justify-start items-center gap-10 my-2"
                  >
                    <div>
                      <img
                        className="h-20 rounded-full w-20"
                        src={singleReview.photoURL}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="font-medium text-lg text-sky-500">
                        {singleReview.serviceName}
                      </h2>
                      <p className="flex gap-1 items-center py-3">
                        {[...Array(singleReview.starRatings).keys()].map(
                          (k, index) =>
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
                          {singleReview.starRatings} .0
                        </span>
                      </p>
                      <h2 className="font-medium text-lg">
                        {singleReview.reviewerName}
                      </h2>
                      <p className="py-2">{singleReview.comments}</p>
                    </div>
                    <div className="action ml-auto mr-9 flex">
                      <Tooltip content="Edit Review" style="light">
                        <button onClick={()=>handleUpdate(singleReview._id)} className="bg-green-500 text-lg  p-2 text-white mr-2 rounded ">
                          <FiEdit></FiEdit>
                        </button>
                      </Tooltip>
                      <Tooltip content="Delete Review" style="light">
                        <button onClick={()=>handleDeleteReview(singleReview._id)} className="bg-red-500 text-lg  p-2 text-white mr-2 rounded ">
                        <FiTrash2 />
                        </button>
                      </Tooltip>

                      
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center">No Reviews Were Added</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
