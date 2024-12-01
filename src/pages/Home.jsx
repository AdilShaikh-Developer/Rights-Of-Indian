import React, { Fragment, useEffect, useState } from "react";

import wavingFlag from "../assets/waving-indian-flag.webm";
import simplifedConstitution from "../assets/simplified-section-illustration.jpg";
import gamifiedConstitution from "../assets/gamified-section-illustration.jpg";

import "../stylesheets/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const taglines = [
    {
      Hinglish: (
        <h1>
          Har Bhartiya Ka <span>Adhikar</span>,<br /> Har Ghar Mein
          <span>Samvidhan.</span>
        </h1>
      ),
      English: (
        <h1>
          Every Indian's <span>Right,</span>
          <br /> <span>Constitution</span> in Every Home.
        </h1>
      ),
    },
    {
      Hinglish: (
        <h1>
          Jaano Apne <span>Adhikar,</span>
          <br /> Jaano Apna <span>Samvidhan.</span>
        </h1>
      ),
      English: (
        <h1>
          Know Your <span>Rights,</span>
          <br /> Know Your <span>Constitution.</span>
        </h1>
      ),
    },
    {
      Hinglish: (
        <h1>
          Apne <span>Adhikar</span> Ko Samjho,
          <br /> Apne <span>Samvidhan</span> Ko Jaano.
        </h1>
      ),
      English: (
        <h1>
          Understand Your <span>Rights,</span>
          <br /> Know Your
          <span>Constitution.</span>
        </h1>
      ),
    },
    {
      Hinglish: (
        <h1>
          Har Indian Ko <span>Samvidhan</span> Ki Pahchan.
        </h1>
      ),
      English: (
        <h1>
          Every Indian to Recognize the <span>Constitution.</span>
        </h1>
      ),
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index === taglines.length - 1 ? 0 : index + 1));
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="home-page">
      <div className="tagline-container">
        <video
          autoPlay
          muted
          loop
          src={wavingFlag}
          type="video/webm"
          className="flag-video"
        />
        <div className="tagline">
          {taglines.map((tagline, i) => (
            <Fragment key={i}>
              <h1
                className="hinglish-tagline"
                style={index === i ? { display: "block" } : { display: "none" }}
              >
                {tagline.Hinglish}
              </h1>
              {/* <h1
                className="english-tagline"
                style={index === i ? { display: "block" } : { display: "none" }}
              >
                {tagline.English}
              </h1> */}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="intro">
        <h1>
          Introducing <span>Rights Of Indian,</span> a platform dedicated to
          <span>empowering</span> every Indian with
          <span>Constitutional knowledge.</span>
        </h1>
        <div className="platform-overview-section">
          <h2>We Empowering Through Two Modes of Learning</h2>
          <div>
            <div className="overview-cards">
              <img src={simplifedConstitution} alt="" />
              <section className="description">
                <h3>Simplified Constitution</h3>
                <p>
                  Easy-to-understand videos, articles, and a smart chatbot for
                  assistance. No login required.
                </p>
              </section>
              <Link to={"/simplified-constitution"}>
                <button>Experience Simplified Learning</button>
              </Link>
            </div>
            <div className="overview-cards">
              <img src={gamifiedConstitution} alt="" />
              <section className="description">
                <h3>Gamified Constitution</h3>
                <p>
                  Engaging games to make learning fun, especially for children.
                  User authentication required.
                </p>
              </section>
              <Link to={"/gamified-constitution"}>
                <button>Start Your Gamified Journey</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
