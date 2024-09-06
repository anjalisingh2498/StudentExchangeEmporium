import React, { useEffect, useState } from 'react';

const ManageItem = () => {
  const [allBooks, setAllBooks] =useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setAllBooks(data));
  })
/*
  const handleDelete =(id)=>{
    fetch(`http://localhost:5000/book/${id}`),{
      method:"DELETE",
    }.then(res.json()).then(data => alert("Deleted Successfully"));
  }
    */
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add CSRF token if required
        // "X-CSRF-Token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => alert("Deleted Successfully"))
      .catch((err) => console.error(err));
  };
  
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Items</h2>

      <table className='lg:w-[1180px]'>
        <thead>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>S.No</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Item Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Category</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Year</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Edit</th>
          </tr>
        </thead>
        <tbody className='divide-y'>
          {
            allBooks.map((book, index)=>(
              <tr key={book._id}>
                <td className='px-6 py-4 whitespace-nowrap'>{index+1}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{book.bookTitle}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{book.bookPrice}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{book.bookGenre}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{book.publicationYear}</td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-xs font-medium'>
                  <a href={`/admin/dashboard/edit-books/${book._id}`} className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-xs font-medium'>
                  <button onClick={() => handleDelete(book._id)} className="text-red-600 hover:underline dark:text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
       
      </table>

    </div>
  );
};

export default ManageItem;