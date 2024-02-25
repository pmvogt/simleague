"use client";
import { useState } from "react";
import ScoreCard from "./scorecard";

export default function Scores() {
	const [week, setWeek] = useState<number>(1); // Default to week 1 for initial render

	// Function to change week - implement UI as needed
	const handleChangeWeek = (newWeek: number) => {
		setWeek(newWeek);
	};

	return (
		<div>
			{/* Implement UI for changing week */}
			<ScoreCard week={week} />
		</div>
	);
}
