import React from "react"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import Apps from "../components/home/Apps"
import Experience from "../components/home/Experience"
import Teaching from "../components/home/Teaching"

const Home = () => (
	<AnimatedContainer>
		<Content>
			<Apps />
			<Experience />
			<Teaching />
		</Content>
		<div className="centered side-padded">
			Please check out the other sections of our site, <br />
			or <a href="mailto:contact@runtimesharks.com">get in touch</a>; we'd love
			to talk.
		</div>
	</AnimatedContainer>
)

export default Home
