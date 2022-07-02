<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-info-label.css';

	/**
	 * Specify the kind of button
	 * @type {"display" | "mango" | "red" | "raspberry" | "pink" | "indigo" | "blue" | "teal" | "green" | "cyan" | "grey"}
	 * @required
	 */
	export let color: string = 'display';

	$: props = {
		...$$restProps,
		class: [
			'fn-info-label',
			[
				'display',
				'mango',
				'red',
				'raspberry',
				'pink',
				'indigo',
				'blue',
				'teal',
				'green',
				'cyan',
				'grey'
			].indexOf(color) > -1 && `fn-info-label--${color}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<span {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	<span class="fn-info-label__circle" />
	<span class="fn-info-label__text"><slot /></span>
</span>
