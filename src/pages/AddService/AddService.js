import React from "react";
import BgImage from "../../components/BgImage/BgImage";
import addNewTripImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { Label, Textarea, TextInput } from "flowbite-react";
import swal from "sweetalert";
const AddService = () => {



    const addNewTrip = e =>{
        e.preventDefault()
        const form = e.target
        
        const tripDetails = {
            tripName : form.trip.value,
            location : form.place.value,
            tripDetails:form.details.value,
            tripLength:{        
            departure : '5 dec 2022',
            return : '8 dec 2022',
            duration : '3D 2N'    
            },
            Price : form.price.value,
            capacity: 15,
            thumbnail:form.photourl.value,
            imgCover: form.photourl.value,
            Rating:5

        }
        console.log(tripDetails);

        fetch('http://localhost:5000/trips' , {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(tripDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                swal("Congratzz!", "Trips added", "success");
                form.reset()
            }
        })
        .catch(err => console.log(err))
    }




  return (
    <div>
      <BgImage img={addNewTripImg} content={"Add New Trip"} />

      <div className="container mx-auto my-14">
        <div className="w-1/3 mx-auto my-12 p-8 shadow">
      
          <form onSubmit={addNewTrip}>
            <div className="mb-2 mt-2 block">
              <Label htmlFor="trip4" value="Enter trip name" />
            </div>
            <TextInput
              id="trip4"
              name="trip"
              type="text"
              placeholder="Coxbazar trip"
              required={true}
            />
            <div className="mb-2 mt-2 block">
              <Label htmlFor="placename4" value="Enter place Name" />
            </div>
            <TextInput
              id="placename4"
              name="place"
              type="text"
              placeholder="Coxbazar"
              required={true}
            />
            <div className="mb-2 mt-2 block">
              <Label htmlFor="price4" value="Enter trip price" />
            </div>
            <TextInput
              id="price4"
              name="price"
              type="number"
              placeholder="1000"
              required={true}
            />
            <div className="mb-2 mt-2 block">
              <Label htmlFor="photo4" value="Enter photoUrl" />
            </div>
            <TextInput
              id="photo4"
              name="photourl"
              type="text"
              placeholder="http://imgbb.com.ada/.jpg"
              required={true}
            />
            <div className="mb-2 mt-3 block">
                      <Label htmlFor="detail4" value="Details" />
                    </div>
                    <Textarea
                      id="detail4"
                      name="details"
                      placeholder="Enter Trip Details..."
                      required={true}
                      rows={4}
                    />
              <button
                      className="my-5 bg-sky-500 hover:bg-orange-500 rounded py-2 text-white font-medium  w-full text-lg"
                      type="submit"
                    >
                     Add New Trip
                    </button>       
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
