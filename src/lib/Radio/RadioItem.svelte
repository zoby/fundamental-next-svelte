<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-radio.css';

	/**
	 * Set the value for the radio button
	 * @type {boolean}
	 */
	export let value: boolean = false;

	$: props = {
		tabindex: 0,
		...$$restProps,
		class: ['fn-radio', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<label {...props}>
	<input
		class="fn-radio__input"
		type="radio"
		tabindex="-1"
		aria-label="radio"
		bind:value
		on:change
		on:focus
		on:blur
	/>
	<span class="fn-radio__checkmark" />
	{#if $$slots.default}
		<span class="fn-radio__label"><slot /></span>
	{/if}
</label>
