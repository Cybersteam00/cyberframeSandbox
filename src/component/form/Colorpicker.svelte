<script lang="ts">
	export let value: any;
	export let label: string;

</script>

<div class="input color">
	<span>{label}</span>
	<label class="form-control">
		<input type="color" bind:value on:change />
		<slot></slot>
	</label>
</div>