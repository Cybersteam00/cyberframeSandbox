<script lang="ts">
	export let value: string;
	export let label: string;
	export let placeholder: string = "";
	export let readonly: boolean = false;
	export let disabled: boolean = false;
</script>

<div class="input">
	<span>{label}</span>
	<label class="form-control">
		<input type="text" bind:value {placeholder} {readonly} {disabled} />
		<slot></slot>
	</label>
</div>