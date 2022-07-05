<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-search.css';

	/**
	 * Value for value attribute on the search input
	 * @type {string}
	 */
	export let value: string = '';

	/**
	 * Placeholder text for the search input
	 * @type {string}
	 */
	export let placeholder: string = '';

	/**
	 * Set to true to mark search input as disabled
	 * @type {boolean}
	 */
	export let disabled: boolean = false;

	$: props = {
		class: ['fn-search', disabled && 'is-disabled', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<div {...props}>
	<span class="sap-icon sap-icon--search" />
	<input
		type="search"
		class="fn-search__input"
		{placeholder}
		{disabled}
		bind:value
		{...$$restProps}
		on:input
		on:change
		on:keydown
		on:keyup
		on:focus
		on:blur
		on:paste
	/>
	<span class="sap-icon sap-icon--navigation-right-arrow" />
</div>
