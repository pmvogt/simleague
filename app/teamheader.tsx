"use client";
import { Flex, Box, Heading, AspectRatio } from "@radix-ui/themes";

import Image from "next/image";

export default function TeamHeader({
	team,
}: {
	team: {
		bgColor: any;
		logoUrl: string;
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
				<Box width="9" grow="1">
					{team.logoUrl && (
						<AspectRatio ratio={3 / 5}>
							<Image
								src={team.logoUrl}
								alt={`Logo of ${team.prettyName}`}
								width={88}
								height={44}
								unoptimized={true} // Since these are local images, you might not need optimization
							/>
						</AspectRatio>
					)}
				</Box>
				<Heading size="8">{team.prettyName}</Heading>
			</Flex>
		</Flex>
	);
}
