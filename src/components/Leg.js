
import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/default.png';
import bubbletea from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/bubble-tea.png';
import cookie from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/cookie.png';
import gameconsole from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/game-console.png';
import tiltbackward from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/tilt-backward.png';
import tiltforward from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/tilt-forward.png';

const Leg = (props) => {
    return (
        <div>

        {(() => {
           switch (props.leg) {
             case 'default':
             return <img src={defaultt} className="leg"/>
             case 'bubbletea':
             return <img src={bubbletea} className="leg"/>
             case 'cookie':
             return <img src={cookie} className="leg"/>
             case 'gameconsole':
             return <img src={gameconsole} className="leg"/>
             case 'tiltbackward':
             return <img src={tiltbackward} className="leg"/>
             case 'tiltforward':
             return <img src={tiltforward} className="leg"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Leg;
