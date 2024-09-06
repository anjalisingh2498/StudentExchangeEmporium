import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BookCards.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const BookCards = ({ headline, books }) => {
  const [booksWithDiscounts, setBooksWithDiscounts] = useState([]);

  useEffect(() => {
      // Generate discounts only once when component mounts
      const booksWithDiscounts = books.map(book => ({
          ...book,
          discount: Math.floor(Math.random() * 30) + 5 // Generate a random discount between 5% to 35%
      }));
      setBooksWithDiscounts(booksWithDiscounts);
  }, []);
  
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {Array(fullStars).fill(<FaStar className="text-yellow-500" key={'full-star'} />)}
            {halfStar && <FaStarHalfAlt className="text-yellow-500" key={'half-star'} />}
            {Array(emptyStars).fill(<FaRegStar className="text-yellow-500" key={'empty-star'} />)}
        </div>
    );
};


    return (
        <div className='my-16 px-4 lg:px-4'>
            <h2 className='text-5xl text-center font-bold text-blue my-5'>{headline}</h2>
            {/* CARDS */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {books.map(book => (
                        <SwiperSlide key={book._id} className="book-card">
                            <Link to={`/book/${book._id}`}>
                                <div className='relative'>
                                    <img src={book.imageURL} alt="" />
                                    {/* <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'> */}
                                        {/* <Link to={`/cart/${book._id}`}> */}
                                            {/* <FaCartShopping className='w-4 h-4 text-white' /> */}
                                        {/* </Link> */}
                                    {/* </div> */}
                                </div>
                                <div>
                                    <h3>{book.bookTitle}</h3>
                                    <StarRating rating={book.rating || 4.5} />
                                    <p>{book.bookPrice}</p>
                                    {book.discount && (
                                        <p className="text-red-600 font-semibold">{book.discount}% OFF</p>
                                    )}
                                </div>
                            </Link>
                            <div className='flex justify-between mt-4 space-x-4'>
                                <Link to={`/book/${book._id}`} className='block'>
                                    <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Buy Now</button>
                                </Link>
                                <Link to="/Chat" className='block'>
                                    <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Chat With Seller</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BookCards;
