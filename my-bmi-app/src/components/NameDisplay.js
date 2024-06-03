import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const NameDisplay = () => {
  const { user } = useContext(UserContext);

  return <div>Name: {user.name}</div>;
};

export default NameDisplay;

