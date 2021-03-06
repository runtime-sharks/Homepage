import React, { useContext } from "react"
import styled from "styled-components"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import ContactUs from "../components/projects/ContactUs"
import ProjectsSection from "../components/projects/ProjectsSection"
import macProjects from "../models/macProjects"
import mobileProjects from "../models/mobileProjects"
import webProjects from "../models/webProjects"
import Helmet from "../utils/Helmet"
import LocationContext from "../utils/LocationContext"

const Projects = () => {
	let location = useContext(LocationContext)

	if (location == null) {
		location = window.location.href
	}

	const sectionAnchor = location.split("#")[1]
	const disableAnimation = sectionAnchor != null && sectionAnchor !== "mobile"

	return (
		<>
			<Helmet title="Runtime Sharks: Projects" />
			<StyledContent>
				<ProjectsSection
					title="Mac"
					projects={macProjects}
					disableAnimation={disableAnimation}
				/>
				<Spacer />
				<ProjectsSection
					title="Mobile"
					projects={mobileProjects}
					offset={macProjects.length}
					disableAnimation={disableAnimation}
				/>
				<Spacer />
				<ProjectsSection
					title="Web"
					projects={webProjects}
					offset={mobileProjects.length + macProjects.length}
					disableAnimation={disableAnimation}
				/>
			</StyledContent>
			<Spacer />
			<Spacer />
			<AnimatedContainer
				position={mobileProjects.length}
				disableAnimations={disableAnimation}
			>
				<ContactUs />
			</AnimatedContainer>
		</>
	)
}

const StyledContent = styled(Content)`
	margin-top: 1em;
	max-width: 700px;
`

const Spacer = styled.div`
	padding: 1em 0;
`

export default Projects
