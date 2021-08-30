<script>
	import { fade, scale } from 'svelte/transition';
    import Frame from './Frame.svelte';
    import Vajra from './Vajra.svelte';
    import { showModal } from '../store'
</script>
<div class="modal">
    <div class="modal-backdrop" transition:fade on:click={() => ($showModal = false)} />
    <div class="modal-content" transition:scale on:click={() => ($showModal = false)}>
        <Frame border="1">
            <div class="content">    
                <h3>Your message has been sent!</h3>
                <div class="image">
                    <Vajra />
                </div>
                <p>We will get back to you soon</p>	
            </div>
        </Frame>
    </div>
</div>

<style>
    p {
        text-align: center;
    }
    .modal {
		position: absolute;
	}
	.modal-backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 1);
		opacity: 0.7;
		padding: 1rem;
		z-index: 10;
	}
	.modal-content {
		position: fixed;
		max-width: 640px;
		min-width: 280px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		margin: 0 auto;
		font-size: 2rem;
		z-index: 11;
	}
    .content {
        display: grid;
        place-items: center;
        gap: 1rem;
    }

    .image {
        color: var(--gray-lighter);
        width: 10rem;
        height: auto;
    }
</style>