<script>
	export let border = 0;
</script>
<div class="frame" style={`border: ${border}px solid #fff;`}>
	<slot />
</div>

<style>
	.frame {
		padding: 1rem;
		/* border: 1px solid #444; */
		background: var(--gray-dark);
		border-radius: 12px;
	}
</style>
