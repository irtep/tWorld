import React from 'react';
import './App.css';
import Options from './components/Options';
import Town from './components/Town';

const App: React.FC = () => {
  React.useEffect( () => {
    // scroll around center
    window.scrollTo(0, 140);
  }, []);
  return(
  <div>
    <div className= "atTop">
      <Options/>
    </div>
    <div className= "towns">
      <table>
        <tbody>
          <tr>
            <td><Town name= "Pupuhuhta"/></td>
            <td><Town name= "Varissuo"/></td>
            <td><Town name= "Kuokkala"/></td>
              <td><Town name= "Hervanta"/></td>
          </tr>
          <tr>
            <td><Town name= "Sörnäinen"/></td>
            <td><Town name= "Keskusta"/></td>
            <td><Town name= "Kallio"/></td>
              <td><Town name= "Puijo"/></td>
          </tr>
          <tr>
            <td><Town name= "Satama"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className= "atBottom">
    </div>
  </div>);
};

export default App;
