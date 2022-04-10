import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import '../App.css'

function Cards() {
  const arr = [
    { img: img1, location: "Lonavla", dist: "66 kilometers away" },
    { img: img2, location: "Alibagh", dist: "37 kilometers away" },
    { img: img3, location: "Calangute", dist: "396 kilometers away" },
    { img: img4, location: "Karjat", dist: "53 kilometers away" },
    { img: img3, location: "Nasik", dist: "156 kilometers away" },
    { img: img4, location: "Panchgani", dist: "366 kilometers away" }
  ];

  return (
    // <div className="section">
    <>
      <h3>Inspiration for your next trip</h3>
      <div className="cards">
        {arr.map((item) => {
          return (
            <div className="card">
              <img src={item.img} />
              <div className="card-down">
                <h2>{item.location}</h2>
                <p>{item.dist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
