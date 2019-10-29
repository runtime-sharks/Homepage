import React, { useEffect, useState } from "react"
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom"
import LoanCalculator from "../components/projects/LoanCalculator"
import Consulting from "../pages/Consulting"
import Mentoring from "../pages/Mentoring"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Projects from "../pages/Projects"
import Helmet from "../utils/Helmet"
import InitialAnimationContext from "../utils/InitialAnimationContext"
import ProjectRouter from "./ProjectRouter"

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
      <Helmet />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/projects/loan-calculator" component={LoanCalculator} />
        <Route path="/projects" component={ProjectRouter} />
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
