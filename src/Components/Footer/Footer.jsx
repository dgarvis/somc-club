import React from "react";
import "../Footer/Footer.css";
import FooterLogo from "../../assets/images/footer-logo-mc.svg";
import Socials from "../../assets/images/socials.svg";

const Footer = () => {
  return (
    <div className="bg-[#141419] py-[4rem]">
      <div className="container">
        <div className="flex justify-center gap-4">
          <div className="left-section text-end">
            <a
              href="https://somc.club"
              className="text-decoration-none"
              target="_blank"
            >
              <img
                src={FooterLogo}
                alt=""
                width={84}
                height={27}
                className="mb-4 ml-auto"
              />
            </a>
              {/*<p>Terms & Conditions</p>
            <p>Discord Server</p>
            <p>Support</p>*/}
          </div>
          <div className="right-section">
            <p>
              Every Wednesday <br />
              at 7.00 ET meeting <br />
              in discord server. <br />
              Enjoy!
            </p>
              {/*<img src={Socials} alt="" />*/}
          </div>
        </div>
        <p className="rights-reserved mt-4">
          ©️ All rights reserved. SocialMinecraft inc. 2023.
        </p>
      </div>
    </div>
  );
};

export default Footer;
