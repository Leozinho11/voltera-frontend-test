<script lang="ts">
  export let name: string
  export let age: number
</script>

<div>
	<section>
		<p class="other-text">
      {name}, sua idade estimada é de:
    </p>
    <p class="age-text">
      {age}
    </p>
    <p class="other-text">
      anos.
    </p>
	</section>
</div>

<style>
	div {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
    gap: 1.5rem;
		padding: 1rem;
		border: solid 2px;
		border-radius: 10px;
		border-color: green;
		min-width: 18rem;
		font-size: medium;
		color: darkgreen;
	}

  section p {
    margin: 0;
  }

  .age-text {
    font-size: 3.5rem;
    font-weight: 900;
  }

  .other-text {
    font-size: large;
  }
</style>
