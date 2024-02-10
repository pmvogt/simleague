import { prisma } from "@/lib/db";

export async function getData() {
	const res = await prisma.team.findMany();

	return res;
}
