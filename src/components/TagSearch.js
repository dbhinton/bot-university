import React from "react";
import { Form } from "react-bootstrap";

export default function TagSearch({ tagSearch }) {
  function handleChange(e) {
    tagSearch(e.target.value);
  }
  return (
    <Form>
      <Form.Group controlId="tagSearch">
        <Form.Control
          type="Name"
          placeholder="Search By Tag"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
