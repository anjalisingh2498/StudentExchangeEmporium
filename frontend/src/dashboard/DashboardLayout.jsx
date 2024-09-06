
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarItem from './SideBarItem'


const DashboardLayout = () => {
   // Dummy dashboard data
   const dashboardData = {
    totalListings: 25,
    totalSales: 154,
    averageRating: 4.7,
    earnings: 5678.5,
  };

  // Dummy testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Swastik',
      course:'Civil Engineering',
      comment: 'Selling my old books and equipment on this platform was easy and profitable. It helped me earn extra income while helping fellow students.',
    },
    {
      id: 2,
      name: 'Raushan',
      course: 'Mechnical Engineering',
      comment: 'I love how I can easily connect with buyers within our college. It’s convenient and safe!',
    },
    {
      id: 3,
      name: 'Riya',
      course: 'MCA',
      comment: 'Using this platform, I sold my handmade crafts and made enough to fund my next project. Highly recommended!',
    },
    {
      id: 4,
      name: 'Harshita',
      course:'ISE',
      comment: 'Selling my old books and equipment on this platform was easy and profitable. It helped me earn extra income while helping fellow students.',
    },
    {
      id: 5,
      name: 'Mehak',
      course: 'MCA',
      comment: 'I love how I can easily connect with buyers within our college. It’s convenient and safe!',
    },
    {
      id: 6,
      name: 'Aditi',
      course: 'Mechnical Engineering',
      comment: 'Using this platform, I sold my handmade crafts and made enough to fund my next project. Highly recommended!',
    },
   
  ];
  return (
    <div className= 'flex gap-4 flex-col md:flex-row bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 p-4 md:p-8'>
      <SideBarItem></SideBarItem>
      
     <Outlet></Outlet>

     <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4">Dashboard Overview</h2>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Listings */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Listings</h3>
          <p className="text-4xl font-bold">{dashboardData.totalListings}</p>
        </div>

        {/* Total Sales */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-4xl font-bold">{dashboardData.totalSales}</p>
        </div>

        {/* Average Rating */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
          <p className="text-4xl font-bold">{dashboardData.averageRating}</p>
        </div>

        {/* Earnings */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Earnings</h3>
          <p className="text-4xl font-bold">${dashboardData.earnings.toFixed(2)}</p>
        </div>
      </div>

         {/* Testimonials */}
         <div className="mt-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Student Success Stories</h2>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-700">{testimonial.comment}</p>
                <p className="text-sm text-gray-500 mt-2">{testimonial.course}</p>
              </div>
            ))}
          </div>
        </div>

        

      

     
    </div>
    </div>

    
  )
}

export default DashboardLayout