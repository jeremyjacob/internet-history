<script lang="ts">
	import { onMount } from 'svelte'
	import Explorer from './Explorer.svelte'

	export let name = 'Folder'
	let open = false
	let focus = false
	let folder: HTMLDivElement
	let closeHover = false

	function click(event: MouseEvent) {
		const target = event.target as HTMLElement
		if (
			target.parentElement == folder ||
			target.parentElement.parentElement == folder
		)
			focus = true
	}

	function blur() {
		focus = false
	}

	function dblclick() {
		// if (sub) $explorerPath = $explorerPath + '/' + name
		// else $explorerPath = name
		focus = false
		open = true
	}

	function close() {
		open = false
	}

	let rects: DOMRect
	let x: number, y: number

	onMount(() => {
		rects = folder.getClientRects()[0]
		x = rects.x
		y = rects.y
	})
	setInterval(() => {
		rects = folder?.getClientRects()[0]
	}, 500)
</script>

<div
	class="folder"
	class:focus
	tabindex="0"
	bind:this={folder}
	on:dblclick={dblclick}
	on:mousedown={click}
	on:blur={blur}
>
	<img
		src="http://www.windows93.net/c/sys/skins/w93/places/folder.png"
		alt="Folder"
	/>
	<div class="label"><span>{name}</span></div>
	{#if open}
		<div class="explorer" class:closeHover>
			<Explorer
				currentX={rects.x}
				currentY={rects.y}
				{close}
				title={name}
				bind:closeHover
			>
				<slot />
			</Explorer>
		</div>
	{/if}
</div>

<style lang="scss">
	.folder {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		width: 2.5em;
		align-items: center;
		user-select: none;
		cursor: url(http://www.windows93.net/c/sys/cursors/pointer.cur), pointer;

		&.focus {
			color: white;
			& > .label > span {
				background-color: rgb(29, 82, 255);
			}

			& > img {
				filter: brightness(0.5) sepia(1) hue-rotate(180deg) saturate(8);
			}
		}
	}

	.label {
		font-size: 0.4em;
		text-align: center;
	}

	.explorer {
		transition: opacity 0.3s;
		&.closeHover {
			opacity: 0.8;
		}
	}
</style>
