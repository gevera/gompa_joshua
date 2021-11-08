<script>
	import Frame from '../components/Frame.svelte';
</script>

<svelte:head>
	<title>Gompa Apartments | Heaven Earth Human Page</title>
</svelte:head>

<div class="container">
	<h1>Heaven Earth Human</h1>

	<div class="image">
		<img src="/pics/heaven_earth_human_caligraphy.jpg" alt="Caligraphy" />
	</div>

	<div>
		<Frame
			><p>
				"In the ancient philosophies of both China and Japan, the three principles of heaven, earth,
				and man expressed this view of how human life and society could be integrated with the order
				of the natural world. These principles are based on an ancient understanding of natural
				hierarchy. I have found that, in presenting the discipline of warriorship, the principles of
				heaven, earth and man are very helpful in describing how the warrior should take his seat in
				the sacred world. Although politically and socially, our values are quite different from
				those of Imperial China and Japan, it is still possible to appreciate the basic wisdom
				contained in these principles of natural order. Heaven, earth, and man can be seen literally
				as the sky above, the earth below, and human beings standing or sitting between the two.
			</p></Frame
		>
	</div>
	<div>
		<Frame
			><p>
				If we apply the perspective of heaven, earth, and man to the situation in the world today,
				we begin to see that there is a connection between the social and the natural, or
				environmental, problems that we are facing. When human beings lose their connection to
				nature, to heaven and earth, then they do not know how to nurture their environment or how
				to rule their world—which is saying the same thing. Human beings destroy their ecology at
				the same time that they destroy one another. From that perspective, healing our society goes
				hand in hand with healing our personal, elemental connection with the phenomenal world."
			</p>
			<br />
			<p class="about">
			    From Chogyam Trungpa - Shambhala: The Sacred Path of the Warrior (Shambhala Classics) Shambhala
    			Publications.
			</p>
		</Frame>
	</div>
</div>

<style>
    .image {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
	.container {
		max-width: 1024px;
		margin: 0 auto;
	}

    div {
        padding: 0.5rem;
    }

    .about {
        font-style: italic;
        text-align: right;
        font-size: 1.1rem;
    }
</style>
