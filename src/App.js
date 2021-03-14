import './App.css';
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'
               render={ () => <Profile /> } />
        <Route path='/dialogs'
               render={ () => <DialogsContainer /> } />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
        <Route path='/settings' render={ () => <Settings /> } />
      </div>
    </div>
  );
}

export default App;
