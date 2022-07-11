import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStatetoProps)(PrivateRoute);
