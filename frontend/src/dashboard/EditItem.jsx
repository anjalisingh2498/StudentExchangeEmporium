import React, {useState} from 'react'
import { useLoaderData, useParams} from 'react-router-dom'
import {  Button, Label, TextInput, Textarea } from "flowbite-react";
import { useEffect } from 'react'

const EditItem = () => {
  const{id} = useParams();
  const {bookTitle, bookPrice,imageURL, bookGenre, bookDescription, bookPDFURL} = useLoaderData()

  const bookCategorgies =[
    "Textbook",
    "Stationary",
    "Clothes",
    "Computer Science",
    "Programming",
    "Horror",
    "Handwritten Notes",
    "Psychology",
    "Bibliography",
    "Travel",
    "Religion",
    "Wooden"
]
const [selectBookCategory, setSelectedBookCategory] = useState(bookCategorgies[0]);
const handleChangedSelectedValue = (event) =>{
  //console.log(event.target.value);
  setSelectedBookCategory(event.target.value);
}
/*
//handle update
const handleUpdate =(event)=>{
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const bookAuthor = form.bookAuthor.value;
  const imageURL = form.imageURL.value;
  const bookGenre= form.bookGenre.value;
  const bookDescription= form.bookDescription.value;
  const bookPDFURL = form.bookPDFURL.value;

  const UpdatebookObject ={
    bookTitle,bookAuthor,imageURL,bookGenre, bookDescription, bookPDFURL
  }
 // console.log(bookObject)
 fetch("http://localhost:5000/book/${id}", {
    method:"PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UpdatebookObject)
 }).then(res=> res.json()).then(data =>{
  alert("Updated Successfully")
  
 })
}
 */

const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const bookPrice = form.bookPrice.value;
  const imageURL = form.imageURL.value;
  const bookGenre = form.bookGenre.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL = form.bookPDFURL.value;

  const UpdatebookObject = {
    bookTitle,
    bookPrice,
    imageURL,
    bookGenre,
    bookDescription,
    bookPDFURL,
  };

  fetch(`http://localhost:5000/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UpdatebookObject),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Updated Successfully");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to update. Please try again.");
    });
};
return (
  <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Update a item</h2>
    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="bookTitle" value="Title" />
      </div>
      <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Name of Item" required />
    </div>


    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="bookPrice" value="Price" />
      </div>
      <TextInput id="bookPrice" name='bookPrice' type="text" defaultValue= {bookPrice} placeholder="Price" required />
    </div>
    </div>

    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="imageURL" value="Image URL" />
      </div>
      <TextInput id="imageURL" name='imageURL' type="text" defaultValue={imageURL} placeholder="Image URL" required />
    </div>


    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="inputState" value="Category" />
      </div>
     <select id="inputState" name='bookGenre' className='w-full rounded' value={selectBookCategory} 
     onChange={handleChangedSelectedValue}>
      {
       bookCategorgies.map((option)=> <option key={option} value={option}>{option}</option>)
      }
     </select>
    </div>
    </div>

    {/*Description*/}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="bookDescription" value="Description" /> 
        </div>
       <Textarea id="bookDescription" name='bookDescription' type="text" defaultValue={bookDescription} placeholder="Item Description" required rows={4} />
        
      </div>
   
      {/*bookpdf*/}

      <div>
      <div className="mb-2 block">
        <Label htmlFor="bookPDFURL" value="(Optional)" />
      </div>
      <TextInput id="bookPDFURL" name='bookPDFURL' type="text" defaultValue={bookPDFURL} placeholder="Optional" required />
    </div>

       {/*button*/}
       <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Update Item
      </Button>
      
       
    
  </form>
  </div>

  
)
}

export default EditItem