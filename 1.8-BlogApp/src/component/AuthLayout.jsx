import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, navigate, authentication]); // Corrected 'authetication' to 'authentication'

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

// Add PropTypes for prop validation
Protected.propTypes = {
  children: PropTypes.node.isRequired, // children should be renderable content and is required
  authentication: PropTypes.bool, // authentication should be a boolean
};
