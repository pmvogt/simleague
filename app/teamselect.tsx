"use client";
import React, { useState, useEffect } from "react";

export default function TeamSelect() {
	return (
		<div>
			<select>
				{teams.map((team) => (
					<option key={team.id} value={team.id}>
						{team.name}
					</option>
				))}
			</select>
		</div>
	);
}
