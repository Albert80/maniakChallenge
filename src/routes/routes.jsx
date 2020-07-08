import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import TestimonialView from "../views/TestimonialView";
import ConfiguratorView from "../views/ConfiguratorView";

const VALIDATOR = {
  Testimonial: (url) => {return <TestimonialView url={url} />},
  Configurator: (url) => {return <ConfiguratorView url={url} />},
  Stories: (url) => {return <TestimonialView url={url} />},
  About: (url) => {return <TestimonialView url={url} />},
}

const Router = ({ routes }) => {
  const listRoutes = Array.isArray(routes) ? routes : [];
  return(
    <Switch>
      {listRoutes.map( route => {
        return(
          <Route
            key={`${route.text}-${route.route}`}
            name={route.text}
            exact
            path={`/${route.route}`}
          >
            {VALIDATOR[`${route.text}`](route.route)}
          </Route>
        )
      })}
    </Switch>
  )
};

Router.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Router;