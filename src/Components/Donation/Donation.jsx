import React from "react";
import "../Donation/Donation.css";
import CheckmarkIcon from "../../assets/images/checkmark-icon.svg";
import VersionCardIcon from "../../assets/images/version-card-icon.svg";
import DownloadBtn from "../../assets/images/download-btn-icon.svg";

export const Donation = () => {
  return (
      <div className="bg-[#19191F] py-[6rem]">
	  <div className="container">
              <div className="row">
		  <div className="col-12 col-md-6">
		      <div className="donation-card h-100">
			  <h1>Donation</h1>
			  <div className="mt-[4rem]">
			      <img
				  src={CheckmarkIcon}
				  alt=""
				  width={23}
				  height={23}
				  className="mb-2"
			      />
			      <p className="desc">
				  Your donation help offset the costs of running the server,
				  the 15 minute backups, and the meetup group subscription.
			      </p>
			  </div>
			  <div className="mt-[4rem]">
			      <img
				  src={CheckmarkIcon}
				  alt=""
				  width={23}
				  height={23}
				  className="mb-2"
			      />
			      <p className="desc m-0">
				  Your donations aids in the recuritment of new players
				  who will add to the world, so each time you login, you see
				  something new.
			      </p>
			  </div>
			  <div className="mt-[4rem]">
			      <img
				  src={CheckmarkIcon}
				  alt=""
				  width={23}
				  height={23}
				  className="mb-2"
			      />
			      <p className="desc m-0">
				  Your donations supports new game modes and special events.
			      </p>
			  </div>
			  <a href="https://ko-fi.com/dgarvis" className="text-decoration-none" target="_blank">
			      <div className="mt-[6rem] text-center">
				  <button className="donate-btn">Donate</button>
			      </div>
			  </a>
		      </div>
		  </div>
		  <div className="col-12 col-md-6 d-none d-md-block">
		      <div className="older-version-card pt-[5rem] px-[4rem] mb-3 overflow-auto  h-100">
			  <h1>
			      Old versions <br />
			      of The World
			  </h1>
			  <div className="mt-4">
			      <div className="w-100 version-card flex justify-between items-center w-100">
				  <div className="flex gap-2 items-center">
				      <img src={VersionCardIcon} alt="" height={24} width={24} />
				      <div>
					  <p className="version-number m-0">Skyblock</p>
					  <p className="version-name m-0">Jan 24th 2024</p>
				      </div>
				  </div>
				  <a href="https://dl.somc.club/SoMC_Skyblock-2023_to_2024.zip" className="text-decoration-none" target="_blank">
				      <div className="download-btn-container">
					  <img src={DownloadBtn} width={15} height={15} alt="" />
				      </div>
				  </a>
			      </div>
			      <div className="w-100 version-card flex justify-between items-center w-100">
				  <div className="flex gap-2 items-center">
				      <img src={VersionCardIcon} alt="" height={24} width={24} />
				      <div>
					  <p className="version-number m-0">Penguins Vs Cats Dragon Speed Run</p>
					  <p className="version-name m-0">Nov 8th 2023</p>
				      </div>
				  </div>
				  <a href="https://dl.somc.club/PenguinsVsCats.zip" className="text-decoration-none" target="_blank">
				      <div className="download-btn-container">
					  <img src={DownloadBtn} width={15} height={15} alt="" />
				      </div>
				  </a>
			      </div>
			      <div className="w-100 version-card flex justify-between items-center w-100">
				  <div className="flex gap-2 items-center">
				      <img src={VersionCardIcon} alt="" height={24} width={24} />
				      <div>
					  <p className="version-number m-0">Penguin Craft V3</p>
					  <p className="version-name m-0">The World.</p>
				      </div>
				  </div>
				  <a href="https://dl.somc.club/PenguinCraft-World_3.zip" className="text-decoration-none" target="_blank">
				      <div className="download-btn-container">
					  <img src={DownloadBtn} width={15} height={15} alt="" />
				      </div>
				  </a>
			      </div>
			      <div className="w-100 version-card flex justify-between items-center w-100">
				  <div className="flex gap-2 items-center">
				      <img src={VersionCardIcon} alt="" height={24} width={24} />
				      <div>
					  <p className="version-number m-0">Penguin Craft V2</p>
					  <p className="version-name m-0">The World.</p>
				      </div>
				  </div>
				  <a href="https://dl.somc.club/PenguinCraft-World_2.zip" className="text-decoration-none" target="_blank">
				      <div className="download-btn-container">
					  <img src={DownloadBtn} width={15} height={15} alt="" />
				      </div>
				  </a>
			      </div>
			      <div className="w-100 version-card flex justify-between items-center w-100">
				  <div className="flex gap-2 items-center">
				      <img src={VersionCardIcon} alt="" height={24} width={24} />
				      <div>
					  <p className="version-number m-0">Penguin Craft V1</p>
					  <p className="version-name m-0">The World.</p>
				      </div>
				  </div>
				  <a href="https://dl.somc.club/PenguinCraft-World_1.zip" className="text-decoration-none" target="_blank">
				      <div className="download-btn-container">
					  <img src={DownloadBtn} width={15} height={15} alt="" />
				      </div>
				  </a>
			      </div>
			  </div>
		      </div>
		  </div>
              </div>
	  </div>
      </div>
  );
};
