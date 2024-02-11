import { Container, Flex, Quote, Text } from "@radix-ui/themes";

import TeamInfo from "./teaminfo";
import TeamManager from "./teammanager";

export default async function Home() {
	return (
		<main className="flex min-h-screen font-sans flex-col items-center justify-between p-24">
			<Flex direction="column" width="100%">
				<TeamManager />
			</Flex>
		</main>
	);
}
