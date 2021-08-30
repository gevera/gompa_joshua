<script>
	import Corner from './Corner.svelte';
</script>

<div class="navbar">
	<div class="left">
		<Corner />
		<!-- <img src="/corner.svg" alt="Corner Left" /> -->
	</div>
	<div class="links">
		<a href="/#hero" id="name">Gompa Apartments</a>
	</div>
	<div class="right">
		<Corner />
		<!-- <img src="/corner.svg" alt="Corner Left" /> -->
	</div>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 1;
		left: 1;
		right: 1;
		width: 100%;
		/* width: 100%; */
	}

	.links {
		flex: 1;
		display: flex;
		justify-content: center;
		padding-bottom: 0;
	}
	a {
		background: var(--gray-dark);
		color: var(--gray-lighter);
		padding: 1rem;
		margin: 0;
		border: 1px solid var(--gray-lighter);
	}
	.left,
	.right {
		color: var(--gray-lighter);
		max-height: 5rem;
		width: 5rem;
	}

	.right {
		transform: scaleX(-1);
	}

	#name {
		font-size: 2rem;
		text-align: center;
		line-height: 1;
		font-family: 'Cinzel Decorative', cursive;
	}

	@media (max-width: 480px) {
		#name {
			font-size: 1.4rem;
			padding: 0.4rem;
		}

		.left,
		.right {
			max-height: 2.5rem;
		}
	}
</style>
