import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className=" container-fluid d-flex justify-content-between align-items-center bg-success">
        <div className="d-flex ms-5 mt-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="my-2"
            style={{ height: "40px" }}
          />
        </div>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-white text-decoration-none ">
            Home
          </Link>
          <Link
            to={"/contact"}
            className="text-white text-decoration-none me-5"
          >
            Contact
          </Link>
          <Link to={"/add"} className="text-white text-decoration-none me-5">
            ADD
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
