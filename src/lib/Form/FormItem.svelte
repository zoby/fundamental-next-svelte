<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-label.css';

	export let label: string;
	export let required: boolean = false;
	// TODO: Required before/after flag?
	export let message: string = '';

	export let horizontal: boolean = false;
	//export let messageType: string = '';
</script>

<div class="fn-form__item" class:fn-form__item--horizontal={horizontal}>
	<label class="fn-label" for="" class:fn-label--required={required}>{label}</label>
	<div class="fn-form__control">
		<slot />
		{#if message}
			<div class="fn-input-message">
				<div class="fn-input-message__text">{message}</div>
			</div>
		{/if}
	</div>
</div>
