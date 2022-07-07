<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { List, ListItem, ListGroup, Button, ObjectStatus, Checkbox } from '$lib';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the title value',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { List, ListItem, ListGroup } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/List" component={List} {argTypes} {parameters} />

<Template let:args>
	<List>
		<ListItem>List Item</ListItem>
	</List>
</Template>

<Story name="Default" source />

<Story name="Byline List">
	<List byline>
		<ListItem title="Byline list item title" byline="List item byline" />
		<ListItem title="Byline list item with Status Title">
			<ObjectStatus state="critical" byline>Critical</ObjectStatus>
		</ListItem>
		<ListItem title="Byline list item title" byline="List item byline">
			<svelte:fragment slot="buttons">
				<Button icon="edit" secondary />
				<Button icon="decline" secondary />
			</svelte:fragment>
		</ListItem>

		<ListItem title="Byline list item title" byline="List item byline" endText="42">
			<svelte:fragment slot="buttons">
				<Button icon="navigation-right-arrow" layout />
			</svelte:fragment>
		</ListItem>
		<ListItem
			title="Selected byline list item title"
			byline="List item byline"
			selected
			endText="123">Hello World</ListItem
		>
		<ListItem title="Disabled byline list item title" byline="List item byline" disabled />
		<ListItem title="Byline list item with checkbox" byline="List item byline">
			<Checkbox slot="checkbox" />
		</ListItem>
		<ListItem
			title="Byline list item with icon"
			byline="List item byline"
			icon="person-placeholder"
		/>
	</List>
</Story>

<Story name="List">
	<List>
		<ListGroup>Group Header</ListGroup>
		<ListItem>List Item</ListItem>
		<ListItem>
			List Item with Buttons
			<svelte:fragment slot="buttons">
				<Button icon="edit" secondary />
				<Button icon="decline" secondary />
			</svelte:fragment>
		</ListItem>
		<ListItem>
			List Item with navigation arrow
			<svelte:fragment slot="buttons">
				<Button icon="navigation-right-arrow" layout />
			</svelte:fragment>
		</ListItem>
		<ListGroup endText>Selected: 1</ListGroup>
		<ListItem selected>Selected list item</ListItem>
		<ListItem endText="42">List Item with end text</ListItem>
		<ListItem info>Info text</ListItem>
		<ListItem icon="person-placeholder">List Item with Icon</ListItem>
		<ListItem disabled>Disabled list item</ListItem>
		<ListItem>
			<Checkbox slot="checkbox" />
			List item with checkbox
		</ListItem>
		<ListItem info disabled>Disabled Info Bar</ListItem>
		<ListItem readonly info>Read Only Info Bar</ListItem>
	</List>
</Story>
