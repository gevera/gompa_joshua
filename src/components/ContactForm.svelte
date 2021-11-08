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
					telephone: `${objToSend.tel} | ${objToSend.email}`,
					message: `${objToSend.hear} | ${objToSend.content}`,
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
	<label for="name">Your name</label>
	<input name="name" type="text" placeholder="name" required bind:value={objToSend.name} />
	<label for="email">Your email</label>
	<input name="email" type="email" placeholder="email" required bind:value={objToSend.email} />
	<label for="phone">Your phone</label>
	<input name="phone" type="tel" placeholder="telephone number"  bind:value={objToSend.tel} />
	<label for="hear">Who did you hear about us?</label>
	<select name="hear" id="hear" bind:value={objToSend.hear}>
		<option value="Word of mouth">Word of mouth</option>
		<option value="Volunteer or other website">Volunteer or other website</option>
		<option value="Google search">Google search</option>
		<option value="Other">Other</option>
	</select>
	<label for="content">Your message</label>
	<textarea name="content" rows="5" placeholder="message" required bind:value={objToSend.content} />
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
		background: #cacaca;
	}
	button:hover {
		background: #fafafa;
	}

	select {
		padding: 1rem;
	}
</style>
