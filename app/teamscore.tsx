import { AspectRatio, Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

interface Team {
	name: string;
	gm: string;
	logoUrl: string;
	prettyName: string;
	bgColor: string;
}

interface TeamScoreProps {
	team: Team;
	score: number;
}

export default function TeamScore({ team, score }: TeamScoreProps) {
	return (
		<Flex
			align="center"
			justify="between"
			style={{ background: `${team.bgColor}` }}
			px="3"
			py="2"
		>
			<Flex align="center" gap="2">
				<Box width="6" grow="1">
					<AspectRatio ratio={3 / 2}>
						{team.logoUrl && (
							<Image
								src={team.logoUrl}
								alt={`Logo of ${team.prettyName}`}
								layout="fill"
								unoptimized={true}
							/>
						)}
					</AspectRatio>
				</Box>

				<Flex direction="column">
					<Text>{team.prettyName}</Text>
					<Text>{team.gm}</Text>
				</Flex>
			</Flex>
			<Text className="text-mono">{score}</Text>
		</Flex>
	);
}
