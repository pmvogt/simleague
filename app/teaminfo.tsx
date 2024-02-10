import { Avatar, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";

export default async function TeamInfo() {
	return (
		<Grid columns="3" gap="4">
			<Card size="1" style={{ width: 350 }}>
				<Flex gap="3" align="center">
					<Avatar size="3" radius="full" fallback="p" color="gold" />
					<Box>
						<Text as="div" size="2" weight="bold">
							Team pretty name
						</Text>
						<Text as="div" color="bronze" size="2">
							Team manager
						</Text>
					</Box>
				</Flex>
			</Card>
			<Card variant="classic">
				<Text as="div" size="2" weight="bold">
					Offensive Playbook
				</Text>
				<Text as="div" color="bronze" size="2">
					team offensive playbook
				</Text>
			</Card>
			<Card variant="surface">
				<Text as="div" size="2" weight="bold">
					Defensive Playbook
				</Text>
				<Text as="div" color="bronze" size="2">
					team offensive playbook
				</Text>
			</Card>
		</Grid>
	);
}
