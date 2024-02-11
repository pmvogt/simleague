// TeamSelect.tsx
"use client";
import React from "react";
// import { Select } from "@radix-ui/react-select";

interface Team {
	id: number;
	prettyName: string;
}

interface TeamSelectProps {
	teams: Team[];
	onTeamChange: (teamId: string) => void;
}

export default function TeamSelect({ teams, onTeamChange }: TeamSelectProps) {
	return (
		<div>
			<select onChange={(e) => onTeamChange(e.target.value)}>
				{teams.map((team) => (
					<option key={team.id} value={team.id}>
						{team.prettyName}
					</option>
				))}
			</select>
		</div>
	);
}
