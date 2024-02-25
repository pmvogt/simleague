// utils/fetchGamesForWeek.ts
import { prisma } from "./prisma";

export async function fetchGamesForWeek(weekNumber: number) {
	return await prisma.game.findMany({
		where: { week: weekNumber },
		include: {
			homeTeam: { include: { gm: true } },
			awayTeam: { include: { gm: true } },
		},
		orderBy: [{ homeScore: "desc" }, { awayScore: "desc" }],
	});
}
