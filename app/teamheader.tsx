"use client";
import { Manager } from "@prisma/client";
import { Flex, Box, Heading, AspectRatio } from "@radix-ui/themes";

import Image from "next/image";

export default function TeamHeader({
	team,
}: {
	team: {
		bgColor: any;
		logoUrl: string;
		prettyName: string;
		gm: Manager,
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
				<Box width="9" grow="1">
					<AspectRatio ratio={3 / 2}>
						{team.logoUrl && (
							<Image
								src={team.logoUrl}
								alt={`Logo of ${team.prettyName}`}
								layout="fill"
								unoptimized={true} // Since these are local images, you might not need optimization
							/>
						)}
					</AspectRatio>
				</Box>
				<Box width="100%" shrink="1">
					<Heading size="8">{team.prettyName}</Heading>
				</Box>
			</Flex>
		</Flex>
	);
}
