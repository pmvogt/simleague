import { Avatar, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";

interface TeamInfoProps {
	team: {
		id: number;
		prettyName: string;
		logoUrl?: string;
		gm: {
			discordName: string;
			prettyName: string;
		};
		offensivePlaybook: {
			id: number;
			team: string;
			scheme?: string;
		};
		defensivePlaybook: {
			id: number;
			team: string;
			scheme?: string;
		};
	};
}

// Helper function to format enum values, since I didn't include prettyName as value in the Playbook model:
function formatEnumValue(enumValue: string) {
	return enumValue
		.toLowerCase()
		.replace(/_/g, " ")
		.replace(/\b(\w)/g, (char) => char.toUpperCase());
}

export default function TeamInfo({ team }: TeamInfoProps) {
	return (
		<Grid columns="3" gap="4">
			<Card size="1" style={{ width: 350 }}>
				<Flex gap="3" align="center">
					<Avatar size="3" radius="full" fallback="p" color="gold" />
					<Box>
						<Text as="div" size="2" weight="bold">
							Manager
						</Text>
						<Text as="div" color="bronze" size="2">
							{team.gm.prettyName}
						</Text>
					</Box>
				</Flex>
			</Card>
			<Card variant="classic">
				<Text as="div" size="2" weight="bold">
					Offensive Playbook
				</Text>
				<Text as="div" color="bronze" size="2">
					{formatEnumValue(team.offensivePlaybook.team)}
					{team.offensivePlaybook.scheme &&
						` - ${team.offensivePlaybook.scheme}`}
				</Text>
			</Card>
			<Card variant="surface">
				<Text as="div" size="2" weight="bold">
					Defensive Playbook
				</Text>
				<Text as="div" color="bronze" size="2">
					{formatEnumValue(team.defensivePlaybook.team)}
					{team.defensivePlaybook.scheme &&
						` - ${team.defensivePlaybook.scheme}`}
				</Text>
			</Card>
		</Grid>
	);
}
