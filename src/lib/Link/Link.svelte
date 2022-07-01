<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-link.css';

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

<a href={$$restProps.href} {...props}><slot /></a>
