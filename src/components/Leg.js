
import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/default.png';
import bubbletea from '/Users/cynthiarittenbach/alpaca/src/assets/images/leg/bubble-tea.png';


const Leg = (props) => {
    return (
        <div>

        {(() => {
           switch (props.leg) {
             case 'default':
             return <img src={defaultt} className="leg"/>
             case 'bubbletea':
             return <img src={bubbletea} className="leg"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Leg;
