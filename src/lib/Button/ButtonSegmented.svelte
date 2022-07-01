<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-segmented-button.css';

	$: props = {
		...$$restProps,
		class: ['fn-segmented-button', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<div {...props}>
	<slot />
</div>
