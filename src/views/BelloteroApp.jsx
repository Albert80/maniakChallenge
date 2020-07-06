import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux"
import { fetchRoutes } from "../redux/actions/index";
import Header from "../components/Header";
import Router from "../routes/routes";
import Layout from "./Layout";

function BelloteroApp({ getRoutes, routes }) {
  useEffect(() => {
    getRoutes();
  }, []);
  return(
    <BrowserRouter>
        <div className="App">
          <Header links={routes.items?routes.items:[]} />
          <Layout>
            <Router routes={routes.items?routes.items:[]} />
          </Layout>
        </div>
    </BrowserRouter>
  )
};

const mapStateToProps = state => ({ routes: state.routes });

const mapDispatchToProps = {
  getRoutes: fetchRoutes
};

export default connect(mapStateToProps, mapDispatchToProps)(BelloteroApp);