//import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type} // ensure the button type is applied
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Adding PropTypes for prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable content and is required
  type: PropTypes.oneOf(["button", "submit", "reset"]), // type should be one of these specific strings
  bgColor: PropTypes.string, // bgColor should be a string
  textColor: PropTypes.string, // textColor should be a string
  className: PropTypes.string, // className should be a string
};

export default Button;
