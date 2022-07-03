<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-object-status.css';

	/**
	 * Specify the kind of object status
	 * @type {"info" | "positive" | "critical" | "negative"}
	 * @required
	 */
	export let state: string;

	/**
	 * Set to true for interactive object status
	 * @type {boolean}
	 */
	export let interactive: boolean = false;

	/**
	 * Set to true to set as byline
	 * @type {boolean}
	 */
	export let byline: boolean = false;

	$: props = {
		...$$restProps,
		class: [
			'fn-object-status',
			interactive && 'fn-object-status--interactive',
			byline && 'fn-object-status--byline',
			['info', 'positive', 'critical', 'negative'].indexOf(state) > -1 &&
				`fn-object-status--${state}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};

	$: iconClass = `sap-icon sap-icon--status-${state}`;
</script>

<div {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	<span class={iconClass} />
	<div class="fn-object-status__text"><slot /></div>
</div>
