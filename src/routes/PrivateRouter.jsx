import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(location);

  // 1st check loading
  if (loading) {
    <div>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
      <span className="loading loading-spinner loading-xl"></span>
    </div>;
  }
  // 2nd check user
  if (user) {
    return children;
  }

  return (
    <>
      <Navigate to="/login" state={location.pathname}></Navigate>
    </>
  );
};

export default PrivateRouter;
