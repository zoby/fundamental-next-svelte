<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { GenericTag } from '$lib';

	const argTypes = {
		state: {
			options: ['', 'info', 'positive', 'critical', 'negative'],
			control: { type: 'select' }
		},
		slot_default: {
			name: 'default',
			description: 'Set the generic tag text value',
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
				component: "	import { GenericTag } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Generic Tag" component={GenericTag} {argTypes} {parameters} />

<Template let:args>
	<GenericTag {...args}>Generic Tag</GenericTag>
</Template>

<Story name="Default" source args={{ number: '42k' }} />

<Story name="States">
	<div>
		<GenericTag state="positive" number="42k">Generic Tag</GenericTag>
		<GenericTag state="critical" number="42k">Generic Tag</GenericTag>
		<GenericTag state="negative" number="42k">Generic Tag</GenericTag>
		<GenericTag state="info" number="42k">Generic Tag</GenericTag>
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
