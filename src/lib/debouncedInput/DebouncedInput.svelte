<script lang="ts">
	import { goto } from '$app/navigation';

	export let value: string;
	export let placeholder: string;

	let timeout: ReturnType<typeof setTimeout>;

	function debouncedSearch(e: Event) {
		value = (e.target as HTMLInputElement).value;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			goto(`?name=${encodeURI(value)}`, { replaceState: true });
		}, 1000);
	}
</script>

<input type="text" {placeholder} bind:value on:input={debouncedSearch} />

<style>
  input {
    max-width: 15rem;
    height: 2rem;
    border-radius: 10px;
    border-color: green;
    color: darkgreen;
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:hover {
    border-color: greenyellow;
  }

  input:focus {
    border-color: greenyellow;
  }

  input::placeholder{
    color: green;
    font-style: italic;
  }
</style>
