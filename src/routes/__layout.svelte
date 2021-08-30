<script>
	import Nav from '../components/Nav.svelte';
	import Modal from '../components/Modal.svelte';
	import Frame from '../components/Frame.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import { showModal } from '../store';
	import ContactForm from '../components/ContactForm.svelte';
</script>

{#if $showModal}
	<Modal />
{/if}

<div class="container">
	<nav>
		<Nav />
	</nav>
	<main>
		<slot />
	</main>
	<footer>
		<div class="contacts">
			<Frame>
				<h3>Contact Gompa Apartments</h3>
				<p>The transformation of Gompa Apartments, How can you help?</p>
				<ContactForm />
			</Frame>
		</div>
		<div class="disclaimer">
			<Frame>
				<p class="small">
					Gompa Apartments contributes to the community and provides low cost, affordable housing.
					We believe human needs like housing and health care are human rights and we believe
					strongly that equality is a human right. Gompa apartments LLC is an equal opportunity
					housing provider, Gompa Apartments LLC (DBA Gompa Apartments), provides housing
					opportunities regardless of race, color, national origin, religion, non-religion, sex,
					physical or mental disability, familial status or any other designation protected by
					applicable federal, state or local law. We also try to have as little negative impact as
					possible to the environment and to be as sustainable as possible in our living and to be
					of benefit to the planet and the natural world around us.
				</p>
			</Frame>
		</div>
		<Footer />
	</footer>
	<div class="pattern-bg" />
</div>

<style>
	.container {
		padding: 1rem;
		background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E");
		min-height: calc(100vh - 2rem);
		display: grid;
		grid-template-rows: auto 1fr auto;
		position: relative;
	}
	.pattern-bg {
		background: rgb(71, 71, 71);
		background: radial-gradient(circle, rgb(70, 70, 70) 0%, rgba(0, 0, 0, 1) 100%);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		z-index: -10;
	}

	main {
		margin-top: 2.5rem;
	}

	nav {
		position: sticky;
		top: 0;
	}

	.contacts {
		max-width: 768px;
		padding-top: 3rem;
	}

	.disclaimer {
		margin: 0 auto;
		max-width: 768px;
		padding-top: 3rem;
	}
	.small {
		font-size: 1rem;
	}
</style>
