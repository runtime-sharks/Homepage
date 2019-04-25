import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import AnimatedContainer from "../components/containers/AnimatedContainer"
import Content from "../components/Content"
import ContactUs from "../components/projects/ContactUs"
import iOSProjects from "../models/iOSProjects"
import Project from "../models/Project"

const Icon = ({ slug, name }: Project) => (
	<Img src={`/images/projects/icons/${slug}.jpg`} alt={`${name}'s icon`} />
)

const Projects = () => (
	<AnimatedContainer>
		<StyledContent>
			<ContactUs />
			<Spacer />
			<Title>Web</Title>
			<Grid>
				{iOSProjects.map((project, index) => {
					return (
						<AnimatedContainer
							key={project.slug}
							position={index + 1}
							delay={0.125}
							sidepaded={false}
						>
							{project.link.startsWith("/") ? (
								<Link to={project.link}>
									<Icon {...project} />
								</Link>
							) : (
								<a href={project.link}>
									<Icon {...project} />
								</a>
							)}
							<IconTitle>{project.name}</IconTitle>
						</AnimatedContainer>
					)
				})}
			</Grid>
			<Title>iOS</Title>
			<Grid>
				{iOSProjects.map((project, index) => {
					return (
						<AnimatedContainer
							key={project.slug}
							position={index + 1}
							delay={0.125}
							sidepaded={false}
						>
							{project.link.startsWith("/") ? (
								<Link to={project.link}>
									<Icon {...project} />
								</Link>
							) : (
								<a href={project.link}>
									<Icon {...project} />
								</a>
							)}
							<IconTitle>{project.name}</IconTitle>
						</AnimatedContainer>
					)
				})}
			</Grid>
		</StyledContent>
	</AnimatedContainer>
)

const StyledContent = styled(Content)`
	margin-top: 1em;
	max-width: 700px;
`

const Spacer = styled.div`
	padding: 1em 0;
`

const Title = styled.h1`
	margin: 2em 0 2em;
	text-align: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-column-gap: 40px;
	grid-row-gap: 30px;
	justify-content: center;

	color: gray;
	text-align: center;
	font-weight: 500;
	font-size: 0.75em;

	a,
	a:hover {
		border-bottom: none;
	}

	@media screen and (max-width: 630px) {
		grid-template-columns: repeat(3, auto);
	}

	@media screen and (max-width: 430px) {
		grid-template-columns: repeat(2, auto);
	}

	@media screen and (max-width: 290px) {
		grid-template-columns: auto;
	}
`

const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 18px;

	box-shadow: #777777 0 0 7px 0;
`

const IconTitle = styled.span`
	display: block;
	margin: -0.2em 0 0;
`

export default Projects
