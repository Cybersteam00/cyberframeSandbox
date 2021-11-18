<script lang="ts">
	import CustomStyle from "$model/CustomStyle";
	import Colorpicker from "$component/form/Colorpicker.svelte";
	import NumberInput from "$component/form/NumberInput.svelte";
	import { onMount } from "svelte";
	import EditColor from "./EditColor.svelte";
	import Modal from "$component/modal.svelte";

	let modal: Modal;
	let styles: CustomStyle = new CustomStyle();

	let borderRadius: number = 6;
	let header1: number = 2;
	let header2: number = 2;
	let header3: number = 2;
	let header4: number = 2;
	let header5: number = 2;
	let header6: number = 2;

	onMount(() => {
		if (localStorage.getItem("customStyle") != null) {
			styles = JSON.parse(localStorage.getItem("customStyle"));
			updateCssVariables();
		}
	});

	function colorChanged(event: any) {
		updateLocalStorage();
		updateCssVariables();
	}

	function updateLocalStorage() {
		localStorage.setItem("customStyle", JSON.stringify(styles));
	}

	function updateCssVariables() {
		let body = document.body;
		Object.entries(styles).map(([key, value]) =>
			body.style.setProperty("--" + key, value)
		);
	}
</script>

<header>
	<!-- <button
		class="btn primary"
		on:click={() => {
			modal.open();
		}}>Settings</button
	> -->
</header>
<Modal title="Settings" bind:this={modal}>
	<div class="cols-2 md:cols-3">
		<EditColor
			label="Primary"
			bind:value={styles["color-primary"]}
			bind:valueDark={styles["color-primary-dark"]}
			bind:valueLight={styles["color-primary-light"]}
			on:change={colorChanged}
		/>
		<EditColor
			label="Secondary"
			bind:value={styles["color-secondary"]}
			bind:valueDark={styles["color-secondary-dark"]}
			bind:valueLight={styles["color-secondary-light"]}
			on:change={colorChanged}
		/>
		<EditColor
			label="Info"
			bind:value={styles["color-info"]}
			bind:valueDark={styles["color-info-dark"]}
			bind:valueLight={styles["color-info-light"]}
			on:change={colorChanged}
		/>
		<EditColor
			label="Success"
			bind:value={styles["color-success"]}
			bind:valueDark={styles["color-success-dark"]}
			bind:valueLight={styles["color-success-light"]}
			on:change={colorChanged}
		/>
		<EditColor
			label="Warning"
			bind:value={styles["color-warning"]}
			bind:valueDark={styles["color-warning-dark"]}
			bind:valueLight={styles["color-warning-light"]}
			on:change={colorChanged}
		/>
		<EditColor
			label="Danger"
			bind:value={styles["color-danger"]}
			bind:valueDark={styles["color-danger-dark"]}
			bind:valueLight={styles["color-danger-light"]}
			on:change={colorChanged}
		/>
		<div>
			<NumberInput label="Border Radius" bind:value={borderRadius}>
				<span>px</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Border Radius" bind:value={borderRadius}>
				<span>px</span>
			</NumberInput>
		</div>
	</div>
	<div class="cols-2 lg:cols-4">
		<div>
			<Colorpicker label="BG Color" bind:value={styles["bg-color"]} />
		</div>
		<div>
			<Colorpicker
				label="BG Color Active"
				bind:value={styles["bg-color-active"]}
			/>
		</div>
		<div>
			<Colorpicker label="Font Color" bind:value={styles["font-color"]} />
		</div>
		<div>
			<Colorpicker
				label="Font Color Active"
				bind:value={styles["font-color-active"]}
			/>
		</div>
	</div>
	<div class="cols-2 md:cols-3">
		<div>
			<NumberInput label="Header 1" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Header 2" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Header 3" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Header 4" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Header 5" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
		<div>
			<NumberInput label="Header 6" bind:value={header1}>
				<span>rem</span>
			</NumberInput>
		</div>
	</div>
</Modal>
