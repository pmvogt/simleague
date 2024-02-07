"use client";
import {
	Box,
	Container,
	Flex,
	Heading,
	Table,
	Tabs,
	Text,
} from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen font-sans flex-col items-center justify-between p-24">
			<Container size="4">
				<h1>SpringSim2024</h1>
				<Flex direction="column" gap="4">
					<Tabs.Root defaultValue="account">
						<Tabs.List size="2">
							<Tabs.Trigger value="account">Rosters</Tabs.Trigger>
							<Tabs.Trigger value="documents">Leaderboards</Tabs.Trigger>
							<Tabs.Trigger value="settings">Stats</Tabs.Trigger>
						</Tabs.List>

						<Box px="4" pt="3" pb="2">
							<Tabs.Content value="account">
								<Text size="2">
									<Table.Root>
										<Table.Header>
											<Table.Row>
												<Table.ColumnHeaderCell>
													Full name
												</Table.ColumnHeaderCell>
												<Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
											</Table.Row>
										</Table.Header>

										<Table.Body>
											<Table.Row>
												<Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
												<Table.Cell>danilo@example.com</Table.Cell>
											</Table.Row>

											<Table.Row>
												<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
												<Table.Cell>zahra@example.com</Table.Cell>
											</Table.Row>

											<Table.Row>
												<Table.RowHeaderCell>
													Jasper Eriksson
												</Table.RowHeaderCell>
												<Table.Cell>jasper@example.com</Table.Cell>
											</Table.Row>
										</Table.Body>
									</Table.Root>
								</Text>
							</Tabs.Content>

							<Tabs.Content value="documents">
								<Text size="2">Coming soon</Text>
							</Tabs.Content>

							<Tabs.Content value="settings">
								<Text size="2">Coming soon</Text>
							</Tabs.Content>
						</Box>
					</Tabs.Root>
				</Flex>
			</Container>
		</main>
	);
}
