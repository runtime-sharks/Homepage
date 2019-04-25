import React from "react"
import styled from "styled-components"
import Project from "../../../pages/Project"
import AnimatedContainer from "../../containers/AnimatedContainer"

const DNDMe = (props: any) => (
	<StyledProject {...props}>
		<AnimatedContainer delay={AnimatedContainer.baseDelay}>
			Ever wanted to get more focused work done?
			<br />
			Do you turn Do Not Disturb on, but forget to turn it off?
		</AnimatedContainer>
		<br />
		<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.25}>
			Look no further!
			<br />
			<br />
			Activate Do Not Disturb for a few hours and work{" "}
			<strong>distraction free!</strong>
		</AnimatedContainer>
		<AnimatedContainer delay={AnimatedContainer.baseDelay + 0.5}>
			<br />
			<Disclaimer>
				*Due to system limitations, DND Me does not work if Do Not Disturb is
				scheduled in System Preferences -> Notifications.
			</Disclaimer>
		</AnimatedContainer>
	</StyledProject>
)

const StyledProject = styled(Project)`
	img {
		max-width: 400px;
		max-height: 400px;
	}
`

const Disclaimer = styled.p`
	font-size: 0.8em;
	color: #bbb;
	font-style: italic;
`

export default DNDMe
