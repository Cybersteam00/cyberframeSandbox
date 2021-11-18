<script lang="ts">
	import Header from "$component/Header.svelte";
	import Navigation from "$component/Navigation.svelte";


</script>

<Header></Header>
<Navigation />
<main>
	<slot />
</main>
