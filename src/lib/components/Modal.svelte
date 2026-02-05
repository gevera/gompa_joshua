<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { tick } from 'svelte';
	import Frame from './Frame.svelte';
	import Vajra from './Vajra.svelte';
	import { showModal } from './store';

	let dialogRef: HTMLDivElement;
	let previousActiveElement: HTMLElement | null = null;

	function close() {
		showModal.set(false);
		previousActiveElement?.focus?.();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && $showModal) {
			e.preventDefault();
			close();
		}
	}

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			close();
		}
	}

	$effect(() => {
		if ($showModal) {
			previousActiveElement = document.activeElement as HTMLElement | null;
			tick().then(() => {
				dialogRef?.focus();
			});
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="modal"
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-title"
	aria-describedby="modal-desc"
	tabindex="-1"
	bind:this={dialogRef}
>
	<div
		class="modal-backdrop"
		role="button"
		tabindex="0"
		aria-label="Close dialog"
		transition:fade
		onclick={(e) => e.target === e.currentTarget && close()}
		onkeydown={handleBackdropKeydown}
	></div>
	<div class="modal-content" transition:scale>
		<Frame border={1}>
			<div class="content">
				<h3 id="modal-title">Your message has been sent!</h3>
				<div class="image">
					<Vajra />
				</div>
				<p id="modal-desc">We will get back to you soon</p>
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