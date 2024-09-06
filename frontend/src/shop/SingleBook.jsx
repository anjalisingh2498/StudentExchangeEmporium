import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPrice, publicationYear } = useLoaderData();

  // Ensure bookPrice is a number
  const price = parseFloat(bookPrice);

  // Simulate a random discount for demonstration
  const discount = Math.floor(Math.random() * 30) + 5; // Generate a random discount between 5% to 35%
  const discountedPrice = price - (price * (discount / 100));

  // Dummy rating component for illustration
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill().map((_, index) => (
          <FaStar className="text-yellow-500" key={`full-star-${index}`} />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" key={'half-star'} />}
        {Array(emptyStars).fill().map((_, index) => (
          <FaRegStar className="text-yellow-500" key={`empty-star-${index}`} />
        ))}
      </div>
    );
  };

  // Dummy rating for demonstration purposes
  const dummyRating = 4.3;

  return (

    <div className="mt-36 px-6 lg:px-28 max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img src={imageURL} alt={bookTitle} className="h-150 w-full lg:w-1/2 object-cover rounded-md shadow-lg" />
        <div className="lg:ml-6 mt-6 lg:mt-0 w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">{bookTitle}</h2>
          <p className="text-lg text-gray-600 mt-2">${bookPrice}</p>
          {/* <p className="text-xl text-gray-900 mt-2">${discountedPrice.toFixed(2)} <span className="text-sm text-green-600">({discount}% OFF)</span></p> */}
          <StarRating rating={dummyRating} />
          <p className="text-md text-gray-700 mt-4">{bookDescription}</p>
          <p className="text-md text-gray-500 mt-2">Published: {publicationYear}</p>
          <br></br>
          <br></br>
          <Link to="/Chat" ><button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Chat with Seller
          </button>
          </Link>
        </div>
        <div className="lg:ml-6 mt-6 lg:mt-0 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
          {/* Replace with actual payment form components */}
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter card number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter CVV"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => alert('Redirect to payment processing')}
            >
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
