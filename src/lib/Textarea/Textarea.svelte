<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-textarea.css';

	/**
	 * Value for value attribute on the textarea
	 * @type {string}
	 */
	export let value: string = '';

	/**
	 * Placeholder text for the textarea
	 * @type {string}
	 */
	export let placeholder: string = '';

	/**
	 * Set to true to mark textarea as disabled
	 * @type {boolean}
	 */
	export let disabled: boolean = false;

	/**
	 * Set to true to mark textarea as read only
	 * @type {boolean}
	 */
	export let readOnly: boolean = false;

	$: props = {
		class: ['fn-textarea', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<div {...props}>
	<textarea
		class="fn-textarea__input"
		{placeholder}
		{disabled}
		readonly={readOnly}
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
	<div class="fn-textarea__border" />
</div>
