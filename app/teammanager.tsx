// TeamManager.client.tsx
"use client";
import React, { useState, useEffect } from "react";
import TeamSelect from "./teamselect";
import TeamHeader from "./teamheader";
import TeamInfo from "./teaminfo";
import PlayerTable from "./playertable";
import { Team } from "./types"; // Adjust the import path as needed

export default function TeamManager() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        if (data.length > 0) {
          setSelectedTeam(data[0]); // Optionally set an initial team
        }
      })
      .catch(console.error);
  }, []);

  const handleTeamChange = (teamId: string) => {
    const team = teams.find((t) => t.id === parseInt(teamId));
    if (team) {
      setSelectedTeam(team);
    }
  };

  return (
    <>
      <TeamSelect teams={teams} onTeamChange={handleTeamChange} />
      {selectedTeam && (
        <>
         <TeamHeader team={{ 
              ...selectedTeam, 
              logoUrl: selectedTeam.logoUrl || 'defaultLogoUrl.png',
			  gm: {
				...selectedTeam.gm,
				teamId: selectedTeam.gm?.teamId ?? null // Convert undefined to null
			}
          }} />
          <TeamInfo team={{
              ...selectedTeam,
              logoUrl: selectedTeam.logoUrl || 'defaultLogoUrl.png',
              gm: selectedTeam.gm || TeamManager,
              offensivePlaybook: selectedTeam.offensivePlaybook || { id: 0, team: '', scheme: '' }, // Provide a default object
              defensivePlaybook: selectedTeam.defensivePlaybook || { id: 0, team: '', scheme: '' }, // Provide a default object
          }} />
          <PlayerTable players={selectedTeam.players || []} group="Offense" />
        </>
      )}
    </>
  );
}
