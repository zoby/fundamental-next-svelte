<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-dropdown.css';

	export let open: boolean = false;
</script>

<div class="dropdown">
	<div class="control">
		<slot name="control" />
	</div>
	{#if open}
		<div class="content">
			<div class="fn-dropdown fn-dropdown--full-width fn-dropdown--full-height">
				<slot />
			</div>
		</div>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		box-sizing: border-box;
		height: 30px;
		min-width: 100px;
		width: 100%;
	}

	.control {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.content {
		top: 33px;
		left: 0;
		width: 100%;
		position: absolute;
		z-index: 100;
	}
</style>
