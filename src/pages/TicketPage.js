import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Tickets from "../dummy-data.json";
import { MessagePart } from "./MessagePart";
import BreadCrum from "./BreadCrum";
import { useParams } from "react-router-dom";

export const TicketPage = () => {
  const { tId } = useParams();

  // const Ticket = Tickets[0];
  const [comment, setComment] = useState("");
  const [Ticket, setTicket] = useState(Tickets[0]);
  // console.log("----", typeof Ticket);

  useEffect(() => {
    for (let i = 0; i < Tickets.length; i++) {
      if (Tickets[i].id == tId) {
        setTicket(Tickets[i]);
        console.log("hiss", Tickets[i]);
        continue;
      }
    }
  }, [comment, tId]);

  const commentHandler = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const ReplyHandler = (e) => {
    e.preventDefault();
    alert("form is submitted");
  };

  // console.log("Ticket", Ticket);
  // console.log("history", Ticket.history);
  return (
    <div>
      <BreadCrum Data="Ticket Page" />
      <h3>Ticket Page</h3>
      <Row>
        <Col>
          {tId}
          <h5>Subject : {Ticket.status}</h5>
          <h5>Status : {Ticket.status}</h5>
          <h5>Date : {Ticket.addedAt}</h5>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
        {Ticket.history.length ? <MessagePart Data={Ticket.history} /> : <p>Nothing message</p> }
          
        </Col>
      </Row>
      <Row>
        <Form onSubmit={ReplyHandler}>
          <Form.Control
            row="5"
            type="textarea"
            placeholder="please type here the comment please........."
            onChange={commentHandler}
            value={comment}
          />
          <div className="mt-3 mb-3">
            <Button type="submit" variant="info">
              Reply
            </Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};
