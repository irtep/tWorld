import React from 'react';
import './App.css';
import Options from './components/Options';
import Town from './components/Town';

const App: React.FC = () => {
  return(
  <div>
    <div className= "atTop">
      <Options/>
    </div>
    <div className= "towns">
      <Town/>
    </div>
    <div className= "atBottom">
    </div>
  </div>);
};

export default App;
