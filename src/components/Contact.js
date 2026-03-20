import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      axios
        .post("http://localhost:5001/contacts", inputData)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  const handleReset = () => {
    setInputData({ name: "", username: "", email: "" });
    setValidated(false);
  };
  return (
    <Container className="w-50">
      <h2>Contact</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="card p-5"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validation">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            ></Form.Control>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={inputData.username}
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            ></Form.Control>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group className="d-flex justify-content-end gap-3">
            <Button type="submit" className="btn btn-success w-20 mt-2">
              Create
            </Button>
            <Button
              type="button"
              className="btn btn-secondary w-20 mt-2"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
