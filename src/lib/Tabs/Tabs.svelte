<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-tabs.css';

	/**
	 * Specify the state of the tab bar
	 * @type {"positive" | "critical" | "negative"}
	 */
	export let state: string = '';

	/**
	 * Set true to mark as a multi instance tab group
	 * @type {boolean}
	 */
	export let multiInstance: boolean = false;

	$: props = {
		role: 'tablist',
		...$$restProps,
		class: [
			'fn-tabs',
			multiInstance && 'fn-tabs--multi-instance',
			['positive', 'critical', 'negative'].indexOf(state) > -1 && `fn-tabs--${state}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<ul {...props}>
	<slot />
	{#if $$slots.right}
		<li role="tab" class="fn-tabs__right-container">
			<slot name="right" />
		</li>
	{/if}
</ul>
