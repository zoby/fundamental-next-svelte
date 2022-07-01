<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-busy-indicator.css';

	$: props = {
		...$$restProps,
		class: ['fn-busy-indicator', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<div {...props}>
	<div class="fn-busy-indicator--circle-0" />
	<div class="fn-busy-indicator--circle-1" />
	<div class="fn-busy-indicator--circle-2" />
</div>
