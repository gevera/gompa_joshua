<script>
	import Frame from '../components/Frame.svelte';
	import Hero from '../components/Hero.svelte';
</script>

<svelte:head>
	<title>Gompa Apartments</title>
</svelte:head>
<div class="mahayana">
	<div class="hero">
		<Hero />
	</div>
	<div class="activities">
		<Frame>
			<h3>Activities</h3>
			<img src="/pics/accu.jpg" alt="Accupuncture" />
			<p>
				In addition to the apartments, the property also has a three bedroom house which used to be
				a thrift store. Right now the house is just used residentially, but in the near future we
				hope to renovate it and to make use of the house for a few beneficial non-profit businesses
				to contribute to the community and welfare of Truth or Consequences.
			</p>
			<img src="/pics/apts.jpg" alt="Aparments" />
			<p>
				In addition to renovating the house, we are planning to renovate one of the larger
				apartments into a dorm room / library for lower price accompations and have an open room for
				quiet meditation.
			</p>
		</Frame>
	</div>
	<div class="projects">
		<Frame>
			<h3>Upcoming Projects</h3>
			<p>
				We are hoping to open an Asian health healing and educational center with Indian and Chinese
				herbal cooking classes, and also provide community acupuncture. In addition we have
				aspirations to create a few Electric Bicycle/Scooter related businesses (not for profit) to
				help our transition from fossil fuels and also help younger people find productive ways to
				spend their time. The first is called <a href="/projects#pimp-my-bike" class="jir"
					>"Pimp my Bike"</a
				>
				where we help people transform regular bikes into electric bikes and pieces of art at the same
				time. The second wing of the business is called
				<a href="/projects#pimp-my-bike" class="jir">"Easy Rider Rentals"</a>
				where we have a community run bicycle rental business which provides bicycles for local or visiting
				tourists and spa soakers. The healing aspect of these businesses is inspired movements in Japan
				called meaningful life therapy and constructive living, which are based on the work of Shoma
				Morita and other Japanese approaches to working with anxiety and stress.
				<a href="/projects#morita"
					>For a more detailed description about Shoma Morita and the movements he inspired click
					here</a
				>
			</p>
			<img src="/pics/bike.jpg" alt="Bike" />
			<p>
				Pimp my Bike and Easy Rider are not businesses entirely with an aim at profit, but also are
				resources of wellness and mental health for the community. <a href="/projects#pimp-my-bike"
					>For more information on these projects click here</a
				>
			</p>
		</Frame>
	</div>
	<div class="tc">
		<Frame>
			<h3>Where is Gompa Apartments and why visit Truth or Consequences?</h3>
			<img src="/pics/map.png" alt="Map" />
			<p>
				Truth or Consequence NM, or T or C for short, is a small city about 2 hours south of
				Albuquerque, NM. Once known as Hot Springs, NM, Truth or Consequences is a small town with a
				year-round population of slightly more than 6,000. Although it has a large retirement
				population, it also features a beautiful historically senic main street with taverns,
				restaurants and shops. On its town website,Truth or Consequences calls itself a “resort
				town” because of its many hot springs and proximity to Elaphant Butte Lake which has
				beaches, sailing, and camping. Next to the town are a few mountains also said to have
				special powers. The Native Americans used to use T or C as a spot for healing and recovery.
				The natural hot spring have great mineal properties for relaxing and help to heal many
				ailments. The Rio Grande runs through the town and there is tubing and beautiful parks and
				places to enjoy nature. T or C is therefore a very unique spot. It's especially unique to
				have so much water features in the middle of the dry southern part of NM. <a
					href="/torc"
					class="slim">(How did T or C got its name?)</a
				>
			</p>
			<img src="/pics/riogrande.jpeg" alt="Rio Grande" />
		</Frame>
	</div>
	<div class="name">
		<Frame>
			<h3>Historical Downtown</h3>
			<img src="/pics/downtown.jpg" alt="Downtown" />
			<h3>Places of Spiritual Piligrimage</h3>
			<img src="/pics/stupa.jpeg" alt="Stupa" />
			<h3>Elephant Butte Dam and Elephant Butte Lake State Park</h3>
			<img src="/pics/dam.jpeg" alt="Dam" />
		</Frame>
	</div>
	<div class="work">
		<Frame>
			<h3>WORK STAY POSSIBILITIES:</h3>
			<p>Coming soon</p>
		</Frame>
	</div>
	
	
</div>

<style>
	* {
		color: #fff;
	}
	img {
		width: 100%;
		object-fit: cover;
		height: 400px;
	}
	.mahayana {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(6, 1fr);
		grid-template-areas:
			'. hero hero hero hero .'
			'activities activities activities activities work work'
			'activities activities activities activities work work'
			'projects projects projects projects . .'
			'tc tc tc name name name'
			'. . contacts contacts contacts contacts';
	}
	.hero {
		grid-area: hero;
	}
	.work {
		grid-area: work;
	}
	.projects {
		grid-area: projects;
	}
	.name {
		grid-area: name;
	}
	.tc {
		grid-area: tc;
	}
	.activities {
		grid-area: activities;
	}
	a {
		/* text-decoration: underline; */
		font-style: italic;
		font-weight: 300;
	}
	.jir {
		font-weight: 700;
		font-style: normal;
	}
	.slim {
		font-size: 1rem;
	}
	@media (min-width: 1024px) {
		.mahayana {
			grid-template-columns: repeat(6, 1fr);
			grid-template-areas:
				'. hero hero hero hero .'
				'activities activities activities activities work work'
				'activities activities activities activities work work'
				'projects projects projects projects . .'
				'tc tc tc name name name';
		}
	}
	@media (max-width: 960px) {
		.mahayana {
			grid-template-columns: repeat(3, 1fr);
			grid-template-areas:
				'hero hero .'
				'. activities activities'
				'projects projects projects'
				'tc tc tc'
				'name name name'
				'. work .';
		}
	}
	@media (max-width: 620px) {
		.mahayana {
			grid-template-columns: 1fr;
			grid-template-areas:
				'hero'
				'activities'
				'projects'
				'work'
				'tc'
				'name';
		}
	}
</style>
