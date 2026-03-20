// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [fruit, setFruit] = useState();
//   useEffect(() => {
//     fetch("http://localhost:5001/fruits")
//       .then((res) => res.json())
//       .then((data) => setFruit(data));
//   }, []);
//   if (!fruit) return <p>Loading</p>;
//   return (
//     <div className="container">
//       <h1>Fruit List</h1>
//       <div className="row my-4">
//         {fruit.map((f) => (
//           <div className="col-md-6 mb-4" key={f.id}>
//             <div className="card h-100">
//               <div className="row">
//                 <div className="col-md-7">
//                   <img src={f.image} alt={f.name} className="card-img-top" />
//                 </div>
//                 <div className="col-md-5">
//                   {" "}
//                   <div className="card-body">
//                     <p className="fw-bold">{f.name}</p>
//                     <p>Price:{f.price}</p>
//                     <p>Stock {f.stock}</p>
//                     <p>{f.description}</p>
//                     <Link to={`/fruit/${f.id}`} className="btn btn-success">
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [fruit, setFruit] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:5001/fruits")
  //     .then((res) => res.json())
  //     .then((data) => setFruit(data));
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5001/fruits")
      .then((res) => setFruit(res.data))
      .catch((err) => console.log(err));
  });
  if (!fruit) return <p>Loading</p>;
  return (
    <div className="container">
      <h1>Fruit List</h1>
      <div className="row my-4">
        {fruit.map((f) => (
          <div className="col-md-3 mb-4" key={f.id}>
            <div className="card h-100">
              <img src={f.image} alt={f.name} className="card-img-top" />
              <div className="card-body">
                <p className="fw-bold">{f.name}</p>
                <p>Price:{f.price}</p>
                <p>Stock {f.stock}</p>
                <p>{f.description}</p>
                <Link to={`/fruit/${f.id}`} className="btn btn-success">
                  Read More
                </Link>
                <Link to={`/update/${f.id}`} className="btn btn-secondary ms-3">
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
