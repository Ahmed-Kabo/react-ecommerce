import React from "react";
import bg from "../assets/bg.jpg";
const Home = () => {
  return (
    <>
      <div className="heo">
        <div className="card bg-dark text-white" style={{ height: "93vh" }}>
          <img
            src={bg}
            className="card-img"
            alt="bg"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
          <div className="container">
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fs-2 fw-bolder display-4 mb-0 ">
                Card title
              </h5>
              <p className="card-text lead fs-2">
                This is a wider card with supporting text below as a natural
                
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
