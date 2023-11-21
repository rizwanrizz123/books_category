import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Addbook from "./Addbook";
import axios from 'axios'

function Listbook() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('Best Sellers')
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setCategory(name)
    setShow(true);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        console.log(response?.data);
        setBooks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div style={{ marginBottom: '3rem', width: '80vw' }}>
        <h3>
          Best Sellers{" "}
          <Button onClick={() => handleShow('Best Sellers')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
        </h3>
        <div className="d-flex justify-content-start">
          {books.filter((book) => book?.category === 'Best Sellers').map((book, index) => (
            <Card key={book?.id} style={{ width: "18rem", marginRight: '20px' }}>
              <Card.Img style={{ height: '15rem', cursor:"pointer" }} variant="top" src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
              <Card.Body>
                <Card.Title>{book?.bookName}</Card.Title>
                <Card.Text>{book?.authorName}</Card.Text>
                <Card.Text>${book?.amount}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button className="me-1" >Add to Cart</Button>
                <Button>Wishlist</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3>
          Fiction Books{" "}
          <Button onClick={() => handleShow('Fiction Books')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
        </h3>
        <div className="d-flex justify-content-between">
          {books.filter((book) => book?.category === 'Fiction Books').map((book, index) => (
            <Card key={book?.id} style={{ width: "18rem" }}>
              <Card.Img style={{ height: '15rem', cursor:"pointer" }} variant="top" src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
              <Card.Body>
                <Card.Title>{book?.bookName}</Card.Title>
                <Card.Text>{book?.authorName}</Card.Text>
                <Card.Text>{book?.amount}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button  className="me-1" >Add to Cart</Button>
                <Button>Wishlist</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3>
          Award Winners{" "}
          <Button onClick={() => handleShow('Award Winners')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
        </h3>
        <div className="d-flex justify-content-between">
          {books.filter((book) => book?.category === 'Award Winners').map((book, index) => (
            <Card key={book?.id} style={{ width: "18rem" }}>
              <Card.Img style={{ height: '15rem', cursor:"pointer" }} variant="top" src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
              <Card.Body>
                <Card.Title>{book?.bookName}</Card.Title>
                <Card.Text>{book?.authorName}</Card.Text>
                <Card.Text>{book?.amount}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button className="me-1" >Add to Cart</Button>
                <Button>Wishlist</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3>
          Anime Comics{" "}
          <Button onClick={() => handleShow('Anime Comics')}>
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
        </h3>
        <div className="d-flex justify-content-between">
          {books.filter((book) => book?.category === 'Anime Comics').map((book, index) => (
            <Card key={book?.id} style={{ width: "18rem" }}>
              <Card.Img style={{ height: '15rem', cursor:"pointer" }} variant="top" src={book?.imageUrl} onClick={() => navigate(`/books/${book?.id}`)} />
              <Card.Body>
                <Card.Title>{book?.bookName}</Card.Title>
                <Card.Text>{book?.authorName}</Card.Text>
                <Card.Text>{book?.amount}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button  className="me-1" >Add to Cart</Button>
                <Button>Wishlist</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Addbook show={show} handleClose={handleClose} category={category} setBooks={setBooks} books={books} />
    </>
  );
}

export default Listbook;
