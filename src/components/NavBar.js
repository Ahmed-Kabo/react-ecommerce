import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingBag,  faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  proudcts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark me-2">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </a>
              <a href="" className="btn btn-outline-dark me-2">
                <FontAwesomeIcon icon={faSignInAlt} /> sign out
              </a>
              <a href="" className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faShoppingBag} /> card
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
