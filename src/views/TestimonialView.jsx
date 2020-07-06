import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPage } from "../redux/actions/index";
import Title from "../components/Title";
import Slider from "../components/Slider";

function TestimonialView({ url, fetchPage, page }) {
  useEffect(() => {
    fetchPage(url);
  }, []);
  return(
    <div className="testimonial-container">
      <Title>
        {page.content?page.content.slider.title:'Title'}
      </Title>
      <Slider reviews={page.content?page.content.slider.reviews:[]}/>
    </div>
  )
};

const mapStateToProps = state => ({ page: state.page });

const mapDispatchToProps = {
  fetchPage
};

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialView);