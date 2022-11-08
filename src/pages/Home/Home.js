import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner-1.jpg'

const Home = () => {
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
              <button className="mr-4 p-2 px-5 text-lg  border border-orange-500 hover:bg-transparent hover:text-white font-medium bg-orange-500 text-white rounded">
                See Upcoming Trips
              </button>
            </Link>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Home;