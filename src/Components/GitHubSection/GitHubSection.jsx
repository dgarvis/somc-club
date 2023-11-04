import React from "react";
import "../GitHubSection/GitHubSection.css";
import GitHubIcon from "../../assets/images/github-icon.svg";
import GitHub from "../../assets/images/Github.svg";

const GitHubSection = () => {
  return (
    <div className="github-section bg-[#141419] py-[4rem]">
      <div className="container flex items-center justify-center md:justify-between flex-wrap">
        <div className="sm:w-full md:w-[75%] md:text-left sm:text-center">
          <h1 className="theme-styled-text text-[28px]">
            HELP US WITH YOUR IDEAS!
          </h1>
          <p className="submit-items-text">
            Submit your Custom Props to our GitHub!
          </p>
          <div className="d-none d-md-flex justify-between items-center p-3 github-card">
            <div className="text-sec">
              <div className="flex items-center justify-evenly mb-1">
                <span>{`textures ->>`}</span>
                <span>{`items ->>`}</span>
              </div>
              <div className="flex items-center justify-around">
                <span>{`ideas ->>`}</span>
                <span>{`creativity ->>`}</span>
                <span>{`imagantion ->>`}</span>
              </div>
            </div>
            <a href="https://github.com/dgarvis/somc-resourcepack" className="text-decoration-none">
            <div className="github-button flex justify-center items-center gap-2">
              <img src={GitHubIcon} alt="" width={13} height={13} />
              <span>GitHub</span>
            </div>
            </a>
              
          </div>
        </div>
        <div className="vertical-text-container relative text-center">
          <div
            style={{
              transform: "rotate(-90deg)",
              position: "absolute",
              top: "50%",
              left: "-34%",
            }}
          >
            <span className="github-text-around vertical">SocialMinecraft</span>
          </div>
          <span className="github-text-around horizontal">SocialMinecraft</span>
          <img
            src={GitHub}
            alt=""
            width={220}
            height={220}
            className="mx-auto"
          />
          <span className="github-text-around horizontal">SocialMinecraft</span>
          <div
            style={{
              transform: "rotate(90deg)",
              position: "absolute",
              top: "50%",
              right: "-34%",
            }}
          >
            <span className="github-text-around vertical">SocialMinecraft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubSection;
