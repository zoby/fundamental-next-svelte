<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { InfoLabel } from '$lib';

	const argTypes = {
		color: {
			options: [
				'display',
				'mango',
				'red',
				'raspberry',
				'pink',
				'indigo',
				'blue',
				'teal',
				'green',
				'cyan',
				'grey'
			],
			control: { type: 'select' }
		},
		slot_default: {
			name: 'default',
			description: 'Set the info label value',
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
				component: "	import { InfoLabel } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Info Label" component={InfoLabel} {argTypes} {parameters} />

<Template let:args>
	<InfoLabel {...args}>Info Label</InfoLabel>
</Template>

<Story name="Default" source />

<Story name="Colors">
	<div>
		<InfoLabel color="display">Display</InfoLabel>
		<InfoLabel color="mango">Mango</InfoLabel>
		<InfoLabel color="red">Red</InfoLabel>
		<InfoLabel color="raspberry">Raspberry</InfoLabel>
		<InfoLabel color="pink">Pink</InfoLabel>
		<InfoLabel color="indigo">Indigo</InfoLabel>
		<InfoLabel color="blue">Blue</InfoLabel>
		<InfoLabel color="teal">Teal</InfoLabel>
		<InfoLabel color="green">Green</InfoLabel>
		<InfoLabel color="cyan">Cyan</InfoLabel>
		<InfoLabel color="grey">Grey</InfoLabel>
	</div>
</Story>

<style>
	div {
		display: flex;
		gap: 15px;
	}
</style>
