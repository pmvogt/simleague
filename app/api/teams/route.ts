import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
	try {
		const teams = await prisma.team.findMany();
		NextResponse.json(teams);
	} catch (error) {
		console.error(error);
		NextResponse.error(); // Remove the argument from the function call
	}
}
