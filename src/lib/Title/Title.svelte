<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-title.css';

	/**
	 * Determines the heading tag rendered on the page
	 * Values between 1 - 6
	 * @type {number}
	 * @required
	 */
	export let level: number;

	/**
	 * If the desired visual appearance is different from the style set by the level
	 * Values between 1 - 6
	 * @type {number}
	 */
	export let levelStyle: number | undefined = undefined;

	/**
	 * Set to true if the Title text should wrap instead of truncate
	 * @type {boolean}
	 */
	export let wrap: boolean = false;

	$: headingType = levelStyle ? levelStyle : level;

	$: props = {
		...$$restProps,
		class: ['fn-title', `fn-title--h${headingType}`, wrap && 'fn-title--wrap', $$restProps.class]
			.filter(Boolean)
			.join(' ')
	};
</script>

<svelte:element this={`h${level}`} {...props}>
	<slot />
</svelte:element>
