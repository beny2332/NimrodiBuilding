import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ component }) => {
  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");
  const floorAccess = useSelector(
    (state: { floorAccess: { floorAccess: boolean[] } }) => state.floorAccess.floorAccess
  );

  if (floorAccess[floorIndex]) {
    return <>{component}</>;
  } else {
    return <Navigate to="/forbidden" />;
  }
};

export default PrivateRoute;