"use client";
import React, { useState, useEffect } from "react";

// Define the Team interface
interface Team {
  id: number;
  prettyName: string;
}

// Update the getTeams function to type the fetched data
const getTeams = async (): Promise<Team[]> => {
  const response = await fetch("/api/teams");
  const data = await response.json();
  console.log({ data });
  return data; // Make sure this matches the structure returned by your API
};

export default function TeamSelect() {
  // Use the Team[] type for the teams state
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  useEffect(() => {
    getTeams()
      .then((teams) => {
        setTeams(teams);
        if (teams.length > 0) {
          setSelectedTeam(teams[0].id.toString());
        }
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, []);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectionChange} value={selectedTeam}>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.prettyName}
          </option>
        ))}
      </select>
    </div>
  );
}
