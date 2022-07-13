<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-card.css';

	export let title: string = '';
</script>

<div class="fn-card">
	{#if title}
		<div class="fn-card__header">
			{#if title}
				<div class="fn-card__title-container">
					<h1 class="fn-card__title">{title}</h1>
				</div>
			{/if}
		</div>
	{/if}
	<div class="fn-card__content">
		<slot />
	</div>
</div>
