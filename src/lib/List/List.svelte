<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-list.css';

	/**
	 * Set to true to create a byline list
	 * @type {boolean}
	 */
	export let byline: boolean = false;

	$: props = {
		...$$restProps,
		class: ['fn-list', byline && 'fn-list--byline', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<ul {...props} on:mouseover on:mouseenter on:mouseleave on:focus>
	<slot />
</ul>
