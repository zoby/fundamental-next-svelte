<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import MessageToast from '$lib/MessageToast/MessageToast.svelte';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the message toast text',
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
				component: "	import { MessageToast } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Message Toast" component={MessageToast} {argTypes} {parameters} />

<Template let:args>
	<MessageToast {...args}>Message Toast Text</MessageToast>
</Template>

<Story name="Default" source />

<Story name="Truncate">
	<div>
		<MessageToast
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</MessageToast
		>
		<MessageToast truncate
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</MessageToast
		>
	</div>
</Story>

<style>
	div {
		display: flex;
		gap: 20px;
		flex-direction: column;
	}
</style>
