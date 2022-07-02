<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-link.css';

	/**
	 * Specify the href value
	 * @type {string}
	 * @required
	 */
	export let href: string;

	/**
	 * Set to true to emphasize link
	 * @type {boolean}
	 */
	export let emphasized: boolean = false;

	$: props = {
		...$$restProps,
		class: ['fn-link', emphasized && 'fn-link--emphasized', $$restProps.class]
			.filter(Boolean)
			.join(' ')
	};
</script>

<a {href} {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus><slot /></a>
