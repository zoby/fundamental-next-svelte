<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import ProgressBar from '$lib/ProgressBar/ProgressBar.svelte';

	const argTypes = {
		state: {
			options: ['', 'positive', 'critical', 'negative'],
			control: { type: 'select' }
		},
		value: {
			control: { type: 'number', min: 1, max: 100, step: 1 }
		},
		event_click: {
			name: 'click',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { ProgressBar } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Progress Bar" component={ProgressBar} {argTypes} {parameters} />

<Template let:args>
	<ProgressBar {...args} />
</Template>

<Story name="Default" source args={{ value: 20 }} />

<Story name="States">
	<div>
		<ProgressBar value={20} />
		<ProgressBar value={40} state="positive" />
		<ProgressBar value={60} state="critical" />
		<ProgressBar value={80} state="negative" />
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 30px;
	}
</style>
