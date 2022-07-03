<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Checkbox, CheckboxGroup } from '$lib/Checkbox';

	const argTypes = {
		slot_default: {
			name: 'default',
			description: 'Set the checkbox label',
			control: false
		},
		event_change: {
			name: 'change',
			control: false
		},
		event_focus: {
			name: 'focus',
			control: false
		},
		event_blur: {
			name: 'blur',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Checkbox, CheckboxGroup } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Checkbox" component={Checkbox} {argTypes} {parameters} />

<Template let:args>
	<Checkbox {...args}>Label</Checkbox>
</Template>

<Story name="Default" source />

<Story name="Checkbox Group">
	<div>
		<CheckboxGroup>
			<Checkbox>First</Checkbox>
			<Checkbox>Second</Checkbox>
			<Checkbox>Third</Checkbox>
		</CheckboxGroup>

		<CheckboxGroup fullWidth>
			<Checkbox>First</Checkbox>
			<Checkbox>Second</Checkbox>
			<Checkbox>Third</Checkbox>
		</CheckboxGroup>

		<CheckboxGroup inline>
			<Checkbox>First</Checkbox>
			<Checkbox>Second</Checkbox>
			<Checkbox>Third</Checkbox>
		</CheckboxGroup>
	</div>
</Story>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
