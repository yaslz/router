import React from "react";
import { Form } from "react-bootstrap";

const FilterByName = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Enter movie title.."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterByName;
