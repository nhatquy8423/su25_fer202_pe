import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFruit = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const [fruit, setFruit] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    nutrition: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5001/fruits/" + id)
      .then((res) => setFruit(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      axios
        .put("http://localhost:5001/fruits/" + id, fruit)
        .then((res) => {
          alert("Update successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container className="w-50">
      <h2>Contact</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handelSubmit}
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
              Update Fruit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default UpdateFruit;
