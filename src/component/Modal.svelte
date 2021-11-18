<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let title: string;
	let showModal: boolean = false;

	let dispatch = createEventDispatcher();

	export function open(){
		showModal = true;
	}

	export function close(){
		showModal = false;
		dispatch("close");
	}
</script>

{#if showModal}
	<div class="modal">
		<div class="dialog">
			<h3 class="header">
				<span class="title">{title}</span>
				<button type="button" class="btn primary" on:click={close}>
					close
				</button>
			</h3>
			<div class="body">
				<slot></slot>
			</div>
		</div>
	</div>
{/if}