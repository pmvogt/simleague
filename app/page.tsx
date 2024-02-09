"use client";
import {
	AspectRatio,
	Avatar,
	Box,
	Card,
	Container,
	Grid,
	Heading,
	Inset,
	Flex,
	Quote,
	Select,
	Table,
	Tabs,
	Text,
} from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
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
					<Tabs.Root defaultValue="rosters">
						<Tabs.List size="2">
							<Tabs.Trigger value="rosters">Rosters</Tabs.Trigger>
							<Tabs.Trigger value="leaderboards">Leaderboards</Tabs.Trigger>
							<Tabs.Trigger value="stats">Stats</Tabs.Trigger>
						</Tabs.List>

						<Box pb="2">
							<Tabs.Content value="rosters">
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
											Arizona Cardinals
										</Heading>
									</Flex>

									<Select.Root size="3" defaultValue="arizona">
										<Select.Trigger variant="classic" />
										<Select.Content variant="soft">
											<Select.Item value="arizona">
												Arizona Cardinals
											</Select.Item>
											<Select.Item value="atlanta">Atlanta Falcons</Select.Item>
										</Select.Content>
									</Select.Root>
								</Flex>

								<Flex direction="column" gap="4" mt="6">
									<Grid columns="3" gap="4">
										<Card size="1" style={{ width: 350 }}>
											<Flex gap="3" align="center">
												<Avatar
													size="3"
													radius="full"
													fallback="p"
													color="gold"
												/>
												<Box>
													<Text as="div" size="2" weight="bold">
														General manager
													</Text>
													<Text as="div" color="bronze" size="2">
														@pennywise
													</Text>
												</Box>
											</Flex>
										</Card>
										<Card variant="classic">
											<Text as="div" size="2" weight="bold">
												Offensive Playbook
											</Text>
											<Text as="div" color="bronze" size="2">
												Seattle Seahawks (3-4)
											</Text>
										</Card>
										<Card variant="surface">
											<Text as="div" size="2" weight="bold">
												Defensive Playbook
											</Text>
											<Text as="div" color="bronze" size="2">
												Cincinnati Bengals
											</Text>
										</Card>
									</Grid>

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
					</Tabs.Root>
				</Flex>
			</Container>
		</main>
	);
}
