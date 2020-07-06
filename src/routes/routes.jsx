import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import TestimonialView from "../views/TestimonialView";

// const VALIDATOR = {
//   Testimonial: <TestimonialView />,
//   // Configurator: ConfiguratorView,
// }

const Router = ({ routes }) => {
  const listRoutes = Array.isArray(routes) ? routes : [];
  return(
    <Switch>
      {listRoutes.map( route => {
        return(
          <Route
            name={route.text}
            exact
            path={`/${route.route}`}
          >
            <TestimonialView url={route.route} />
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