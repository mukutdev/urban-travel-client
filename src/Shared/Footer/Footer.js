import React from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram , BsGithub ,BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        
<div className="p-4 bg-white sm:p-6 dark:bg-gray-900  mt-20">
<footer className="container mx-auto ">
    <div className="md:flex ">
        <div className="mb-6 md:mb-0 md:w-1/3">
            <a href="https://flowbite.com/" className="flex items-center">
                <Link className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Travel Agency</Link>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-2/3 md:justify-end">
            <div className='md:text-right'>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                <ul className="text-gray-600 dark:text-gray-400">
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Popular Trip</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Coxbazar Trip</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Rangamati Trip</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Sajek Trip</a>
                    </li>
                </ul>
            </div>
            <div className='md:text-right'>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources Use</h2>
                <ul className="text-gray-600 dark:text-gray-400">
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
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Travel Agency™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <ImFacebook />
                <span className="sr-only">Facebook</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsInstagram />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsGithub/>
                <span className="sr-only">GitHub</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
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