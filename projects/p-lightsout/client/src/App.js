import React, {Fragment} from "react";
import './App.css';

// Import Components //
import Title from './components/Title/Title';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';

//Components//

function App() {
  return <Fragment>
    <div>
      <Game/>
      <Menu/>
    </div>
    <div>
      <Title/>
    </div>
    
  </Fragment>
}

export default App;
