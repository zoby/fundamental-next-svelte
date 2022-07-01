<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-link.css';

	/**
	 * Set to true if the Title text should wrap instead of truncate
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
