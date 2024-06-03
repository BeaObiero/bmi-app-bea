import React from 'react';
import { UserProvider } from './UserContext';
import NameDisplay from './components/NameDisplay';
import AgeDisplay from './components/AgeDisplay';
import BmiDisplay from './components/BmiDisplay';
import UserForm from './components/UserForm';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>User Information</h1>
        <UserForm />
        <div className="user-info">
          <NameDisplay />
          <AgeDisplay />
          <BmiDisplay />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
