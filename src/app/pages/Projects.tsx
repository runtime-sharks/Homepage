import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import AnimatedContainer from "../components/AnimatedContainer"
import Content from "../components/Content"
import ContactUs from "../components/projects/ContactUs"
import ProjectsSection from "../components/projects/ProjectsSection"
import macProjects from "../models/macProjects"
import mobileProjects from "../models/mobileProjects"
import webProjects from "../models/webProjects"

const Projects = () => {
	let anchor: string | null = null

	if (typeof window === "object") {
		anchor = window.location.href.split("#")[1]
	}

	const disableAnimation = anchor != null && anchor !== "mobile"

	return (
		<>
			<Helmet>
				<title>Runtime Sharks: Projects</title>
			</Helmet>
			<StyledContent>
				<AnimatedContainer>
					<ContactUs />
				</AnimatedContainer>
				<Spacer />
				<ProjectsSection
					title="Mobile "
					projects={mobileProjects}
					disableAnimation={disableAnimation}
				/>
				<Spacer />
				<ProjectsSection
					title="Mac"
					projects={macProjects}
					offset={mobileProjects.length}
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
