<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-table.css';
</script>

<table class="fn-table">
	{#if $$slots.head}
		<thead>
			<slot name="head" />
		</thead>
	{/if}

	<tbody>
		<slot />
	</tbody>
</table>
