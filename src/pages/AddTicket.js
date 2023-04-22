import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export const AddTicket = () => {
  const initialField = {
    status: "open",
    date: null,
    comment: "ok still testing phase 1",
  };

  const [field, setField] = useState(initialField);

  const FieldchangeHandler = (e) => {
    const { name, value } = e.target;

    setField({ ...field, [name]: value });
  };

  const SubmitAddTicket = (e) => {
    e.preventDefault();
    console.log(field);
  };

  return (
    <Container>
      <Row>
        <h3>Add Ticket Page</h3>
        <Col>
          <Form onSubmit={SubmitAddTicket}>
            <Form.Group>
              <Form.Label>status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={field.status}
                placeholder="Email"
                onChange={FieldchangeHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={field.date}
                placeholder="Email"
                onChange={FieldchangeHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="textarea"
                name="comment"
                value={field.comment}
                placeholder="password"
                onChange={FieldchangeHandler}
              />
              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
