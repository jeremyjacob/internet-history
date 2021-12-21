<script lang="ts">
	import xImg from '../assets/x.png'

	export let close = () => {}
	export let title: string
	export let icon: string
	export let closeHover = false
</script>

<div class="menubar">
	<span class="pil">
		<img src={icon} alt={icon} />
		<span class="label">{title}</span>
	</span>
	<span style="flex: 1;" />
	<button
		class="close"
		on:click={close}
		on:mouseenter={() => (closeHover = true)}
		on:mouseleave={() => (closeHover = false)}
		><img src={xImg} alt="" /></button
	>
</div>

<style lang="scss">
	.menubar {
		background: linear-gradient(
			135deg,
			rgb(255, 17, 255) 0px,
			rgb(0, 255, 255) 100%
		);
		cursor: move;
		height: 1.3rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 0.2em;
		padding-right: 0.4em;

		.pil {
			display: flex;
			flex-direction: row;
			align-items: center;

			img {
				height: 1em;
			}

			.label {
				color: white;
				font-size: 0.4em;
				margin-left: 0.6em;
			}
		}

		button.close {
			user-select: none;
			box-sizing: border-box;
			margin: 0;

			text-transform: none;
			-webkit-appearance: button;
			cursor: url(http://www.windows93.net/c/sys/cursors/pointer.cur),
				pointer;
			border-radius: 0px;
			font-family: 'PX Icons';
			font-size: 8px;
			width: 1.7em;
			height: 1.7em;
			transform: scale(1.1);
			/* margin-left: 3px; */
			/* margin-top: -0.05em; */
			text-align: center;
			position: relative;
			/* padding: 1px 6px; */
			overflow: hidden;
			color: #000;
			border-top: 1px solid #fff;
			border-left: 1px solid #fff;
			border-right: 1px solid gray;
			border-bottom: 1px solid gray;
			box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000,
				1px 1px #000;
			background-color: silver;
			display: grid;
			place-items: center;

			img {
				height: 1.1em;
				image-rendering: -webkit-optimize-contrast;
				image-rendering: pixelated;
				margin-left: -0.5em;
			}

			&:hover {
				box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000,
					1px 1px #000;
			}
		}
	}
</style>
