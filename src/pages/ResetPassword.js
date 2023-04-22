import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const ResetPassword = ({
  handleOnChange,
  isLogin,
  Submithandler,
  email,
  pass,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reset Password Page</h3>
          <hr />
          <Form onSubmit={Submithandler}>
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
        <a href="#!" onClick={() => isLogin("login")}>
          Login!
        </a>
      </Row>
    </Container>
  );
};

export default ResetPassword;
