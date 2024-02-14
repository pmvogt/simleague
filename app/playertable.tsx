import { Table } from "@radix-ui/themes";

interface Player {
	name: string;
	position: string;
}

interface PlayerTableProps {
	players: Player[];
	group: "Offense" | "Defense" | "Special Teams";
}

export default function PlayerTable({ players, group }: PlayerTableProps) {
	return (
		<div>
			<h2>{group}</h2>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Position</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{players.map((player, index) => (
						<Table.Row key={index}>
							<Table.RowHeaderCell>{player.name}</Table.RowHeaderCell>
							<Table.Cell>{player.position}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	);
}
