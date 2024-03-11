import React from "react";
import './App.css';

// Import Components //
import Title from './components/Title/Title';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';

//Components//

const App = () => 
    <div className="App">
      <Game size={6}/>
      <Menu/>
      <Title/>
    </div>

    

export default App;
