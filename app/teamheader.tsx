"use client";
import { Flex, Box, Heading, AspectRatio } from "@radix-ui/themes";

import Image from "next/image";

export default function TeamHeader({
	team,
}: {
	team: {
		bgColor: any;
		prettyName: string;
	};
}) {
	return (
		<Flex
			width="100%"
			align="center"
			justify="between"
			style={{ background: `${team.bgColor}` }}
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
				<Heading size="8">{team.prettyName}</Heading>
			</Flex>
		</Flex>
	);
}
