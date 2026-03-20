import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddFruit = () => {
  const [validated, setValidated] = useState(false);
  const [fruit, setFruit] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    nutrition: "",
    image: "images/apple.jpg",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      axios
        .post("http://localhost:5001/fruits", fruit)
        .then((res) => {
          alert("Thêm thành cônng!");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  const handleReset = () => {
    setFruit({
      name: "",
      price: "",
      stock: 0,
      description: "",
      nutrition: "",
      image: "images/apple.jpg",
    });
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
              value={fruit.name}
              onChange={(e) => setFruit({ ...fruit, name: e.target.value })}
            ></Form.Control>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="text"
              name="price"
              value={fruit.price}
              onChange={(e) => setFruit({ ...fruit, price: e.target.value })}
            ></Form.Control>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              required
              type="text"
              name="stock"
              value={fruit.stock}
              onChange={(e) => setFruit({ ...fruit, stock: e.target.value })}
            ></Form.Control>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              name="description"
              value={fruit.description}
              onChange={(e) =>
                setFruit({ ...fruit, description: e.target.value })
              }
            ></Form.Control>
            <Form.Label>Nutrition</Form.Label>
            <Form.Control
              required
              type="text"
              name="nutrition"
              value={fruit.nutrition}
              onChange={(e) =>
                setFruit({ ...fruit, nutrition: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group className="d-flex justify-content-end gap-3">
            <Button type="submit" className="btn btn-success w-20 mt-2">
              Create Fruit
            </Button>
            <Button
              type="button"
              className="btn btn-success w-20 mt-2"
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

export default AddFruit;
