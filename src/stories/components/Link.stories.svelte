<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Link } from '$lib';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the link value',
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
