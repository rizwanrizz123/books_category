import React, { useEffect, useState } from 'react'
import './View.css'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Viewbook() {

  const {id} = useParams();
  const [book, setBook] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        console.log(response?.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={book?.imageUrl}
          alt={book?.bookName}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <h3>{book?.bookName}</h3>
          <p>{book?.authorName}</p>
          <p>{book?.description}</p>
          <br />

          <p>
            Language : {book?.language}
          </p>
          <p>
            Book Length : {book?.pages} pages
          </p>
          <Button>Add to Cart</Button>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Viewbook