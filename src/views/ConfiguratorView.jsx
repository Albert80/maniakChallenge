import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPage } from "../redux/actions/index";
import Title from "../components/Title";
import Calculator from "../components/Calculator";
import "./ConfiguratorView.css";

function ConfiguratorView({ url, fetchPage, page}) {
  useEffect(() => {
    fetchPage(url);
  }, [])
  return(
    <div className="configurator-container">
      <div className="configurator-content">
        <Title>
          <div className="title-child">{page.content?page.content.calculator.title:''}</div>
        </Title>
        <p className="configurator-description">
          {page.content?page.content.calculator.description:''}
        </p>
      </div>
      <div className="configurator-calculator">
        <Calculator />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({ page: state.page });

const mapDispatchToProps = {
  fetchPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorView);