import React, { Component } from "react";
import "./GoogleAds.css";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle example_responsive_1"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5591126991059764"
        data-ad-slot={this.props.slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}

export default GoogleAds;
