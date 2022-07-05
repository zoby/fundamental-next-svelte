<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-generic-tag.css';

	/**
	 * Specify the status of the generic tag
	 * @type {"" | "info" | "positive" | "critical" | "negative"}
	 */
	export let state: string = '';

	/**
	 * Set the number value for tag
	 * @type {number}
	 */
	export let number: string = '';

	/**
	 * Set to true to disable the generic tag
	 * @type {boolean}
	 */
	export let disabled: boolean = false;

	/**
	 * Set to tyue to hide the default icon displayed with states
	 * @type {boolean}
	 */
	export let hideIcon: boolean = false;

	const stateIcon: any = {
		info: 'information',
		positive: 'sys-enter-2',
		critical: 'alert',
		negative: 'sys-cancel-2'
	};

	$: stateSet = ['info', 'positive', 'critical', 'negative'].indexOf(state) > -1;

	$: props = {
		tabindex: 0,
		...$$restProps,
		class: [
			'fn-generic-tag',
			disabled && 'is-disabled',
			stateSet && `fn-generic-tag--${state}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<div {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	{#if stateSet && !hideIcon}
		<div class="fn-generic-tag__icon">
			<span class={`sap-icon sap-icon--${stateIcon[state]}`} />
		</div>
	{/if}
	<div class="fn-generic-tag__text"><slot /></div>
	<div class="fn-generic-tag__number">{number}</div>
</div>
