import { lazy } from "react";
import { Link } from "react-router-dom";
import gmae from "../../src/image/gmae.webp";
import "./Topmenu.css";
import homeicon from "../../src/icons/home1.png"

const Search = lazy(() => import("./Search"));

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg   p-2">
      <div className="container-fluid">
        <button
          className=" navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="  navbar-toggler-icon" />
        </button>
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className=" collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <div
            style={{ display: "flex", gap: "100px" }}
            className=" navbar-nav"
          >
            <div className="customtext nav-item">
              <Link className=" customtext nav-link" to="/">
                <img 
                style={{width:"30px" , height:"30px"}}
                src={homeicon} alt="" />
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/category">
              Spring Collection
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/category">
              Summer Essentials
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/category">
              Fall Fashion
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/category">
                Garden & Outdoors
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/category">
              Formal Wear
              </Link>
            </div>
            <div className="nav-item">
              <Link className=" customtext nav-link" to="/documentation">
              Vintage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
