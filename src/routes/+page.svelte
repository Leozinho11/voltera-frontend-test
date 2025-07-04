<script lang="ts">
	import Container from '$lib/container/Container.svelte';
	import DebouncedInput from '$lib/debouncedInput/DebouncedInput.svelte';
	import Header from '$lib/header/Header.svelte';
	import ReturnText from '$lib/returnText/ReturnText.svelte';
	import Title from '$lib/title/Title.svelte';
	import type { AgeEstimate } from '../types/AgeEstimate';

	export let data: AgeEstimate;

	let name = data.name;
</script>

<Header>Sistema de Estimativa de Idade</Header>

<Container>
	<Title />

	<DebouncedInput placeholder="Insira seu nome aqui" value={name} />

	{#if data.age}
		<ReturnText name={data.name} age={data.age} />
	{/if}
</Container>
