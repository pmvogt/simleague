import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
	try {
		const teams = await prisma.team.findMany({
			include: {
				gm: true, // Assuming 'gm' is a related field in your Prisma model
				offensivePlaybook: true, // Assuming this is a related field
				defensivePlaybook: true, // Assuming this is a related field
			},
		});
		return new NextResponse(JSON.stringify(teams), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Request error", error);
		return new NextResponse(JSON.stringify({ error: "Error fetching teams" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
