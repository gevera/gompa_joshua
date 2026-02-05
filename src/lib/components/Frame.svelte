<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		border?: number;
		id?: string;
	}

	let { children, border = 0, id }: Props = $props();
</script>
<div class="frame" style={`border: ${border}px solid #fff;`} id={id}>
	{@render children()}
</div>

<style>
	.frame {
		padding: 1rem;
		/* border: 1px solid #444; */
		background: var(--gray-dark);
		border-radius: 12px;
	}
</style>
