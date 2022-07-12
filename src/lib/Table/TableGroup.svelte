<script lang="ts">
	export let columns: number;
</script>

<tr class="fn-table__row">
	<td class="fn-table__group-header"><slot /></td>
	{#each Array(columns - 1) as _}
		<td class="fn-table__cell" />
	{/each}
</tr>
