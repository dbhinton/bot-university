import React from "react";
import { Form } from "react-bootstrap";

export default function NameSearch({ nameSearch }) {
  function handleChange(e) {
    nameSearch(e.target.value);
  }
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          type="Name"
          placeholder="Search By Name"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
