<script lang="ts">
	import '@fundamental-styles/fn/dist/fn-input.css';
	import '@fundamental-styles/fn/dist/fn-nested-button.css';

	// Svelte
	import { createEventDispatcher } from 'svelte';

	// Components
	import Dropdown from '../Dropdown/Dropdown.svelte';
	import { List, ListItem } from '../List';

	const dispatch = createEventDispatcher();

	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let value: string;
	export let options: any;

	let open: boolean = false;

	function setValue(option: string): void {
		value = option;
		close();

		// Dispatch change event
		dispatch('change', {
			value
		});
	}

	function close() {
		open = false;
	}

	function clickOutside(ele: any, callbackFunction: Function) {
		function onClick(event: any) {
			if (!ele.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: Function) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
</script>

<Dropdown {open}>
	<svelte:fragment slot="control">
		<div
			class="fn-input fn-input--select"
			tabindex="0"
			class:is-disabled={disabled}
			class:is-active={open}
			on:click={() => (open = true)}
			use:clickOutside={close}
		>
			<input
				class="fn-input__text-field"
				type="text"
				{placeholder}
				tabindex="-1"
				value={options[value] || ''}
			/>
			<div class="fn-input__border" />
			<button class="fn-nested-button" aria-label="nested button" tabindex="-1">
				<span class="sap-icon sap-icon--megamenu" />
			</button>
		</div>
	</svelte:fragment>

	<List>
		{#each Object.entries(options) as [key, option]}
			<ListItem selected={key === value} on:click={() => setValue(key)}>{option}</ListItem>
		{/each}
	</List>
</Dropdown>
