"use client";
import { Flex, Box, Heading, AspectRatio } from "@radix-ui/themes";

import Image from "next/image";
import TeamSelect from "./teamselect";

export default function TeamHeader() {
	return (
		<Flex
			width="100%"
			align="center"
			justify="between"
			style={{ background: "var(--red-a2)" }}
			py="6"
			px="4"
			mt="4"
		>
			<Flex gap="4" align="center">
				<Box width="9">
					<AspectRatio ratio={16 / 9}>
						<Image
							src="/ari.png"
							alt="team logo"
							fill
							style={{
								objectFit: "cover",
								borderRadius: "var(--radius-2)",
							}}
						/>
					</AspectRatio>
				</Box>
				<Heading trim="both" size="8">
					team.prettyName
				</Heading>
				<TeamSelect />
			</Flex>
		</Flex>
	);
}
