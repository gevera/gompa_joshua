<script lang="ts">
	import { showModal } from './store';
	let objToSend: { name: string; email: string; tel: string; content: string; hear: string } = { name: '', email: '', tel: '', content: '', hear: '' };
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
					telephone: `TEL: ${objToSend.tel} | EMAIL: ${objToSend.email}`,
					message: `MESSAGE: ${objToSend.content} | FROM: ${objToSend.hear}`,
					time: new Date(now - 3600000 * 11).toLocaleString('us-US'),
					group: 'gompa_joshua'
				})
			});

			if (resp.ok) {
				objToSend = { name: '', email: '', tel: '', content: '', hear: '' };
				$showModal = true;
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<form on:submit|preventDefault={sendForm}>
	<label for="name">Your name</label>
	<input name="name" type="text" placeholder="full name" required bind:value={objToSend.name} />
	<label for="email">Your email</label>
	<input name="email" type="email" placeholder="email" required bind:value={objToSend.email} class="text-black!"/>
	<label for="phone">Your phone</label>
	<input name="phone" type="tel" placeholder="telephone number" required bind:value={objToSend.tel} />
	<label for="content">Your message</label>
	<textarea name="content" rows="5" placeholder="message" required bind:value={objToSend.content}></textarea>
	<label for="hear">How did you find us (word of mouth?, volunteer or other website?, google search?)</label>
	<input name="hear" required bind:value={objToSend.hear} />
	<button type="submit" id="send-button" class="bg-gray-lighter! hover:bg-brand! font-semibold!">Send</button>
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
	input, textarea {
		color: var(--gray-dark) !important;
		font-size: 1.2rem !important;
	}
	#send-button {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		background-color: var(--gray-brand) !important;
		color: var(--gray-dark) !important;
		padding: 1rem !important;
		margin-top: 1rem !important;
		text-transform: uppercase !important;
	}
</style>
