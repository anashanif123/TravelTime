import React from "react";
import video1 from "../../assets/video.mp4";
import "./footer.scss";
import { MdOutlineTravelExplore } from "react-icons/md"; // Same icon as Navbar
import { FiSend } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer" data-aos="fade-up">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex" data-aos="fade-up" data-aos-delay="100">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerLinks grid" data-aos="fade-up" data-aos-delay="200">
          {/* Services Column */}
          <div className="linkGroup">
            <span className="groupTitle">Services</span>
            <ul>
              <li><a href="#services">Travel Planning</a></li>
              <li><a href="#booking">Booking Assistance</a></li>
              <li><a href="#tours">Custom Tours</a></li>
              <li><a href="#support">Customer Support</a></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="linkGroup">
            <span className="groupTitle">Destinations</span>
            <ul>
              <li><a href="#paris">Paris</a></li>
              <li><a href="#tokyo">Tokyo</a></li>
              <li><a href="#newyork">New York</a></li>
              <li><a href="#dubai">Dubai</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="linkGroup">
            <span className="groupTitle">Company</span>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="aboutCompany" data-aos="fade-up" data-aos-delay="300">
          <p>
            At Travel, we’re passionate about crafting unforgettable journeys. With years of experience, our team is dedicated to providing personalized travel experiences, from breathtaking destinations to seamless planning, ensuring every trip is a story worth telling.
          </p>
        </div>

        <div className="socialLinks flex" data-aos="fade-up" data-aos-delay="400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className="icon" />
          </a>
          <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
            <FaTripadvisor className="icon" />
          </a>
        </div>

        <div className="footerBottom flex" data-aos="fade-up" data-aos-delay="500">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon" />
              <span className="logoText">Travel</span>
            </a>
          </div>
          <div className="rightsText">
            <p>© {new Date().getFullYear()} Travel. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}