import React from "react";
import { Link } from "react-router-dom";

const CardLogin = (props) => {
  return (
    <div className={`card border-black  ${props.className}`}>
      {/* <div className="card-body text-center bg-black ">
        <h5 className="card-title text-white  ">Sign in for your best experience</h5>
        <Link to="account/signin" className="btn btn-danger ">
          Sign in securely
        </Link>
      </div> */}
    </div>
  );
};

export default CardLogin;
