import { Label, Select, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineUserAdd } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthProvider } from "../../context/AuthContext";

const UpdateReview = () => {

   const {id} = useParams()
   console.log(id); 
//   
  const { user } = useContext(AuthProvider);
//   const review = useLoaderData();
  const [star, setStar] = useState(5);
  const [review , setReview] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/emailbase/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReview(data);
      })
      .catch(err => console.log(err));
  }, [id]);



  const updateReview = e => {
    e.preventDefault();
    const form = e.target;

    const updateSiteData = {
      id: review._id,
      serviceName: review.tripName,
      reviewerName: form.name.value,
      email: user?.email,
      date: new Date(),
      starRatings: parseInt(star),
      comments: form.comments.value,
      photoURL: form.photoUrl.value,
    };

    fetch(`http://localhost:5000/emailBase/${review.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSiteData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          swal("Congratzz!", "Product has been update successfully", "success");
          navigate("/myreviews");
        }
      })
      .catch(err => console.log(err))
      ;
  };

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/3 shadow mx-auto p-9">
        <h2 className="text-center font-bold text-xl my-4">
          Update Your Review
        </h2>
        <form onSubmit={updateReview}>
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
            <Select
              onChange={e => setStar(e.target.value)}
              id="ratings"
              required={true}
            >
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
            Update Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
