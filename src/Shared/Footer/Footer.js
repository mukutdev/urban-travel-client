import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram , BsGithub ,BsLinkedin } from 'react-icons/bs';

const Footer = () => {

    const [trips , setTrips] = useState([])
    
    // const limit = 3 

    useEffect(()=>{

        fetch(`https://travel-server-mukutdev.vercel.app/trips/upcoming`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTrips(data)
        })


    }, [])


    return (
        
<div className="p-4 bg-sky-500 sm:p-6 dark:bg-gray-900  mt-20">
<footer className="container mx-auto py-8 text-white ">
    <div className="md:flex ">
        <div className="mb-6 md:mb-0 md:w-1/3">
            <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">URBAN TRAVEL</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-2/3 md:justify-end">
            <div className='md:text-right'>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">Quick Links</h2>
                <ul className=" dark:text-gray-400">
                    <li className="mb-4">
                        <Link to={'/'} className="hover:underline">Home</Link>
                    </li>
                    <li  className="mb-4">
                      <Link to={'/services'} className="hover:underline">Services</Link>
                    </li>
                    <li  className="mb-4">
                      <Link to={'/blog'} className="hover:underline">Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className='md:text-right'>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">Popular Trip</h2>
                <ul className=" dark:text-gray-400">
                    {
                        trips.map(t => <li key={t._id} className="py-2"><Link   to={`/services/${t._id}`} className="hover:underline " > {t.tripName} </Link></li>)
                    }

                </ul>
            </div>
            <div className='md:text-right'>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">Resources Use</h2>
                <ul className=" dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://reactjs.org/" className="hover:underline"> React Js</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://expressjs.com/" className="hover:underline">Express Js</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.mongodb.com/" className="hover:underline">MongoDb</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm  sm:text-center ">© 2022 <a href="https://flowbite.com/" className="hover:underline">Travel Agency™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

            <a href="/" className="">
                <ImFacebook />
                <span className="sr-only">Facebook</span>
            </a>
            <a href="/" className="">
                <BsInstagram />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="/" className="">
                <BsGithub/>
                <span className="sr-only">GitHub</span>
            </a>
            <a href="/" className=" ">
                <BsLinkedin/>
                <span className="sr-only">LinkedIn</span>
            </a>
            
        </div>
    </div>
</footer>
</div>

    );
};

export default Footer;