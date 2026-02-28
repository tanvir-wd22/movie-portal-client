import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loading) {
    <div>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
      <span className="loading loading-spinner loading-xl"></span>
    </div>;
  }
  return (
    <>
      <Navigate to="/login"></Navigate>
    </>
  );
};

export default PrivateRouter;
