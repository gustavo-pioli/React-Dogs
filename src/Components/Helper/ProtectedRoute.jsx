import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let { login } = React.useContext(UserContext);
  login = true; //RETIRAR
  console.log(login); //RETIRAR
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
