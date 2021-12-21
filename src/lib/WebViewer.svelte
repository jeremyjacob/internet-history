<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing'
	import Menubar from './Menubar.svelte'
	import internetImg from '../assets/internet.png'

	import { explorerToFolder } from './transitions'

	export let title: string
	export let close: () => void
	export let currentX = 0
	export let currentY = 0
	export let x = currentX + 40
	export let y = currentY + 40
	export let href: string

	let tempX = 0
	let tempY = 0
	let dragging = false
	let loaded = false

	function mousedown(event: MouseEvent) {
		dragging = true
		tempX = x - event.x
		tempY = y - event.y

		document.addEventListener('mouseup', function up(event) {
			dragging = false
			document.removeEventListener('mouseup', up)
			document.removeEventListener('mousemove', move)
		})

		function move(event) {
			if (!dragging) return
			x = event.x + tempX
			y = event.y + tempY
		}
		document.addEventListener('mousemove', move)
	}
</script>

<div
	class="explorer"
	style="--x:{x}px; --y:{y}px;"
	out:explorerToFolder={{
		duration: 300,
		x: currentX - x,
		y: currentY - y,
		easing: cubicIn,
	}}
	in:explorerToFolder={{
		duration: 300,
		x: currentX - x,
		y: currentY - y,
		easing: cubicOut,
	}}
>
	<div on:mousedown={mousedown}>
		<Menubar {title} {close} icon={internetImg} />
	</div>
	<div class="content inset">
		{#if !loaded}
			Loading...
		{/if}
		<iframe
			sandbox="allow-scripts allow-pointer-lock allow-same-origin"
			{title}
			src={href}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			on:load={() => (loaded = true)}
		/>
	</div>
</div>

<style lang="scss">
	.explorer {
		width: 50em;
		height: 35em;

		-webkit-text-size-adjust: 100%;
		box-sizing: border-box;
		border: 1px solid #555;
		background: #ccc;
		position: fixed;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		color: #000;
		border-right: 1px solid gray;
		border-bottom: 1px solid gray;
		background-color: silver;
		border-top: 1px solid silver;
		border-left: 1px solid silver;
		padding-right: 2px;
		padding-left: 3px;
		padding-top: 3px;
		padding-bottom: 2px;
		box-shadow: 1px 0 #000, 0 1px #000, 1px 1px #000, inset 1px 1px #fff,
			0 0 100px 1px rgba(255, 0, 255, 0.5);
		top: var(--y);
		left: var(--x);
		z-index: 1001;
	}

	.content {
		user-select: text;
		margin-top: 0.25em;
		height: 100%;
		font-size: 0.6em;
		cursor: text;

		iframe {
			width: 100%;
			height: 100%;
		}
	}
</style>
