import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner-1.jpg';
import Activity from '../../components/Activity/Activity';
import TripCard from '../../components/TripCard/TripCard';

const Home = () => {

    const [upcomingTrips , setupcomingTrips] = useState([])
    
    // const limit = 3 

    useEffect(()=>{

        fetch(`http://localhost:5000/trips/upcoming`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setupcomingTrips(data)
        })


    }, [])

    return (
        <section>
             <div
        className="md:py-72 py-24"
        bg-cover="true"
        bg-center="true"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container mx-auto">
          <div className="md:w-2/4 mx-7 md:mx-0">
            <h2 className="md:text-4xl  font-bold text-xl  text-white uppercase">
              Traveling Around The World
            </h2>
            <p className="md:text-xl text-2xl font-medium my-7 md:leading-10 text-white">
             Discover your next great adventure, become an explorer to get started!
            </p>
            <Link to={"/courses"}>
              <button className="mr-4 p-2 px-5 text-lg  border border-orange-500 hover:bg-sky-500 hover:border-sky-500 hover:text-white font-medium bg-orange-500 text-white rounded">
                See Upcoming Trips
              </button>
            </Link>
          </div>
        </div>
        </div>

        {/* upconing trips area */}
     
        <div className="md:py-16 py-10 container mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-orange-500 text-lg text-center font-semibold tracking-widest">
              UPCOMING TRIPS
            </h2>
            <h3 className="md:text-4xl text-2xl font-semibold text-center mt-4 dark:text-white">
              Explore Upcoming Trips 
            </h3>
            <div className="my-12 grid md:grid-cols-3 grid-cols-1 justify-between gap-14">
                   {
                    upcomingTrips.map(trip => <TripCard key={trip._id} trips={trip}></TripCard>)
                   }
            </div>
             <div className='flex justify-center'>  
                   <Link to={'/services'}>  <button className="bg-orange-500 text-lg font-medium py-2 px-8 text-white mt-7 hover:bg-sky-500">View All Trips</button></Link>
         </div>
          </div>

          <div className='my-14'>
          <h2 className="text-orange-500 text-lg text-center font-semibold tracking-widest">
             TRAVEL BY ACTIVITY
            </h2>
            <h3 className="md:text-4xl text-2xl font-semibold text-center mt-4 dark:text-white">
               ADVENTURE & ACTIVITY
            </h3>
                <div className='w-5/6 mx-auto my-5'>
                <Activity/>   
                </div>
          </div>
      </div>


        </section>
    );
};

export default Home;