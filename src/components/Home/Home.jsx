import React from "react";
import "./home.scss";
import video from "../../assets/23011-332483109_small.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

export default function Home() {
  return (
    <section className="home" data-aos="fade-up">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv" data-aos="fade-up" data-aos-delay="100">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search Your Holidays</h1>
        </div>
        <div className="cardDiv grid" data-aos="fade-up" data-aos-delay="200">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here......" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="PriceInput">
            <div className="label_total flex">
              <label htmlFor="">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex" data-aos="fade-up" data-aos-delay="300">
          <FiFacebook className="icon" />
          <AiOutlineInstagram className="icon" />
          <FaTripadvisor className="icon" />
          <BsListTask className="icon" />
          <TbApps className="icon" />
        </div>
      </div>
    </section>
  );
}