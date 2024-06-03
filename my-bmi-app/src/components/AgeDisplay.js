import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const AgeDisplay = () => {
  const { user } = useContext(UserContext);

  return <div>Age: {user.age}</div>;
};

export default AgeDisplay;
