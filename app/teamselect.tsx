"use client";
import { Select } from "@radix-ui/themes";

export default function TeamSelect({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Select.Root size="3" defaultValue="arizona">
			<Select.Trigger variant="classic" />
			<Select.Content variant="soft">
				<Select.Item value="arizona">Arizona Cardinals</Select.Item>
				<Select.Item value="atlanta">Atlanta Falcons</Select.Item>
			</Select.Content>
		</Select.Root>
	);
}
