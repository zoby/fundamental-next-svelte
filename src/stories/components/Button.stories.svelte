<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Button, ButtonSegmented } from '$lib/Button';

	const argTypes = {
		state: {
			options: ['', 'positive', 'critical', 'negative'],
			control: { type: 'select' }
		},
		slot_default: {
			name: 'default',
			description: 'Set the button value',
			control: false
		},
		slot_icon: {
			name: 'icon',
			description: 'Pass an icon component to be rendered in the button',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Button, ButtonSegmented } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Button" component={Button} {argTypes} {parameters} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="Default" source args={{ iconBeforeText: true }} />

<Story name="Primary">
	<div>
		<Button>Button</Button>
		<Button emphasized>Button</Button>
	</div>
</Story>

<Story name="Secondary">
	<div>
		<Button secondary>Button</Button>
		<Button emphasized secondary>Button</Button>
	</div>
</Story>

<Story name="States">
	<div>
		<Button state="positive">Button</Button>
		<Button state="critical">Button</Button>
		<Button state="negative">Button</Button>

		<Button state="positive" emphasized>Button</Button>
		<Button state="critical" emphasized>Button</Button>
		<Button state="negative" emphasized>Button</Button>
	</div>
</Story>

<Story name="Segmented Button">
	<ButtonSegmented>
		<Button layout>Button</Button>
		<Button selected>Button</Button>
		<Button layout>Button</Button>
		<Button layout>Button</Button>
		<Button layout>Button</Button>
		<Button layout>Button</Button>
	</ButtonSegmented>
</Story>

<style>
	div {
		display: flex;
		gap: 10px;
	}
</style>
