import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        // Simulate dummy discounts for demonstration
        const booksWithDiscounts = data.map(book => ({
          ...book,
          discount: Math.floor(Math.random() * 30) + 5 // Generate a random discount between 5% to 35%
        }));
        setBooks(booksWithDiscounts);
      });
  }, []);

  // Dummy rating component for illustration
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
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Items are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book => (
          <Card key={book._id} className="book-card p-4">
            <img src={book.imageURL} alt={book.bookTitle} className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <StarRating rating={book.rating || 4.5} />
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
              {book.bookPrice}
              {book.discount && (
                <span className="text-red-600 font-semibold ml-2">
                  {book.discount}% OFF
                </span>
              )}
            </p>
            <div className='flex justify-between mt-4 space-x-4'>
              <Link to={`/book/${book._id}`} className='block'>
                <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Buy Now</button>
              </Link>
              <Link to="/Chat" className='block'>
                <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Chat With Seller</button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
