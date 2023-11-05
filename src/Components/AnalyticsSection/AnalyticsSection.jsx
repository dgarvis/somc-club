import React, { useEffect, useState } from "react";
import "./AnalyticsSection.css";
import UsersIcon from "../../assets/images/users.svg";
import Discord from "../../assets/images/discord.svg";
import Box from "../../assets/images/box.svg";
import Clock from "../../assets/images/clock.svg";
import Chart from "../../assets/images/chart-line.svg";
import Skull from "../../assets/images/skull.svg";

const AnalyticsSection = () => {
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
    <div className="bg-[#19191F] py-[6rem]">
      <div className="container">
        <h1 className="section-heading text-center">Analytics</h1>
        <div className="mt-3 row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                    Minecraft <br /> Accounts
                </span>
                <h1 className="main-number">{stats?.minecraftAccounts}</h1>
              </div>
              <img src={UsersIcon} alt="" className="card-image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                  Total <br /> Playtime
                </span>
                  <h1 className="main-number">{Math.round(stats?.playtimeSeconds / 60 / 60 / 24)} days</h1>
              </div>
              <img src={Clock} alt="" className="card-image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                  Players <br /> active in the last week
                </span>
                <h1 className="main-number">{stats?.playersActiveWeek}</h1>
              </div>
              <img src={Chart} alt="" className="card-image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                  Blocks <br /> Broken
                </span>
                  <h1 className="main-number">{Math.round(stats?.blocksBroken / 100000)/10}M</h1>
              </div>
              <img src={Box} alt="" className="card-image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                  Discord <br /> Members
                </span>
                <h1 className="main-number">{stats?.discordMembers}</h1>
              </div>
              <img src={Discord} alt="" className="card-image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="analystics-card flex justify-end relative">
              <div className="text-end">
                <span className="card-heading">
                  No of <br /> Deaths
                </span>
                <h1 className="main-number">{stats?.playerDeaths}</h1>
              </div>
              <img src={Skull} alt="" className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
