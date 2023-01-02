import React from "react";
import { Button, Card } from "react-bootstrap";
import MovieByRate from "../MovieByRate/MovieByRate";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <MovieByRate movierating={movie.rate} />
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary">Play movie</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
