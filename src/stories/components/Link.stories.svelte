<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Link } from '$lib';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the link value',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Link } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Link" component={Link} {argTypes} {parameters} />

<Template let:args>
	<Link {...args} href="//sap.com/" target="_blank">SAP</Link>
</Template>

<Story name="Default" source />

<Story name="Emphasized">
	<Link href="//sap.com/" target="_blank" emphasized>SAP</Link>
</Story>
