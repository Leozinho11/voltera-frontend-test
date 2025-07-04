<header>
	<h1><slot /></h1>
  <div class="gradient-border"></div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 5rem;
    background-color: darkgreen;
  }

  .gradient-border {
    min-height: 4px;
    background-image: linear-gradient(to right, green, darkGreen);
  }

  h1{
    color: white;
    margin-left: 1rem;
  }
</style>
