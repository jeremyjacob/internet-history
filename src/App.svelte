<script lang="ts">
	import Image from './lib/Image.svelte'
	import Anchor from './lib/Anchor.svelte'
	import File from './lib/File.svelte'
	import Folder from './lib/Folder.svelte'
	import Taskbar from './lib/Taskbar.svelte'

	import whisperImg from './assets/1969.jpg'
	import computerImg from './assets/computer1.jpg'
</script>

<main>
	<Taskbar />
	<div class="desktop">
		<Folder name="Test">
			<Folder name="sub" />
			<File name="Testfile">This is an example of a test file</File>
		</Folder>
		<Folder name="Websites!">
			<Anchor
				href="https://web.archive.org/web/
				<br /><br />19961220154903fw_/http://www.aol.com/main.html">AOL</Anchor
			>
			<Anchor
				href="https://web.archive.org/web/
				<br /><br />19990508070818fw_/http://www3.yahoo.com/">Yahoo!</Anchor
			>
			<Anchor
				href="https://web.archive.org/web/20010630223136fw_/http://www.imdb.com/"
				>IMDB</Anchor
			>
			<Anchor
				href="https://web.archive.org/web/200010
				<br /><br />19235504fw_/http://ww1.foodnetwork.com/webpages/foodnetwork/default.html"
				>Food N..</Anchor
			>
			<Anchor
				href="https://web.archive.org/web/20000815205911fw_/http://www.deviantart.com/"
				>deviantART</Anchor
			>
		</Folder>
		<File name="ARPANET.txt">This is an example of a test file</File>
		<File name="Timeline.txt"
			>Attempts in the past have been made to link scholarly articles to
			one another (1728) In the early
			<br /><br />1900s ideas for a central repository of the world’s
			knowledge are proposed
			<br /><br />1936: H.G. Wells predicts the World Brain. The idea that
			the whole human brain and knowledge would be publicly accessible to
			every individual.
			<br /><br />1945: Vannevar Bush publishes “As We May Think.” He
			envisions a memory extension device that serves as a large personal
			repository of information that could be instantly retrieved via
			associative links. In the early
			<br /><br />1960’s J.C.R. Licklider proposes “A network of
			[computers], connected to one another by wide-band communication
			lines [which provide] the functions of present-day libraries
			together with anticipated advances in information storage and
			retrieval and [other] symbiotic functions.” Leonard Kleinrock
			published "Information Flow in Large Communication Nets"; in
			December
			<br /><br />1962, Kleinrock submitted his MIT Ph.D. dissertation,
			proposing a mathematical theory for what were later called
			packet-switched networks.
			<br /><br />1967: Ted Nelson creates demos of a Hypertext markup
			language allowing semantic definition of organized sites
			<br /><br />1968 Packet switching networks are developed at the UK’s
			National Physical Laboratory
			<br /><br />1969: The first message is sent over ARPANET
			<br /><br />1971: Michael Hart launches Project Gutenberg with the
			goal of making copyright-free works electronically available
			<br /><br />1983: 10% of U.S. adults have a home computer and, of
			those, 14% use a modem to send and receive information. The
			resulting estimate was that 1.4% of U.S. adults used the Internet in
			<br /><br />1985 In the sitcom Benson, the protagonists go to the
			bomb cellar to try to prepare for a nuclear attack. A scene where
			the ARPANET is accessed is the first incidence of a popular TV show
			directly referencing the network.

			<br /><br />1987: Apple releases Hypercard, a Hypertext application
			distributed with Apple’s Macintosh computers.
			<br /><br />1990: Archie, the first Internet search engine, is
			developed by Alan Emtage at McGill University.

			<br /><br />1991: Tim Berners-Lee publishes the code for the World
			Wide Web on the Internet. July
			<br /><br />1992 Tim Berners-Lee posts the first photo uploaded to
			the Web April 30,
			<br /><br />1993 CERN declares the Web protocol and code free to all
			users.
			<br /><br />1994: World Wide Web Consortium established
			<br /><br />1994: HotWired is the first web site to sell banner ads
			in large quantities to a wide range of major corporate advertisers.

			<br /><br />1995: 14% of U.S. adults are now online, most using
			dial-up modem connections
			<br /><br />1996: Brewster Kahle establishes the Internet Archives,
			to preserve and provide access to nearly every site on the Internet.
			Still around today
			<br /><br />1996: Nokia releases the Nokia 9000 Communicator, the
			first cellphone with a web browser.
			<br /><br />1996: Ethan Zuckerman creates the first pop-up ad. In
			2014, he apologized for “The Internet’s Original Sin.” First
			instance of targeted ads on the internet
			<br /><br />1997 The term "weblog" is coined by Jorn Barger. This is
			later jokingly broken into “we blog”. Hence blog today.
			<br /><br />1998: Google has index 26 million Web pages
			<br /><br />1998: “Oh, so they have the Internet on computers
			now?”—Homer Simpson 2000: Google’s index of the Web reaches the
			one-billion mark. 2000: 78% of internet users who download music
			don’t think it’s stealing to save music files to their computer hard
			drives.
		</File>
		<Image src={whisperImg} name="First Whisper (1969).jpg" />
		<Image src={computerImg} name="HP IF 800.jpg" />
		<Image
			src="https://i.pcmag.com/imagery/encyclopedia-terms/quadra-_macquad.fit_lim.size_800x.gif"
			name="Apple Quadra.gif"
		/>
		<Anchor
			href="https://www.youtube.com/embed/s1_yx_Eg9v4?autoplay=1&controls=1&rel=0"
			>Surfin' on the Internet (Video)</Anchor
		>

		<Folder name="Essay">
			<File name="Context.txt"
				>The human race has always had a shared desire to connect with
				one another. So has the military. This is what led to the
				inception of ARPANET. In the early 1960’s a select few
				researchers began working on packet switching theory – the basis
				of the modern internet. A few years later many of them worked
				with DARPA to create a plan for a system that can be used to
				connect computers called ARPANET. As ARPANET saw more
				development, more and more universities would connect to the
				network as nodes. Nodes are simply computers that can send and
				receive data on a network. For a few years ARPANET remained a
				closed network of scholars and defence researchers. This did not
				stay the case forever, though. The defence departments forks
				MILNET for their own use as ARPANET continues to evolve and
				broaden in use. Fast forward to 1983 and the TCP/IP protocol is
				introduced. Many call TCP/IP the backbone of the internet. And
				they would have a strong case. It is used today to facilitate
				the transfer of every piece of web traffic that makes its way
				through the internet. The introduction of this technology marked
				the beginning of widespread internet usage for the everyday
				civilian.</File
			>
			<File name="Social.txt"
				>Social For as long as we have had recorded history, there has
				been a desire to compile that information into one “master”
				record. In 1936 H.G. Wells predicts the World Brain. The idea
				that the whole human brain and knowledge would be publicly
				accessible to every individual. Nine years later Vannevar Bush
				publishes “As We May Think.” He envisions a memory extension
				device that serves as a large personal repository of information
				that could be retrieved via associative links. In essence, the
				internet is a manifestation of these ideas. By 1983 a whole
				tenth of Americans had a personal computer. 14% of those used a
				dial-up modem to access the internet. Meaning 1.4% of the
				population used the internet. This figure would be ten times as
				much just a decade later. The early internet made appearances on
				TV as well. In a 1985 episode of the sitcom Benson, the
				protagonists go to the bomb cellar to try to prepare for a
				nuclear attack. A scene where the ARPANET is accessed is the
				first incidence of a popular TV show directly referencing the
				network. Later on in 1998 Homer Simpson is quoted saying “Oh, so
				they have the Internet on computers now?” Despite its birth
				behind closed doors, the internet has since adopted a culture of
				openness. In 1991 the source code behind the World Wide Web was
				published for all by Tim Berners-Lee. Much open software that
				was created in the late 1900’s is still used today. Some
				examples include Perl (1987), GCC (1987), Linux (1991), Python
				(1991), GIMP (1995), Ruby (1995), and Apache (1996).
			</File>
			<File name="Economic.txt">
				The early internet was not thought of as an economic opportunity
				but instead an opportunity to learn and connect. That didn’t
				last very long. In the late 1990s marketing agencies began to
				recognize internet ads as a viable form of advertising. Ads
				began popping up on websites as a primitive creator economy.
				Internet capitalism mushroomed from there. The first online
				payment was transacted in 1994. Companies saw the potential here
				and began to market services over the internet. The infamous
				pop-up ad was first spotted in 1997. The creator, Ethan
				Zuckerman later apologized for “The Internet’s Original Sin” in
				2014. This, unfortunately, was not the only sin of the internet.
				Early experiments with targeted ads were successful, leading to
				the advanced ad targeting systems employed by large corporations
				today. But economic development on the internet is not all bad.
				The aforementioned creator economy continued to develop, giving
				more freedom to individual content creators. Individual artists
				could now sell their works directly without brokers. Many large
				companies that thrived before the internet failed to adapt. Sony
				and other large music companies, for example, were taken by
				storm with decentralized music sharing software like napster. By
				the turn of the century over 78% of internet users didn’t
				believe saving music to their hard drive was stealing. Instead
				of working with the internet like streaming services do today,
				Sony worked against the internet punishing users and even going
				as far to install a type of virus called a rootkit that ensured
				pirated music could not be played. On the other hand, companies
				whose success depended on the internet rose with it. In 1998,
				Google had indexed 28 million web pages. Just two years later
				over a billion pages had been indexed.
			</File>
			<File name="Political.txt"
				><span style="color: red"
					>FAT32 FS ERROR 004: File cannot be found!</span
				></File
			>
		</Folder>
		<Anchor
			href="https://web.archive.org/web/
				<br /><br />19990508070818fw_/http://www3.yahoo.com/">Yahoo!</Anchor
		>
		<Folder name="MS-DOS">
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Ms-dosdir.png"
				name="Terminal.png"
			/>
			<File name="MS DOS.txt">
				MS-DOS, in full Microsoft Disk Operating System, the dominant
				operating system for the personal computer (PC) throughout the
				1980s and into the 1990s. The acquisition and marketing of
				MS-DOS were pivotal in the Microsoft Corporation’s transition to
				software industry giant. Users interacted with MS-DOS through a
				text-only terminal. Similar to computer terminal applicated used
				today for low-level access to operating systems. <a
					href="https://www.britannica.com/technology/MS-DOS"
					target="_blank">Source</a
				>
			</File>
		</Folder>
		<Folder name="BBS">
			<Image
				src="https://cdn.theatlantic.com/thumbor/2w4ZOnFxZ7q2Y6ADc_U-laaMTa4=/630x298/filters:format(png)/media/img/posts/2016/11/The_Keep_BBS_menu/original.png"
				name="Castle BBS"
			/>
			<File name="Bulletin Board Systems.txt"
				>A bulletin board system (BBS) is a computer or an application
				dedicated to the sharing or exchange of messages or other files
				on a network. Originally an electronic version of the type of
				bulletin board found on the wall in many kitchens and work
				places, the BBS was used to post simple messages between users.
				The BBS became the primary kind of online community through the
				1980s and early 1990s, before the World Wide Web arrived. A BBS
				may be accessible from a dial-up modem, Telnet, or the Internet.
				Because it originated before the graphical user interface (GUI)
				became prevalent, the BBS interface was text-based. <a
					href="https://whatis.techtarget.com/definition/bulletin-board-system-BBS"
					target="_blank">Source</a
				>
				></File
			>
		</Folder>
		<File name="TCP/IP.txt"
			>TCP/IP became the standard Internet communications protocol that
			allow digital computer to communicate over long distances. The
			Internet is a packet-switched network, in which information is
			broken down into small packets, sent individually over many
			different routes at the same time, and then reassembled at the
			receiving end. TCP is the component that collects and reassembles
			the packets of data, while IP is responsible for making sure the
			packets are sent to the right destination. TCP/IP was developed in
			the 1970s and adopted as the protocol standard for ARPANET (the
			predecessor to the Internet) in 1983. <a
				href="https://scos.training/history-of-tcp-ip/s"
				target="_blank">Source</a
			>
		</File>
		<Image
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Al_Gore%2C_Vice_President_of_the_United_States%2C_official_portrait_1994.jpg/800px-Al_Gore%2C_Vice_President_of_the_United_States%2C_official_portrait_1994.jpg"
			name="Internet Inventor"
		/>
	</div>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		margin: 0;
		height: 100vh;
		cursor: url(http://www.windows93.net/c/sys/cursors/default.cur), default;
		background: linear-gradient(
			135deg,
			rgba(255, 96, 253, 1) 0%,
			rgba(0, 230, 255, 1) 100%
		);
	}

	.desktop {
		padding: 2em;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		width: 10em;
		gap: 2.4em;
	}
</style>
