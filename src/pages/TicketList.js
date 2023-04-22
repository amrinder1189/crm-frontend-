import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import BreadCrum from "../pages/BreadCrum";
import { TablePage } from "../pages/TablePage";
import Tickets from "../dummy-data.json";

export const TicketList = () => {
  const [str, setStr] = useState("");
  const [filterStr, SetFilterStr] = useState(Tickets);

  useEffect(() => {}, [str, filterStr]);

  const strHandler = (e) => {
    setStr(e.target.value);
    FilterStr(e.target.value);
  };

  const FilterStr = (string) => {
    const resultStr = Tickets.filter((row) =>
      row.status.toLowerCase().includes(string.toLowerCase())
    );
    SetFilterStr(resultStr);
  };
  // console.log("filter", filterStr);

  return (
    <>
      <Row>
        <h3>Ticket Lists</h3>
        <BreadCrum Data={"Ticket Lists"} />
        <Col>
          <Form md="6">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="search"
              value={str}
              placeholder="search..."
              onChange={strHandler}
            />
          </Form>
        </Col>
        <hr />
      </Row>

      <Row>
        <Col>
          <TablePage Data={filterStr} />
        </Col>
      </Row>
    </>
  );
};
