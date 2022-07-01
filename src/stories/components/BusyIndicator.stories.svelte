<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { BusyIndicator } from '$lib';

	const parameters = {
		viewMode: 'docs',
		previewTabs: {
			canvas: { hidden: true }
		},
		docs: {
			description: {
				component: "	import { BusyIndicator } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Busy Indicator" component={BusyIndicator} {parameters} />

<Template let:args>
	<BusyIndicator {...args} />
</Template>

<Story name="Default" />
