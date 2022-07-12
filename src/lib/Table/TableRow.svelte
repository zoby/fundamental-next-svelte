<script lang="ts">
	/**
	 * Set true to mark row as selected
	 * @type {boolean}
	 */
	export let selected: boolean = false;

	$: props = {
		...$$restProps,
		class: ['fn-table__row', selected && 'is-selected', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<tr {...props}>
	<slot />
</tr>
