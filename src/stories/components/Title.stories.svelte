<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Title from '$lib/Title/Title.svelte';

	const argTypes = {
		level: {
			control: { type: 'number', min: 1, max: 6, step: 1 }
		},
		levelStyle: {
			control: { type: 'number', min: 1, max: 6, step: 1 },
			default: undefined
		},
		slot_default: {
			name: 'default',
			description: 'Set the title value',
			control: false
		}
	};
	const parameters = {
		docs: {
			description: {
				component: "	import { Title } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Title" component={Title} {argTypes} {parameters} />

<Template let:args>
	<Title {...args}>Heading</Title>
</Template>

<Story name="Default" args={{ level: 1 }} source />

<Story name="Semantic Level">
	<Title level={1}>Title Heading 1</Title>
	<Title level={2}>Title Heading 2</Title>
	<Title level={3}>Title Heading 3</Title>
	<Title level={4}>Title Heading 4</Title>
	<Title level={5}>Title Heading 5</Title>
	<Title level={6}>Title Heading 6</Title>
</Story>

<Story name="Visual Level">
	<Title level={1} levelStyle={6}>Title Heading 1</Title>
	<Title level={2} levelStyle={5}>Title Heading 2</Title>
	<Title level={3} levelStyle={4}>Title Heading 3</Title>
	<Title level={4} levelStyle={3}>Title Heading 4</Title>
	<Title level={5} levelStyle={2}>Title Heading 5</Title>
	<Title level={6} levelStyle={1}>Title Heading 6</Title>
</Story>

<Story name="Text Wrapping">
	<div style="width: 500px">
		<Title level={1} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
		<Title level={2} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
		<Title level={3} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
		<Title level={4} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
		<Title level={5} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
		<Title level={6} wrap>
			"Insanity: doing the same thing over and over again and expecting different results." - Albert
			Einstein
		</Title>
	</div>
</Story>
