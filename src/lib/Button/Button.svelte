<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-button.css';

	/**
	 * Specify the kind of button
	 * @type {"positive" | "critical" | "negative"}
	 */
	export let state: string = '';

	/**
	 * Set to true if button should be emphasized
	 * @type {boolean}
	 */
	export let emphasized: boolean = false;

	/**
	 * Set to true if button is secondary type
	 * @type {boolean}
	 */
	export let secondary: boolean = false;

	/**
	 * Set to true if is layout button
	 * @type {boolean}
	 */
	export let layout: boolean = false;

	/**
	 * Set to true to set the state of the button to be selected
	 * @type {boolean}
	 */
	export let selected: boolean = false;

	/**
	 * Determines weather the icon should be placed before or after text
	 * @type {boolean}
	 */
	export let iconBeforeText: boolean = true;

	$: props = {
		...$$restProps,
		class: [
			'fn-button',
			emphasized && 'fn-button--emphasized',
			secondary && 'fn-button--secondary',
			['positive', 'critical', 'negative'].indexOf(state) > -1 && `fn-button--${state}`,
			layout && 'fn-button--layout',
			selected && 'fn-button--selected',
			$$slots.icon && !$$slots.default && 'fn-button--icon-only',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<button {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	{#if iconBeforeText}
		<slot name="icon" />
	{/if}
	<span class="fn-button__text"><slot /></span>
	{#if !iconBeforeText}
		<slot name="icon" />
	{/if}
</button>
