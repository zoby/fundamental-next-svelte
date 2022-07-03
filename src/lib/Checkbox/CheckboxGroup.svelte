<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-fieldset.css';

	/**
	 * Set true to have group fill full width
	 * @type {boolean}
	 */
	export let fullWidth: boolean = false;

	/**
	 * Set to true to display checkboxes in a row
	 * @type {boolean}
	 */
	export let inline: boolean = false;

	$: props = {
		...$$restProps,
		class: [
			'fn-fieldset',
			fullWidth && 'fn-fieldset--full-width',
			inline && 'fn-fieldset--horizontal',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<fieldset {...props}>
	<slot />
</fieldset>
