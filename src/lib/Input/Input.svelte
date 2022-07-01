<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import '@fundamental-styles/fn/dist/fn-input.css';

	const dispatch = createEventDispatcher();

	/**
	 * Specify the input state
	 * @type {"info" | "critical" | "negative" | "positive"}
	 */
	export let state: string = '';

	/**
	 * Value for value attribute on the input
	 * @type {string}
	 */
	export let value: string = '';

	/**
	 * Set the input type
	 * @type {"text" | "password"}
	 */
	export let type: string = 'text';

	/**
	 * Placeholder text for the input
	 * @type {string}
	 */
	export let placeholder: string = '';

	/**
	 * Set to true to mark input as disabled
	 * @type {boolean}
	 */
	export let disabled: boolean = false;

	/**
	 * Set to true to mark input as read only
	 * @type {boolean}
	 */
	export let readOnly: boolean = false;

	$: props = {
		class: [
			'fn-input',
			['info', 'positive', 'critical', 'negative'].indexOf(state) > -1 && `fn-input--${state}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};

	function onInput(e: any): void {
		value = e.target.value;
		dispatch('input', value);
	}

	function onChange(e: any): void {
		dispatch('change', e.target.value);
	}
</script>

<div {...props}>
	<input
		class="fn-input__text-field"
		{placeholder}
		{disabled}
		{type}
		readonly={readOnly}
		{value}
		{...$$restProps}
		on:input={onInput}
		on:change={onChange}
		on:keydown
		on:keyup
		on:focus
		on:blur
		on:paste
	/>
	<div class="fn-input__border" />
</div>
