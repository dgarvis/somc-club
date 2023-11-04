import React from "react";
import Header from "../Header/Header";
import HeartIcon from "../../assets/images/heart-icon.svg";
import CleanVanilla from "../../assets/images/clean-vanilla.svg";
import StarIcon from "../../assets/images/star-icon.svg";
import JoinServerArrow from "../../assets/images/join-server-arrow.svg";
import JoinArrow from "../../assets/images/join-arrow.svg";
import "../HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-[#141419] pb-[5rem] relative">
      <div className="absolute w-[326px] h-[326px] md:w-[596px] md:h-[596px] header-bg-gradient"></div>
      <Header />
      <div className="text-center mt-[8rem] container">
        <h1
          className="social-minecraft md:text-[64px] sm:text-inherit font-bold"
          style={{ letterSpacing: "6.4px" }}
        >
          SOCIAL MINECRAFT
        </h1>
        <p className="text-[24px] font-[400] font-[Readex Pro]">
	    The place where people come to mine, craft, and socialize.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-[6rem] gap-4">
          <div className="hero-section-card" style={{ padding: "41px" }}>
            <div className="flex gap-2">
              <img src={HeartIcon} alt="Heart" width={24} height={24} />
              <span className="card-header">Community</span>
            </div>
            <p className="text-left">
		We have an active discord community that loves to talk while mining.
            </p>
          </div>
          <div className="hero-section-card" style={{ padding: "40px" }}>
            <div className="flex gap-2">
              <img src={CleanVanilla} alt="Heart" width={24} height={24} />
              <span className="card-header">Clean Vanilla</span>
            </div>
            <p className="text-left">
              {`Vanilla server with your friends and groups without any differences between players!`}
            </p>
          </div>
          <div className="hero-section-card" style={{ padding: "41px" }}>
            <div className="flex gap-2">
              <img src={StarIcon} alt="Heart" width={24} height={24} />
              <span className="card-header">Creativity</span>
            </div>
            <p className="text-left">
              {`Use your imagination and import your textures\features in server!`}
            </p>
          </div>
        </div>
        <div className="mt-[6rem] relative">
          <a href="https://discord.gg/eHyrQfgDGM" className="text-decoration-none" target="_blank">
          <button
            style={{
              width: "242px",
              height: "88px",
              borderRadius: "5px",
              background: "linear-gradient(166deg, #B7F476 0%, #60AC34 100%)",
            }}
            className="join-now-btn-hero"
          >
            JOIN SERVER
          </button>
          </a>
          <div
            className="d-none d-md-flex"
            style={{
              position: "absolute",
              display: "flex",
              top: "-38%",
              left: "62%",
            }}
          >
            <img
		src={JoinArrow}
              alt=""
              className="arrow-img"
            />
            {/* <div className="arrow-img"></div> */}
            <a href="https://discord.gg/eHyrQfgDGM" className="text-decoration-none">
              <p className="mt-[1.5rem]">
                Join to us only <br /> through discord!
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
