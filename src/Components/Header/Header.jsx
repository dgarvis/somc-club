import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import Socials from "../../assets/images/socials.svg";
import Bullseye from "../../assets/images/u_bullseye.svg";
import JoinNowBtnBG from "../../assets/images/join-now-btn-bg.png";
import Logo from "../../assets/images/footer-logo-mc.svg";
import { Link } from "react-router-dom";

const Header = () => {

    const [stats, setStats] = useState(null);
    useEffect(() => {
	fetchAnalytics();
    }, []);
    
    const fetchAnalytics = async () => {
	const res = await fetch("https://api.somc.club/stats")
	      .then((stats) => stats.json())
	      .then((res) => {
		  console.log(res);
		  setStats(res);
	      })
	      .catch((err) => console.error(err));
    };
    
  return (
    <div className="container relative z-50">
      <header className="flex justify-between items-center py-5">
        <img
          src={Logo}
          alt=""
          width={84}
          height={27}
          className="d-block d-md-none"
        />
        <div className="d-none d-md-flex gap-4 items-center">
          <a
            href={"https://somc.club/"}
            target="_blank"
            className="text-decoration-none nav-item"
          >
            Home
          </a>
          <a
              href={"https://discord.gg/eHyrQfgDGM"}
            className="text-decoration-none nav-item"
          >
            Discord
          </a>
          <a
            href={"https://github.com/dgarvis/somc-resourcepack"}
            className="text-decoration-none nav-item"
          >
            Creativity
          </a>
          <a
            href={"https://www.meetup.com/somc-social-minecraft/"}
            className="text-decoration-none nav-item"
          >
            Meetup Group
          </a>
          <a
            href={"https://ko-fi.com/dgarvis"}
            className="text-decoration-none nav-item"
          >
            Donation
          </a>
        </div>
        <div className="flex items-center gap-4">
            {/*<img
            src={Socials}
            alt="Socials"
            width={134}
            height={20}
            className="d-none d-md-block"
            />*/}
          <div
            className="online-players rounded-[25px] d-none d-md-flex items-center justify-center gap-2 bg-[#1A1C18]"
            style={{
              width: "134px",
              height: "50px",
            }}
          >
            <img src={Bullseye} alt="Bullseye" />
              <span>{stats?.playersActiveWeek} Active Players</span>
          </div>
            <a href="https://discord.gg/eHyrQfgDGM">
            <button className="join-now-btn text-white font-[Pixeloid Sans] text-[14px] font-bold">
              JOIN NOW!
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
