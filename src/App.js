//import './App.css';

//import TopMenu from './TopMenu';
//import BottomMenu from './components/BottomMenu';
import Backgrounds from './components/Backgrounds';
import Neck from './components/Neck';
import Accessories from './components/Accessories';
import Ears from './components/Ears';
import Eyes from './components/Eyes';
import Hair from './components/Hair';
import Leg from './components/Leg';
import Mouth from './components/Mouth';
import Nose from './components/Nose';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { useState } from 'react';


function App() {

   const [currentMenu, setCurrentMenu] = useState("background");
   const [background, setBackground] = useState("default");
   const [neck, setNeck] = useState("default");
   const [accessories, setAccessories] = useState("default");
   const [ears, setEars] = useState("default");
   const [eyes, setEyes] = useState("default");
   const [hair, setHair] = useState("default");
   const [leg, setLeg] = useState("default");
   const [mouth, setMouth] = useState("default");
   const [nose, setNose] = useState("default");

  return (
    <div className="App">
      <header className="App-header">

        <p>
          ALPACA GENERATOR
        </p>

        <Neck neck={neck} />
        <Backgrounds background={background} />
        <Accessories accessories={accessories} />
        <Ears ears={ears} />
        <Hair hair={hair} />
        <Leg leg={leg} />
        <Mouth mouth={mouth} />
        <Nose nose={nose} />
        <Eyes eyes={eyes} />


      </header>




      <div className="alpaca">



      </div>

      <div>
      <header>Menu 1</header>
      <button onClick={() => setCurrentMenu("background")}>background</button>
      <button onClick={() => setCurrentMenu("neck")}>neck</button>
      <button onClick={() => setCurrentMenu("accessories")}>accessories</button>
      <button onClick={() => setCurrentMenu("ears")}>ears</button>
      <button onClick={() => setCurrentMenu("hair")}>hair</button>
      <button onClick={() => setCurrentMenu("leg")}>leg</button>
      <button onClick={() => setCurrentMenu("mouth")}>mouth</button>
      <button onClick={() => setCurrentMenu("nose")}>nose</button>
      <button onClick={() => setCurrentMenu("eyes")}>eyes</button>
      </div>

      <div>
      <header>Menu 2</header>
      {(() => {
         switch (currentMenu) {
           case 'background':
             return [<button onClick={() => setBackground("blue60")}>blue60</button>, <button onClick={() => setBackground("red50")}>red50</button>]
           case 'neck':
             return [<button onClick={() => setNeck("bend-backward")}>bendbackward</button>, <button onClick={() => setNeck("bend-forward")}>bendforward</button>]
           case 'accessories':
             return [<button onClick={() => setAccessories("earings")}>earings</button>, <button onClick={() => setAccessories("flower")}>flower</button>]
           case 'ears':
             return [<button onClick={() => setEars("default")}>default</button>, <button onClick={() => setEars("tiltbackward")}>tiltbackward</button>]
           case 'hair':
             return [<button onClick={() => setHair("default")}>default</button>, <button onClick={() => setHair("bang")}>bang</button>]
           case 'leg':
             return [<button onClick={() => setLeg("default")}>default</button>, <button onClick={() => setLeg("bubbletea")}>bubbletea</button>]
           case 'mouth':
             return [<button onClick={() => setMouth("default")}>default</button>, <button onClick={() => setMouth("astonished")}>astonished</button>]
           case 'nose':
             return [<button onClick={() => setNose("default")}>default</button>]
           case 'eyes':
             return [<button onClick={() => setEyes("default")}>default</button>, <button onClick={() => setEyes("angry")}>angry</button>]
         default:
           return null
       }
       })()}
       </div>

    </div>
  );
}

export default App;
