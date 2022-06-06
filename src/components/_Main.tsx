import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import MissionProfile from "./MissionProfile";
import { Mission } from "../common/interface/mission.interface";

export const GET_MISSIONS = gql`
  query QueryMissions {
    missions {
      description
      id
      manufacturers
      name
      twitter
      website
      wikipedia
    }
  }
`;

const Main: React.FC = () => {
  const { data, loading, error } = useQuery(GET_MISSIONS);
  const [missionFilter, setMissionFilter] = useState("");
  const [sortIndicator, setSortIndicator] = useState("");

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMissionFilter(e.target.value.toLowerCase());
    setSortIndicator("");
  };
  const handleSortMissions = (e: React.MouseEvent<HTMLElement>) => {
    setMissionFilter("");
    if (sortIndicator === "Ascending") {
      setSortIndicator("Descending");
    } else {
      setSortIndicator("Ascending");
    }
  };

  const adjustedMissions = () => {
    if (!missionFilter && !sortIndicator) return data?.missions;
    if (missionFilter) {
      console.log("MISSION FILTER CALLED");
      return data.missions.filter(
        (mission: { name: string; id: string; description: string }) => {
          if (mission.name.toLowerCase().includes(missionFilter)) {
            return mission;
          }
          if (mission.description.toLowerCase().includes(missionFilter)) {
            return mission;
          }
        }
      );
    } else if (sortIndicator) {
      console.log("SORT CALLED");
      const sortByNameAsc = (a: Mission, b: Mission) => {
        console.log("ASC CALLED");
        console.log({ a, b });
        if (b.name < a.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
      };
      const sortByNameDesc = (a: Mission, b: Mission) => {
        console.log("DESC CALLED");
        console.log({ a, b });
        if (b.name > a.name) return 1;
        if (b.name < a.name) return -1;
        return 0;
      };
      const clonedMissions = [...data.missions];
      if (sortIndicator === "Descending") {
        return clonedMissions.sort(sortByNameDesc);
      } else {
        return clonedMissions.sort(sortByNameAsc);
      }
    }
  };

  const filteredMissions: Mission[] = adjustedMissions();
  if(loading) return null
  return (
    <div className="main">
      <h1 className="title-font">SpaceX Mission Tracker</h1>
      <section className="interaction-wrapper">
        <fieldset className="filter-wrap">
          <legend>
            <label className="subtitle-font" htmlFor="mission-filter">
              Filter Missions
            </label>
          </legend>
          <input id="mission-filter" onChange={handleFilterInputChange}></input>
        </fieldset>
        <fieldset className="sort-wrap">
          <legend className="subtitle-font">Sort Missions</legend>
          <button
            className="subtitle-font sort-button"
            onClick={handleSortMissions}
          >
            Sort Alphabetically {sortIndicator}
          </button>
        </fieldset>
      </section>
      {filteredMissions.map((mission: Mission, index: number) => {
        return <MissionProfile mission={mission} key={index} />;
      })}
    </div>
  );
};

export default Main;
