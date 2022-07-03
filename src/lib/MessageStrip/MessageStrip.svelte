<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import '@fundamental-styles/fn/dist/fn-message-strip.css';
	import '@fundamental-styles/fn/dist/fn-nested-button.css';

	const dispatch = createEventDispatcher();

	/**
	 * Specify the message strip type
	 * @type {"success" | "warning" | "error"}
	 */
	export let type: string = 'information';

	/**
	 * Set true to hide the state icon
	 * @type {boolean}
	 */
	export let noIcon: boolean = false;

	/**
	 * Set to true to tuncate the message text
	 * @type {boolean}
	 */
	export let truncate: boolean = false;

	/**
	 * Set to true to enable close button
	 * @type {boolean}
	 */
	export let dismissible: boolean = false;

	$: props = {
		...$$restProps,
		class: [
			'fn-message-strip',
			dismissible && 'fn-message-strip--dismissible',
			['success', 'warning', 'error'].indexOf(type) > -1 && `fn-message-strip--${type}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};

	$: iconClass = `sap-icon sap-icon--message-${type} fn-message-strip__icon`;

	function onClose() {
		dispatch('close');
	}
</script>

<div {...props}>
	{#if !noIcon}
		<span class={iconClass} />
	{/if}
	<span class="fn-message-strip__text" class:fn-message-strip__text--truncate={truncate}
		><slot /></span
	>
	{#if dismissible}
		<button
			class="fn-nested-button fn-message-strip__close-button"
			aria-label="close"
			on:click={onClose}
		>
			<span class="sap-icon sap-icon--decline" />
		</button>
	{/if}
</div>
