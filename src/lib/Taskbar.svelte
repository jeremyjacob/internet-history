<script lang="ts">
	import startImg from '../assets/start.png'
	let time = ''
	let date = new Date()

	setInterval(() => (date = new Date()), 1000)
</script>

<footer>
	<div class="start">
		<img src={startImg} alt="" />
		<span>Start</span>
	</div>
	<span style="flex-grow: 1;" />
	<div class="time">
		{date.getHours().toString().padStart(2, '0')}:{date
			.getMinutes()
			.toString()
			.padStart(2, '0')}
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		height: 2.3em;
		position: absolute;
		bottom: 0;
		background-color: rgb(192, 192, 192);
		display: flex;
		align-items: center;

		.start {
			width: 4em;
			height: 1.5em;
			color: #000;
			border-top: 1px solid #fff;
			border-left: 1px solid #fff;
			border-right: 1px solid gray;
			border-bottom: 1px solid gray;
			box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000,
				1px 1px #000;
			background-color: silver;
			margin-left: 0.4em;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;

			span {
				text-shadow: rgb(0, 0, 0) -1px 0px 0px;
				font-size: 0.6em;
				margin-left: 0.5em;
			}
		}

		.time {
			background-color: rgb(184, 184, 184);
			border-left-color: rgb(128, 128, 128);
			border-left-style: solid;
			border-left-width: 1px;
			border-top-color: rgb(128, 128, 128);
			border-top-style: solid;
			border-top-width: 1px;
			box-shadow: rgb(255, 255, 255) 1px 0px 0px 0px,
				rgb(255, 255, 255) 0px 1px 0px 0px,
				rgb(255, 255, 255) 1px 1px 0px 0px;
			font-size: 0.5em;
			padding: 0.4em 0.6em;
			margin-right: 1em;
		}
	}
</style>
