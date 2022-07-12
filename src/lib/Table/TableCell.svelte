<script lang="ts">
	/**
	 * Set true to mark cell as selected
	 * @type {boolean}
	 */
	export let selected: boolean = false;

	/**
	 * Set true to disable hover effect
	 * @type {boolean}
	 */
	export let noHover: boolean = false;

	/**
	 * Set true to set cell as end container
	 */
	export let end: boolean = false;

	$: props = {
		...$$restProps,
		class: [
			'fn-table__cell',
			selected && 'is-selected',
			noHover && 'fn-table__cell--no-hover',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<td {...props}>
	{#if !end}
		<slot />
	{:else}
		<div class="fn-table__end-container">
			<slot />
		</div>
	{/if}
</td>
