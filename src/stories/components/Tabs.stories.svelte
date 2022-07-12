<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Tabs, Tab, Button } from '$lib';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the tabs',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Tabs, Tab } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Tabs" component={Tabs} {argTypes} {parameters} />

<Template let:args>
	<Tabs>
		<Tab selected icon="calendar">Tab Item</Tab>
		<Tab icon="calendar">Tab Item</Tab>
		<Tab>Tab Item</Tab>
		<Tab>Tab Item (42)</Tab>
		<Tab>Tab Item</Tab>
	</Tabs>
</Template>

<Story name="Default" source />

<Story name="Multi-Instance Tabs">
	<Tabs multiInstance={true}>
		<Tab selected icon="calendar">Tab Item</Tab>
		<Tab icon="calendar">Tab Item</Tab>
		<Tab>Tab Item</Tab>
		<Tab>Tab Item</Tab>
		<Tab>Tab Item</Tab>
		<svelte:fragment slot="right">
			<Button icon="overflow" layout />
			<Button icon="add" layout />
		</svelte:fragment>
	</Tabs>
</Story>

<Story name="States">
	<div>
		<Tabs state="positive">
			<Tab selected>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
		</Tabs>

		<Tabs state="critical">
			<Tab selected>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
		</Tabs>

		<Tabs state="negative">
			<Tab selected>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
			<Tab>Tab Item</Tab>
		</Tabs>
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
