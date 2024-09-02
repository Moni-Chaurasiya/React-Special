import React, { useId } from "react";
import PropTypes from "prop-types";

// Define the SelectForward component
function SelectForward({ options, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-2 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

// Apply propTypes to the inner component
SelectForward.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // options should be an array of strings and is required
  label: PropTypes.string, // label is optional but should be a string if provided
  className: PropTypes.string, // className is optional but should be a string if provided
};

// Create the Select component with forwardRef
const Select = React.forwardRef(SelectForward);

export default Select;
