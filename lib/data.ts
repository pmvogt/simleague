import { prisma } from "@/lib/prisma";

export async function getData() {
	const res = await prisma.team.findMany();

	return res;
}
