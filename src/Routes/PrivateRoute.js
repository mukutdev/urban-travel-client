import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthProvider } from '../context/AuthContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
  
    const CSSProperties = {
      display: "block",
      position : 'absolute',
      top: '50%',
      left: '50%',
    };
  
    if (loading) {
      return <HashLoader color="#ea580c" 
      cssOverride={CSSProperties}
      />
    }
    if (!user) {
      return (
        <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
      );
    }
  
    return children;
};

export default PrivateRoute;