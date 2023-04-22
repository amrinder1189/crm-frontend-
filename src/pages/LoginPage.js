import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const LoginPage = ({ handleOnChange, isLogin, Submithandler, email, pass }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Client Login Page</h3>
          <hr />
          <Form onSubmit={Submithandler}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                placeholder="password"
                onChange={handleOnChange}
              />
              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <a href="#!" onClick={() => isLogin("reset")}>
          Forget Password Reset it!
        </a>
      </Row>
    </Container>
  );
};

export default LoginPage;
