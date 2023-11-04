import React from "react";
import "../MeetupGroupScreenshots/MeetupGroupScreenshots.css";
import Arrow from "../../assets/images/join-to-discord-arrow.svg";
import OpenHeart from "../../assets/images/open-heart.svg";
import FavouriteScreenshotCardIcon from "../../assets/images/favourite-card-icon.svg";

const MeetupGroupScreenshots = () => {
  return (
    <div className="bg-[#141419] py-[6rem]">
      <div className="container">
        <div className="flex items-end flex-col">
          <div className="flex items-center gap-3">
            <h1 className="theme-styled-text text-[28px] m-0">
              SCREENSHOTS FROM Meetup GROUP
            </h1>
            <img src={Arrow} alt="" width={14} height={14} />
          </div>
          <p className="description-text">
            These screenshots were taken from our{" "}
            <span className="text-decoration-underline">meetup group</span> and
            discord!
          </p>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
                src="/screenshots/01-Spawn.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Community Space</p>
                <p className="posted-by">posted by Dylan</p>
                <p className="my-3 desc">
		    The crazyness that appears in groups.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
                src="/screenshots/02-Mercury.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Water Monster</p>
                <p className="posted-by">posted by Mercury</p>
                <p className="my-3 desc">
		    Every base needs an awesome enterance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
                src="/screenshots/03-Aaron.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Aaron's Cozy Home</p>
                <p className="posted-by">posted by Aaron</p>
                <p className="my-3 desc">
		    It is bigger on the inside. Ok, this base has
		    so many basement levels.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
		  src="/screenshots/04-Simon.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Overgrown Bridge</p>
                <p className="posted-by">posted by Simon</p>
                <p className="my-3 desc">
		    A bridge reclaimed by nature.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
		  src="/screenshots/05-Kat.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Kat's Home</p>
                <p className="posted-by">posted by Kat</p>
                <p className="my-3 desc">
		    I hear this place has been resold and reclaimed a
		    few times.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
		  src="/screenshots/06-Dylan.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Roses?</p>
                <p className="posted-by">posted by Dylan</p>
                <p className="my-3 desc">
		    Don't mess with the farmer when he wants
		    wither roses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
		  src="/screenshots/07-BethanyJosh.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Bethany and Josh's</p>
                <p className="posted-by">posted by Bethany and Josh</p>
                <p className="my-3 desc">
		    A home away from home, but closer to spawn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="screenshot-card">
              <img
		  src="/screenshots/08-Simon.png"
                alt=""
                className="w-100"
                style={{ borderRadius: "25px 25px 0px 0px" }}
                width={301}
                height={180}
              />
              <div className="p-4">
                <p className="card-title">Mountian House</p>
                <p className="posted-by">posted by Simon</p>
                <p className="my-3 desc">
		    It is said that wardens once stormed this quiet home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupGroupScreenshots;
