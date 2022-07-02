<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { ObjectStatus } from '$lib';

	const argTypes = {
		state: {
			options: ['info', 'positive', 'critical', 'negative'],
			control: { type: 'select' }
		},
		slot_default: {
			name: 'default',
			description: 'Set the object status value',
			control: false
		},
		event_click: {
			name: 'click',
			control: false
		},
		event_mouseover: {
			name: 'mouseover',
			control: false
		},
		event_mouseenter: {
			name: 'mouseenter',
			control: false
		},
		event_mouseleave: {
			name: 'mouseleave',
			control: false
		},
		event_focus: {
			name: 'focus',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { ObjectStatus } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Object Status" component={ObjectStatus} {argTypes} {parameters} />

<Template let:args>
	<ObjectStatus {...args}>Status</ObjectStatus>
</Template>

<Story name="Default" source />

<Story name="Interactive">
	<div>
		<ObjectStatus state="positive" interactive>Positive</ObjectStatus>
		<ObjectStatus state="critical" interactive>Critical</ObjectStatus>
		<ObjectStatus state="negative" interactive>Negative</ObjectStatus>
		<ObjectStatus state="info" interactive>Info</ObjectStatus>
	</div>
</Story>

<Story name="Non-Interactive">
	<div>
		<ObjectStatus state="positive">Positive</ObjectStatus>
		<ObjectStatus state="critical">Critical</ObjectStatus>
		<ObjectStatus state="negative">Negative</ObjectStatus>
		<ObjectStatus state="info">Info</ObjectStatus>
	</div>
</Story>

<style>
	div {
		display: flex;
		gap: 20px;
	}
</style>
