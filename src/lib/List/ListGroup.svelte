<script lang="ts">
	/**
	 * Align text at end of header
	 * @type {boolean}
	 */
	export let alignTextEnd: boolean = false;
</script>

<li class="fn-list__group-header" {...$$restProps}>
	<span class:fn-list__text={!alignTextEnd} class:fn-list__text--end={alignTextEnd}><slot /></span>
</li>
