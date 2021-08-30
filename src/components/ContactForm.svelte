<script>
	import { showModal } from '../store';
	let objToSend = {};
	const sendForm = async () => {
		try {
			let now = new Date().getTime();
			const resp = await fetch('https://bot.skrymenu.com', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...objToSend,
					time: new Date(now - 3600000 * 11).toLocaleString('us-US'),
					group: 'gompa_joshua'
				})
			});

			if (resp.ok) {
				objToSend = {};
				$showModal = true;
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<form on:submit|preventDefault={sendForm}>
	<input type="text" placeholder="name" required bind:value={objToSend.name} />
	<input type="email" placeholder="email" required bind:value={objToSend.telephone} />
	<textarea rows="5" placeholder="message" required bind:value={objToSend.message} />
	<button>Send</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	input,
	button,
	textarea {
		font-family: 'Jomolhari', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
	button {
		padding: 1rem;
		text-transform: uppercase;
	}
</style>
