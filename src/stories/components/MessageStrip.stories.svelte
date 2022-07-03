<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import MessageStrip from '$lib/MessageStrip/MessageStrip.svelte';

	const argTypes = {
		type: {
			options: ['information', 'success', 'warning', 'error'],
			control: { type: 'select' }
		},
		slot_default: {
			name: 'default',
			description: 'Set the message strip text',
			control: false
		},
		event_close: {
			name: 'close',
			description: 'On close button press',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { MessageStrip } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Message Strip" component={MessageStrip} {argTypes} {parameters} />

<Template let:args>
	<MessageStrip {...args}>Message Strip Text</MessageStrip>
</Template>

<Story name="Default" source />

<Story name="Non-Dismissible">
	<div>
		<MessageStrip>Information (default) Message Strip Text</MessageStrip>
		<MessageStrip type="success">Success Message Strip Text</MessageStrip>
		<MessageStrip type="warning">Warning Message Strip Text</MessageStrip>
		<MessageStrip type="error">Error Message Strip Text</MessageStrip>
	</div>
</Story>

<Story name="No Icon">
	<div>
		<MessageStrip noIcon>Information (default) Message Strip Text</MessageStrip>
		<MessageStrip type="success" noIcon>Success Message Strip Text</MessageStrip>
		<MessageStrip type="warning" noIcon>Warning Message Strip Text</MessageStrip>
		<MessageStrip type="error" noIcon>Error Message Strip Text</MessageStrip>
	</div>
</Story>

<Story name="Dismissible">
	<div>
		<MessageStrip dismissible>Information (default) Message Strip Text</MessageStrip>
		<MessageStrip type="success" dismissible>Success Message Strip Text</MessageStrip>
		<MessageStrip type="warning" dismissible>Warning Message Strip Text</MessageStrip>
		<MessageStrip type="error" dismissible>Error Message Strip Text</MessageStrip>
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
