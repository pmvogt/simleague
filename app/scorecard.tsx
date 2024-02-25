import { Flex } from "@radix-ui/themes";
import { prisma } from "../lib/prisma";
import TeamScore from "./teamscore";

export default async function ScoreCard({ week }: { week: number }) {
	const games = await prisma.game.findMany({
		where: { week },
		include: {
			homeTeam: {
				include: {
					gm: true,
				},
			},
			awayTeam: {
				include: {
					gm: true,
				},
			},
		},
	});

	return (
		<div>
			{games.map((game) => (
				<Flex key={game.id}>
					<TeamScore
						team={{
							name: game.homeTeam.name,
							gm: game.homeTeam.gm.prettyName,
							logoUrl: game.homeTeam.logoUrl ?? "",
							prettyName: game.homeTeam.prettyName,
							bgColor: game.homeTeam.bgColor ?? "",
						}}
						score={game.homeScore}
					/>
					<TeamScore
						team={{
							name: game.awayTeam.name,
							gm: game.awayTeam.gm.prettyName,
							logoUrl: game.awayTeam.logoUrl ?? "",
							prettyName: game.awayTeam.prettyName,
							bgColor: game.awayTeam.bgColor ?? "",
						}}
						score={game.awayScore}
					/>
				</Flex>
			))}
		</div>
	);
}
