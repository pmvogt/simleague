// types.ts

export interface Manager {
	id: number;
	discordName: string;
	prettyName: string;
	teamId?: number; // Optional as a Manager might not be assigned to a team yet
  }
  
  export interface Playbook {
	id: number;
	team: string; // Assuming this should be the team's name or identifier
	scheme?: string; // Optional as the playbook's scheme might not be defined
  }
  
  export interface Player {
	id: number;
	name: string;
	teamId?: number; // Optional to indicate the player might not be assigned to a team
	positions: PlayerPosition[]; // Assuming you have positions defined in your schema
  }
  
  export interface PlayerPosition {
	id: number;
	name: string;
	abbreviation: string;
	category: 'Offense' | 'Defense' | 'Special Teams';
  }
  
  export interface Team {
	id: number;
	prettyName: string;
	logoUrl?: string;
	gm: Manager;
	bgColor: string;
	offensivePlaybook?: Playbook;
	defensivePlaybook?: Playbook;
	players?: Player[]; // Optional as a team might not have players assigned yet
  }
  