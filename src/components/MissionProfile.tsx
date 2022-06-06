import React from "react";
import { Mission } from "../common/interface/mission.interface";
import "./MissionProfile.css";

interface MissionProps {
  mission: Mission;
}

const MissionProfile: React.FC<{ mission: Mission }> = ({
  mission,
}: MissionProps) => {
  return (
    <details className="mission-profile background-transparent">
      <summary>
        <h4 className="mission-title title-font">{mission.name}</h4>
      </summary>
      <nav className="mission-profile-nav subtitle-font">
        <a className="" href={mission.website} target="_blank" rel="noreferrer">
          {mission.name} Website
        </a>
        {mission.twitter ? (
          <a href={mission.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        ) : null}
        {mission.wikipedia ? (
          <a href={mission.wikipedia} target="_blank" rel="noreferrer">
            Wikipedia
          </a>
        ) : null}
      </nav>
      <p className="mission-description p-font"> {mission.description}</p>
      <p className="subtitle-font">Manufacturer: {mission.manufacturers[0]}</p>
    </details>
  );
};

export default MissionProfile;
