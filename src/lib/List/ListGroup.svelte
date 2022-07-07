<script lang="ts">
	/**
	 * Align text at end of header
	 * @type {boolean}
	 */
	export let endText: boolean = false;
</script>

<li class="fn-list__group-header" {...$$restProps}>
	<span class:fn-list__text={!endText} class:fn-list__text--end={endText}><slot /></span>
</li>
