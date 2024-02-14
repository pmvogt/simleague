// TeamSelect.tsx
"use client";
import React from "react";
import { Select } from "@radix-ui/themes";
import { formatEnumValue } from '../lib/utils';

interface Team {
	id: number;
	prettyName: string;
	division: string;
}

interface TeamSelectProps {
	teams: Team[];
	onTeamChange: (teamId: string) => void;
}

export default function TeamSelect({ teams, onTeamChange }: TeamSelectProps) {
	const defaultValue = teams.length > 0 ? teams[0].prettyName : '';

	const teamsByDivision = teams.reduce((acc, team) => {
		acc[team.division] = acc[team.division] || [];
		acc[team.division].push(team);
		return acc;
	  }, {} as Record<string, Team[]>);
	

	return (
		<div>
      <Select.Root onValueChange={onTeamChange} defaultValue={defaultValue}>
        <Select.Trigger aria-label="Select a team" />
        <Select.Content>
          {Object.entries(teamsByDivision).map(([division, teams]) => (
            <Select.Group key={division}>
              <Select.Label>{formatEnumValue(division)}</Select.Label>
              {teams.map((team) => (
                <Select.Item key={team.id} value={team.id.toString()}>
                  {team.prettyName}
                </Select.Item>
              ))}
            </Select.Group>
          ))}
        </Select.Content>
      </Select.Root>
		</div>
	);
}
