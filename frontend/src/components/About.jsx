import React from 'react';
import { FaBook, FaUsers, FaLock, FaComments, FaGift } from 'react-icons/fa';
import AboutImage from '../assets/Images/about1.png';

const About = () => {
  return (
    <div className="max-w-screen-l mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap-reverse items-center justify-between">
        <br></br>
        <br></br>
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={AboutImage} alt="About" className="rounded-lg shadow-lg w-full" />
        </div>
        
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 md:pl-12">
        <br></br><br></br>
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg">
            Welcome to the Student Exchange Emporium, your go-to platform for connecting students with essential educational resources and opportunities. Our mission is to facilitate a seamless buy and sell of items and services within the student community, making learning accessible and affordable for everyone.
          </p>
          <br></br>
          <h2 className="text-3xl font-semibold mt-8">Who We Are</h2>
          <br></br>
          <p className="text-lg">
            We are a dedicated team passionate about fostering a collaborative environment where students can buy, sell, and trade educational materials and other essentials. Our platform also provides a space for users to connect and support each other's academic journeys.
          </p>
          <br></br>
          <h2 className="text-3xl font-semibold mt-8">What We Offer</h2>
          <br></br> 
          <ul className="list-none space-y-4 text-lg">
  <li className="flex items-center">
    <FaBook className="mr-3 text-blue-500 text-2xl" />
    <span>
    <b className="inline">User-Friendly Interface</b>
      <p>Navigate our site with ease, whether you're listing items or searching for what you need.</p>
      
    </span>
  </li>
  <li className="flex items-center">
    <FaUsers className="mr-3 text-green-500 text-2xl" />
    <span>
    <b className="ml-2">Diverse Listings</b>
      <p>From textbooks to tech gadgets, find a wide range of items tailored to student needs.</p>
      
    </span>
  </li>
  <li className="flex items-center">
    <FaLock className="mr-3 text-red-500 text-2xl" />
    <span>
    <b className="inline">Secure Transactions</b>
      <p>Buy and sell with confidence through our secure payment and transaction system.</p>
     
    </span>
  </li>
  <li className="flex items-center">
    <FaGift className="mr-3 text-yellow-500 text-2xl" />
    <span>
    <b className="ml-2">Reward System</b>
      <p>Participate in our reward program to earn points and benefits as you engage with the platform.</p>  
    </span>
  </li>
</ul>
        </div>
      </div>
    </div>
  );
};

export default About;
