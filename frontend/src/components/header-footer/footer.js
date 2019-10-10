import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white text-center page-footer">
        <Link to="/Rules">
          <span className="text-light font-weight-bolder">
            &copy; Nibble Computer Society
          </span>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
