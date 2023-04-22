import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { TablePage } from "./TablePage";
import Data from "../dummy-data.json";
import BreadCrum from "../pages/BreadCrum";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md="auto">
          <h4>Dashboard</h4>
          <BreadCrum Data={"Dashboard"} />
        </Col>
      </Row>
      <Col>Total Ticket - 50 </Col>
      <Col>Pending Ticket - 50</Col>
      <Row>
        <Col>
          <TablePage Data={Data} />
        </Col>
      </Row>
    </Container>
  );
};
