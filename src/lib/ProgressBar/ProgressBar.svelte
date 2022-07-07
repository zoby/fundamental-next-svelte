<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-progress-bar.css';

	/**
	 * Specify the kind of object status
	 * @type {"positive" | "critical" | "negative"}
	 */
	export let state: string = '';

	/**
	 * Set the value of the progress bar 0 - 100
	 * @type {number}
	 * @required
	 */
	export let value: number = 0;

	$: props = {
		tabindex: -1,
		role: 'progressbar',
		'aria-valuemin': 0,
		'aria-valuenow': value,
		'aria-valuemax': 100,
		'aria-valuetext': `${value}%`,
		'aria-label': `${value}%`,
		...$$restProps,
		class: [
			'fn-progress-bar',
			['positive', 'critical', 'negative'].indexOf(state) > -1 && `fn-progress-bar--${state}`,
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<div {...props} on:click>
	<div class="fn-progress-bar__track" style={`min-width: ${value}%; width: ${value}%;`} />
</div>
