import React, { useState } from "react";
import "./main.scss";
import africa from "../../assets/arica.jpg"; // Fix path if needed
import brazil from "../../assets/brazil.jpg";
import Dubai from "../../assets/dubai.jpg";
import france from "../../assets/france.jpg";
import italy from "../../assets/italy.jpg";
import london from "../../assets/london.jpg";
import newyork from "../../assets/newyork.jpg";
import sydney from "../../assets/sydney.jpg";
import tokyo from "../../assets/tokyo.jpg";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const destinations = [
  { id: 1, img: france, destinationTitle: "Paris, France", grad: "★★★★★", fees: 1200, description: "Explore...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 2, img: tokyo, destinationTitle: "Tokyo, Japan", grad: "★★★★☆", fees: 1500, description: "Experience...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 3, img: newyork, destinationTitle: "New York City, USA", grad: "★★★★★", fees: 1800, description: "Visit...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 4, img: italy, destinationTitle: "Rome, Italy", grad: "★★★★☆", fees: 1300, description: "Discover...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 5, img: sydney, destinationTitle: "Sydney, Australia", grad: "★★★★★", fees: 2000, description: "Enjoy...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 6, img: london, destinationTitle: "London, UK", grad: "★★★★☆", fees: 1400, description: "Explore...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 7, img: Dubai, destinationTitle: "Dubai, UAE", grad: "★★★★★", fees: 2200, description: "Marvel...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 8, img: brazil, destinationTitle: "Rio de Janeiro, Brazil", grad: "★★★★☆", fees: 1600, description: "Experience...", bonus: Math.floor(Math.random() * 5) + 1 },
  { id: 9, img: africa, destinationTitle: "Cape Town, South Africa", grad: "★★★★★", fees: 1700, description: "Visit...", bonus: Math.floor(Math.random() * 5) + 1 },
];

export default function Main() {
  const [loadingStates, setLoadingStates] = useState(
    destinations.reduce((acc, dest) => ({ ...acc, [dest.id]: true }), {})
  );

  const handleImageLoad = (id) => {
    setLoadingStates((prev) => ({ ...prev, [id]: false }));
  };

  const handleDetailsClick = (destination) => {
    console.log("Details clicked for:", destination.destinationTitle);
  };

  return (
    <section className="main container section" data-aos="fade-up">
      <div className="secTitle" data-aos="fade-up" data-aos-delay="100">
        <h3 className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="singleDestination" data-aos="fade-up" data-aos-delay="200">
            <div className="imageDiv">
              {loadingStates[destination.id] && (
                <div className="skeletonLoader">
                  <div className="skeletonImage"></div>
                </div>
              )}
              <img
                src={destination.img}
                alt={destination.destinationTitle}
                className={`destinationImg ${!loadingStates[destination.id] ? "loaded" : ""}`}
                onLoad={() => handleImageLoad(destination.id)}
                onError={() => handleImageLoad(destination.id)}
              />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destination.destinationTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{destination.destinationTitle}</span>
              </span>
              <div className="fees flex">
                <div className="grade" title={`Rating: ${destination.grad}`}>
                  <span>
                    {destination.grad}
                    <small>+{destination.bonus}</small>
                  </span>
                </div>
                <div className="price">
                  <h5>${destination.fees.toLocaleString()}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{destination.description.slice(0, 100)}...</p>
              </div>
              <button className="btn flex" onClick={() => handleDetailsClick(destination)}>
                DETAILS <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}