
import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/ears/default.png';
import tiltbackward from '/Users/cynthiarittenbach/alpaca/src/assets/images/ears/tilt-backward.png';


const Ears = (props) => {
    return (
        <div>

        {(() => {
           switch (props.ears) {
             case 'default':
             return <img src={defaultt} className="ears"/>
             case 'tiltbackward':
             return <img src={tiltbackward} className="ears"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Ears;
