<script lang="ts">
	import { goto } from '$app/navigation';

  export let data: {
    searchedName: string
    estimatedAge: number
  }

  let name = data.searchedName

  let timeout: ReturnType<typeof setTimeout>

  function debouncedSearch (e: Event) {
    name = (e.target as HTMLInputElement).value

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      goto(`?name=${encodeURI(name)}`, { replaceState: true })
    }, 1000)
  }
</script>

<h1>
  Estimativa de idade
</h1>

<input
  type="text"
  placeholder=""
  bind:value={name}
  on:input={debouncedSearch}
/>

{#if data.estimatedAge}
  <p>{name}, sua idade estimada é de {data.estimatedAge}</p>
{/if}
