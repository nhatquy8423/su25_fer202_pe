import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FruitDetail = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5001/fruits/${id}`)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [id]);
  if (!fruit) return <p>Loading</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/${fruit.image}`}
            alt={fruit.name}
            className="border image-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{fruit.name}</h2>
          <p>
            {" "}
            <span className="fw-bold">Price:</span> {fruit.price}
          </p>
          <p>
            <span className="fw-bold">Stock:</span>
            {fruit.stock}
          </p>
          <p>Nutrition: {fruit.nutrition}</p>
          <p>{fruit.description}</p>
          <Link to={"/"} className="btn btn-success">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FruitDetail;
