<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Textarea from '$lib/Textarea/Textarea.svelte';

	const argTypes = {
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
				component: "	import { Textarea } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Textarea" component={Textarea} {argTypes} {parameters} />

<Template let:args>
	<Textarea {...args} />
</Template>

<Story name="Default" />

<Story name="Disabled / Readonly">
	<div>
		<Textarea placeholder="Standard" />
		<Textarea disabled placeholder="Disabled" />
		<Textarea readonly placeholder="Read only" />
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
