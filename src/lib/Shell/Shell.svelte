<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-shell.css';

	/**
	 * Set the product title value
	 * @type {string}
	 */
	export let title: string = '';
</script>

<div class="fn-shell" {...$$restProps}>
	<div class="fn-shell__group fn-shell__group--product">
		{#if $$slots.logo}
			<span class="fn-shell__logo">
				<slot name="logo" />
			</span>
		{/if}
		{#if title}
			<span class="fn-shell__title">{title}</span>
		{/if}
	</div>
	{#if $$slots.search}
		<div class="fn-shell__group fn-shell__group--search">
			<slot name="search" />
		</div>
	{/if}
	<div class="fn-shell__group fn-shell__group--actions">
		<slot name="actions" />
		<slot name="avatar" />
	</div>
</div>
