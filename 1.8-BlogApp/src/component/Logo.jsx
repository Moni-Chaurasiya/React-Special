//import React from "react";
import PropTypes from "prop-types";

function Logo({ width = "100%" }) {
  return <div style={{ width }}>{`Logo`}</div>;
}

Logo.propTypes = {
  width: PropTypes.string, // Validate that width is a string
};

export default Logo;
