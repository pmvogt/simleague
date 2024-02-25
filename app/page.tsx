import { Container, Flex, Heading, Quote, Text } from "@radix-ui/themes";

import TeamInfo from "./teaminfo";
import TeamManager from "./teammanager";
import ScoreCard from "./scorecard";
import Scores from "./scores";

export default function Home() {
	return (
		<main className="flex min-h-screen font-sans flex-col items-center justify-between p-24">
			<Flex direction="column" width="100%">
				<Heading as="h2" size="6" weight="light">
					Week 1
				</Heading>
				<Scores />
			</Flex>
		</main>
	);
}
