<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Shell from '$lib/Shell/Shell.svelte';

	const argTypes = {
		title: {
			control: { type: 'text' }
		},
		slot_logo: {
			name: 'logo',
			description: 'Use for setting an image',
			control: false
		},
		slot_search: {
			name: 'search',
			control: false,
			description: 'Pass a Search component'
		},
		slot_actions: {
			name: 'actions',
			control: false,
			description: 'Action buttons'
		},
		slot_avatar: {
			name: 'avatar',
			control: false,
			description: 'Avatar component'
		}
	};

	const parameters = {
		docs: {
			description: {
				component: "	import { Shell } from 'fundamental-next-svelte';"
			}
		}
	};
</script>

<Meta title="Components/Shell" component={Shell} {argTypes} {parameters} />

<Template let:args>
	<Shell title={args.title} />
</Template>

<Story name="Default" args={{ title: 'Product Name' }} />

<Story name="Logo">
	<Shell title="Product Name">
		<img
			slot="logo"
			src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
			srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
			width="52"
			height="26"
			alt="SAP"
		/>
	</Shell>
</Story>
