import React, { useEffect, useState } from "react"
import {
	Redirect,
	Route,
	RouteComponentProps,
	Switch,
	withRouter,
} from "react-router-dom"
import Consulting from "../pages/Consulting"
import Home from "../pages/Home"
import Mentoring from "../pages/Mentoring"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Project from "../pages/Project"
import Projects from "../pages/Projects"
import InitialAnimationContext from "../utils/InitialAnimationContext"

const Router = (props: RouteComponentProps) => {
	const [didAnimate, setDidAnimate] = useState(false)

	useEffect(() => {
		props.history.listen(() => {
			// Don't animate the text after the first load, it gets annoying.
			setDidAnimate(true)
		})
	}, [])

	return (
		<InitialAnimationContext.Provider value={didAnimate}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/projects" component={Projects} />
				<Route path="/projects/:project" component={Project} />
				<Route path="/privacy/:project" component={PrivacyPolicy} />
				<Route
					path="/terms-and-conditions/:project"
					component={PrivacyPolicy}
				/>
				<Route exact path="/mentoring" component={Mentoring} />
				<Route exact path="/consulting" component={Consulting} />
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</InitialAnimationContext.Provider>
	)
}

export default withRouter(Router)
