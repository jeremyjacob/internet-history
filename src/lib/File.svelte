<script lang="ts">
	import FileViewer from './FileViewer.svelte'
	import { onMount } from 'svelte'
	import Explorer from './Explorer.svelte'
	import textImg from '../assets/text.png'

	export let name = 'file'

	let open = false
	let file: HTMLDivElement

	let rects: DOMRect
	let x: number, y: number

	onMount(() => {
		rects = file.getClientRects()[0]
		x = rects.x
		y = rects.y
	})
	setInterval(() => {
		rects = file?.getClientRects()[0]
	}, 500)

	function dblclick() {
		// if (sub) $explorerPath = $explorerPath + '/' + name
		// else $explorerPath = name
		open = true
		file.blur()
	}

	function close() {
		open = false
	}
</script>

<div class="file" tabindex="0" bind:this={file} on:dblclick={dblclick}>
	<img src={textImg} alt="file" />
	<div class="label"><span>{name}</span></div>
	{#if open}
		<FileViewer currentX={rects.x} currentY={rects.y} {close} title={name}
			><slot /></FileViewer
		>
	{/if}
</div>

<style lang="scss">
	.file {
		display: flex;
		flex-direction: column;
		justify-content: center;
		user-select: none;
		align-items: center;
		width: 2em;
		cursor: url(http://www.windows93.net/c/sys/cursors/pointer.cur), pointer;

		&:focus {
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
</style>
