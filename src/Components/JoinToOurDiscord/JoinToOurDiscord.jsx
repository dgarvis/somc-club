import React from "react";
import "../JoinToOurDiscord/JoinToOurDiscord.css";
import JoinToDiscordArrow from "../../assets/images/join-to-discord-arrow.svg";
import Star2 from "../../assets/images/Star 2.svg";

const JoinToOurDiscord = () => {
  return (
    <div className="bg-[#19191F] pb-[6rem]" id="discord">
      <div className="container pt-[6rem]">
        <div className="flex justify-center md:justify-between mb-4">
          <h1 className="text-[28px] m-0 join-our-discord-heading">
            JOIN TO OUR DISCORD
          </h1>
          <a
            href="https://discord.gg/eHyrQfgDGM"
            target="_blank"
            className="text-decoration-none"
          >
            <img
              src={JoinToDiscordArrow}
              alt=""
              width={23}
              height={25}
              className="d-none d-md-block"
            />
          </a>
        </div>
        <div className="section-card p-5 md:p-[5rem] relative">
          <div className="absolute middle-star"></div>
          <p className="m-0 sm:text-[12px] md:text-[16px]">MEETING EVERY</p>
          <h1 className="meeting-day sm:text-[20px] md:text-[64px]">
            WEDNESDAY
          </h1>
          <p className="meeting-time sm:text-[14px] md:text-[24px]">
            at 7:00 PM ET.
          </p>
          <p className="font-[300] my-5 sm:text-[16px] md:text-[14px]">
              We we show off cool builds, work on projects together,
            <br />
	      talk about the latest minecraft news and other topics,
            <br />
	      and generally making new friends on an adventure.
          </p>
          <a
            href="https://discord.gg/eHyrQfgDGM"
            target="_blank"
            className="text-decoration-none"
          >
            <div className="join-to-discord flex justify-center items-center gap-2 sm:w-[166px] sm:h-[44px] md:w-[248px] md:h-[66px]">
              <img src={JoinToDiscordArrow} alt="" width={13} height={13} />
              <span className="font-[Readex Pro] font-[600] text-[14px]">
                Join to Discord
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinToOurDiscord;
