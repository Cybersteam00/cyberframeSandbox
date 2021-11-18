<script lang="ts">
	import Colorpicker from "$component/form/Colorpicker.svelte";
	import NumberInput from "$component/form/NumberInput.svelte";
	import { createEventDispatcher } from "svelte";

	export let value: string;
	export let valueDark: string;
	export let valueLight: string;
	export let label: string;

	let colorDark: number = 10;
	let colorLight: number = 10;

	const dispatch = createEventDispatcher();

	function colorChanged(event: any) {
		valueDark = lightenColor(value, -colorDark);
		valueLight = lightenColor(value, colorLight)
		dispatch("change");
	}

	function lighterChanged(){
		valueLight = lightenColor(value, colorLight)
		dispatch("change");
	}

	function darkerChanged(){
		valueDark = lightenColor(value, -colorDark);
		dispatch("change");
	}

	function lightenColor(color, percent) {
		var num = parseInt(color.replace("#", ""), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			B = ((num >> 8) & 0x00ff) + amt,
			G = (num & 0x0000ff) + amt;
		return (
			"#" +
			(
				0x1000000 +
				(R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
				(B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
				(G < 255 ? (G < 1 ? 0 : G) : 255)
			)
				.toString(16)
				.slice(1)
		);
	}
</script>

<div class="editColor">
	<Colorpicker {label} bind:value on:change={colorChanged} />
	<div style="width: 50px">
		<NumberInput label="Dark" bind:value={colorDark} on:change={darkerChanged} readonly={true}>
			<span>%</span>
		</NumberInput>
	</div>
	<div style="width: 50px">
		<NumberInput label="Light" bind:value={colorLight} on:change={lighterChanged} readonly={true}>
			<span>%</span>
		</NumberInput>
	</div>
</div>
