<script lang="ts">
	export let value: number;
	export let label: string;
	export let step: string = "1.0";
	export let placeholder: string = "";
	export let readonly: boolean = false;
	export let disabled: boolean = false;
</script>

<div class="input number">
	<span>{label}</span>
	<label class="form-control">
		<input type="number" bind:value {step} {placeholder} {readonly} {disabled} />
		<slot></slot>
	</label>
</div>