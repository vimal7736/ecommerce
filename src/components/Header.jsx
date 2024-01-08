import { lazy } from "react";
import { Link } from "react-router-dom";
import gmae from "../../src/image/ecomlogo.png";

const Search = lazy(() => import("./Search"));

const Header = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(to right, #f8f8f8, #f8f8f8 )',
        color: "#fff", // Text color to contrast with the gradient background
      }}
      className="p-2  "
    >
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 p-2 text-center">
            <Link className="navbar-brand" to="/">
              <img style={{}} src={gmae} width={70} height={40} alt="" />
            </Link>
          </div>
          
          <div className="col-md-5 p-2  ">
            <Search />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "10px",
            }}
            className="col-md-4  "
          >
            {/* <div className=" customtext nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className=" dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/detail">
                    Blog Detail
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="position-relative d-inline me-3">
              <Link to="/cart" className="btn btn-white">
                <i className="bi bi-cart3"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge bg-black rounded-circle">
                  2
                </div>
              </Link>
            </div>

            <div></div>
            <div
              style={{
                width: "50px",
                height: "40px",
              }}
              className="btn-group"
            >
              <button
                style={{
                  background: "#121212",
                }}
                type="button"
                className="btn btn-secondary rounded-circle   borders me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/account/profile">
                    <i className="bi bi-person-square"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/star/zone">
                    <i className="bi bi-star-fill text-warning"></i> Star Zone
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/orders">
                    <i className="bi bi-list-check text-primary"></i> Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/wishlist">
                    <i className="bi bi-heart-fill text-danger"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/notification">
                    <i className="bi bi-bell-fill text-primary"></i>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support">
                    <i className="bi bi-info-circle-fill text-success"></i>
                    Support
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-door-closed-fill text-danger"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
