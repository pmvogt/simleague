// TeamManager.client.tsx
"use client";
import React, { useState, useEffect } from "react";
import TeamSelect from "./teamselect";
import TeamHeader from "./teamheader";
import TeamInfo from "./teaminfo";

interface Team {
	id: number;
	prettyName: string;
	logoUrl?: string;
	gm?: string;
	offensivePlaybook?: string;
	defensivePlaybook?: string;
}

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
					<TeamHeader team={selectedTeam} />
					<TeamInfo team={selectedTeam} />
				</>
			)}
		</>
	);
}
