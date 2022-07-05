<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Search from '$lib/Search/Search.svelte';

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
				component: "	import { Search } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Search" component={Search} {argTypes} {parameters} />

<Template let:args>
	<Search {...args} />
</Template>

<Story name="Default" args={{ placeholder: 'Search everything' }} />

<Story name="Disabled" args={{ disabled: true, placeholder: 'Search everything' }} />
