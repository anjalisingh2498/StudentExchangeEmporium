import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const AvailableItems = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    })
  return (
    <div>
      <BookCards books={books} headline={<h1 style={{ fontSize: '40px' }}>Available items</h1>} />
    </div>
  )
}

export default AvailableItems