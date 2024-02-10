import { Container, Flex, Quote, Text } from "@radix-ui/themes";

import TeamInfo from "./teaminfo";
import TeamHeader from "./teamheader";

import { prisma } from "@/lib/db";

export default async function Home() {
	const teams = await prisma.team.findMany();

	return (
		<main className="flex min-h-screen font-sans flex-col items-center justify-between p-24">
			<Container size="4">
				<Flex align="center" justify="between">
					<h1>🏈 SpringSim2024 🏈</h1>
					<Text size="1" color="brown">
						<Quote>⚡Autistic lightning⚡</Quote>
					</Text>
				</Flex>
				<Flex direction="column" gap="8">
					<ul>
						{teams.map((team) => (
							<li key={team.id}>{team.prettyName}</li>
						))}
					</ul>
					<TeamHeader />
					<TeamInfo />
					{/* <Tabs.Root defaultValue="rosters">
						<Tabs.List size="2">
							<Tabs.Trigger value="rosters">Rosters</Tabs.Trigger>
							<Tabs.Trigger value="leaderboards">Leaderboards</Tabs.Trigger>
							<Tabs.Trigger value="stats">Stats</Tabs.Trigger>
						</Tabs.List>

						<Box pb="2">
							<Tabs.Content value="rosters">
								<TeamInfo />
								<Flex direction="column" gap="4" mt="6">
									<Flex direction="column" gap="6" mt="6">
										<Heading trim="both" size="6">
											Depth Chart
										</Heading>

										<Heading trim="both" size="4" weight="light" color="bronze">
											Offense
										</Heading>

										<Box style={{ maxWidth: 588 }}>
											<Text size="3">
												<Table.Root variant="surface">
													<Table.Header>
														<Table.Row>
															<Table.ColumnHeaderCell>
																Name
															</Table.ColumnHeaderCell>
															<Table.ColumnHeaderCell>
																Position
															</Table.ColumnHeaderCell>
														</Table.Row>
													</Table.Header>

													<Table.Body>
														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>

														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>

														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>
													</Table.Body>
												</Table.Root>
											</Text>
										</Box>

										<Heading trim="both" size="4" weight="light" color="bronze">
											Defense
										</Heading>

										<Box style={{ maxWidth: 588 }}>
											<Text size="3">
												<Table.Root variant="surface">
													<Table.Header>
														<Table.Row>
															<Table.ColumnHeaderCell>
																Name
															</Table.ColumnHeaderCell>
															<Table.ColumnHeaderCell>
																Position
															</Table.ColumnHeaderCell>
														</Table.Row>
													</Table.Header>

													<Table.Body>
														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>

														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>

														<Table.Row>
															<Table.RowHeaderCell>test</Table.RowHeaderCell>
															<Table.Cell>test</Table.Cell>
														</Table.Row>
													</Table.Body>
												</Table.Root>
											</Text>
										</Box>
									</Flex>
								</Flex>
							</Tabs.Content>

							<Tabs.Content value="leaderboards">
								<Text size="2">Coming soon</Text>
							</Tabs.Content>

							<Tabs.Content value="stats">
								<Text size="2">Coming soon</Text>
							</Tabs.Content>
						</Box>
					</Tabs.Root> */}
				</Flex>
			</Container>
		</main>
	);
}
