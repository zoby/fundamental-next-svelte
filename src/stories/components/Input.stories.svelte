<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Input from '$lib/Input/Input.svelte';

	const argTypes = {
		state: {
			options: ['', 'info', 'positive', 'critical', 'negative'],
			control: { type: 'select' }
		},
		type: {
			options: ['text', 'password'],
			control: { type: 'select' }
		},
		event_input: {
			name: 'input',
			control: false
		},
		event_change: {
			name: 'change',
			control: false
		},
		event_keydown: {
			name: 'keydown',
			control: false
		},
		event_keyup: {
			name: 'keyup',
			control: false
		},
		event_focus: {
			name: 'focus',
			control: false
		},
		event_blur: {
			name: 'blur',
			control: false
		},
		event_paste: {
			name: 'paste',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Input } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Input" component={Input} {argTypes} {parameters} />

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" />

<Story name="Password">
	<Input type="password" />
</Story>

<Story name="States">
	<div>
		<Input state="info" />
		<Input state="positive" />
		<Input state="critical" />
		<Input state="negative" />
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
