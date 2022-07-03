<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-message-toast.css';

	/**
	 * Set to true to tuncate the message text
	 * @type {boolean}
	 */
	export let truncate: boolean = false;

	$: props = {
		...$$restProps,
		class: ['fn-message-toast', $$restProps.class].filter(Boolean).join(' ')
	};
</script>

<div {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	<span class="fn-message-toast__text" class:fn-message-toast__text--truncate={truncate}>
		<slot />
	</span>
</div>
