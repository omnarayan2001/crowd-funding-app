import React, { useEffect, useContext, useState } from "react";

// INTERNAL IMPORT
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components"
const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();
  
  useEffect(()=>{
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  },[]);

// DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampagin] = useState();

  console.log(donateCampaign);
  return (
    <>
      <Hero title={titleData} createCampaign={createCampaign} />

      <Card
        title="All listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampagin}
      />
      <Card
        title="Your Created Campaign"  
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampagin}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default index;
