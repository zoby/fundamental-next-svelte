<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-checkbox.css';

	/**
	 * Set to true to tuncate label text
	 * @type {boolean}
	 */
	export let truncate: boolean = false;

	/**
	 * Set the value for the checkbox
	 * @type {boolean}
	 */
	export let value: boolean = false;

	$: props = {
		tabindex: 0,
		...$$restProps,
		class: ['fn-checkbox', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<label {...props}>
	<input
		class="fn-checkbox__input"
		type="checkbox"
		tabindex="-1"
		aria-label="checkbox"
		bind:value
		on:change
		on:focus
		on:blur
	/>
	<span class="fn-checkbox__checkmark" />
	{#if $$slots.default}
		<span class="fn-checkbox__label" class:fn-checkbox__label--truncate={truncate}><slot /></span>
	{/if}
</label>
