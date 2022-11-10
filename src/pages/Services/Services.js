import React, { useEffect, useState } from 'react';
import BgImage from '../../components/BgImage/BgImage';
import banner from '../../assets/images/pexels-suliman-sallehi-2128181.jpg'
import TripCard from '../../components/TripCard/TripCard';
import { ClockLoader} from 'react-spinners';
const Services = () => {

    const [allTrips , setAllTrips] = useState([])
    const [loadingState , setLoadingState] = useState(true)
    
    const CSSProperties = {
      display: "block",
      position : 'absolute',
      top: '50%',
      left: '50%',
    };

    useEffect(()=>{

        fetch(`https://travel-server-mukutdev.vercel.app/trips`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllTrips(data)
            setLoadingState(false)
        })

    }, [])


    return (
        <div>
             {
              
             loadingState ? <ClockLoader  color="#ea580c" 
             cssOverride={CSSProperties}/> :
      
             <>
             <BgImage img={banner} content={'All Trips'}></BgImage>
           
           <div className="md:py-16 py-10 container mx-auto">
         <div className="flex flex-col justify-center">
           <h2 className="text-orange-500 text-lg text-center font-semibold tracking-widest">
             All Trips
           </h2>
           <h3 className="md:text-4xl text-2xl font-semibold text-center mt-4 dark:text-white">
             Explore Upcoming Trips 
           </h3>
           <div className="my-12 grid md:grid-cols-3 grid-cols-1 justify-between gap-14">
                  {
                   allTrips.map(trip => <TripCard key={trip._id} trips={trip}></TripCard>)
                  } 
           </div>
         </div>
     </div></>
       
      
      } 
            
        </div>
    );
};

export default Services;