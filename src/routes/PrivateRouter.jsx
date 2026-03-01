import { useContext } from 'react';
import { AuthContext } from '../providers/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(location);

  // 1st check loading
  if (loading) {
    return <Spinner></Spinner>;
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
