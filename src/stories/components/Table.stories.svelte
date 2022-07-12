<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import {
		Table,
		TableRow,
		TableHeader,
		TableCell,
		TableGroup,
		ObjectStatus,
		InfoLabel,
		Button
	} from '$lib';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the table content',
			control: false
		},
		slot_head: {
			name: 'head',
			description: 'Set the header row',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component:
					"	import { Table, TableRow, TableHeader, TableCell, TableGroup } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Table" component={Table} {argTypes} {parameters} />

<Template let:args>
	<Table>
		<svelte:fragment slot="head">
			<TableRow>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
			</TableRow>
		</svelte:fragment>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
	</Table>
</Template>

<Story name="Default" source />

<Story name="Standard Table">
	<Table>
		<svelte:fragment slot="head">
			<TableRow>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
			</TableRow>
		</svelte:fragment>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell end>
				Table Cell with end buttons
				<Button icon="edit" secondary />
				<Button icon="decline" secondary />
			</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>
				Table Cell with text and navigation button
				<Button icon="navigation-right-arrow" layout />
			</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell noHover end>
				<Button icon="navigation-right-arrow" layout />
			</TableCell>
		</TableRow>
	</Table>
</Story>

<Story name="Table with Group Headers">
	<Table>
		<svelte:fragment slot="head">
			<TableRow>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
			</TableRow>
		</svelte:fragment>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableGroup columns={5}>Group Header</TableGroup>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
	</Table>
</Story>

<Story name="Table with Selected Rows / Cells">
	<Table>
		<svelte:fragment slot="head">
			<TableRow>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
			</TableRow>
		</svelte:fragment>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableRow selected>
			<TableCell>Selected Row</TableCell>
			<TableCell>Selected Row</TableCell>
			<TableCell>Selected Row</TableCell>
			<TableCell>Selected Row</TableCell>
			<TableCell>Selected Row</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell selected>Selected Cell</TableCell>
			<TableCell>Table Cell</TableCell>
		</TableRow>
	</Table>
</Story>

<Story name="Table with Statuses and Info Labels">
	<Table>
		<svelte:fragment slot="head">
			<TableRow>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
				<TableHeader>Column Header</TableHeader>
			</TableRow>
		</svelte:fragment>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><ObjectStatus state="positive" byline>Positive</ObjectStatus></TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><InfoLabel>State</InfoLabel></TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><ObjectStatus state="negative" byline>Negative</ObjectStatus></TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><InfoLabel>State</InfoLabel></TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><ObjectStatus state="info" byline>Information</ObjectStatus></TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><InfoLabel color="indigo">State</InfoLabel></TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Table Cell</TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><ObjectStatus state="critical" byline>Critical</ObjectStatus></TableCell>
			<TableCell>Table Cell</TableCell>
			<TableCell><InfoLabel color="cyan">State</InfoLabel></TableCell>
		</TableRow>
	</Table>
</Story>
