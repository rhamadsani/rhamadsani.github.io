<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Rhamad Nursani Sidik — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			With a passion for programming that has driven me since 2018, I excel as a full-stack developer based in Indonesia. At Jetorbit.com, I dive into complex challenges full-time, while also embracing exciting freelance projects. My expertise spans Node.js, Go(lang), PHP, Laravel, Svelte, and Python. I thrive on exploring the latest technologies and crafting innovative solutions to deliver outstanding results and drive success.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
