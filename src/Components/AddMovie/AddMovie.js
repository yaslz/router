import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //initial State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");

  //Update State
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };
  const handlePoster = (e) => {
    setPoster(e.target.value);
  };
  //function add movie
  const handleMovie = (e) => {
    let newMovie = { title, description, rate, poster };
    add(newMovie);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={handleTitle}
          />
          <Form.Label>Movie Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie description"
            value={description}
            onChange={handleDescription}
          />
          <Form.Label>Movie Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter movie rate"
            value={rate}
            onChange={handleRate}
          />
          <Form.Label>Movie posterUrl</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter movie posterUrl"
            value={poster}
            onChange={handlePoster}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
