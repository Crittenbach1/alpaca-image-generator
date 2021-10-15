
import React from 'react';

import Backgrounds from '/Users/cynthiarittenbach/alpaca/src/components/Backgrounds.js';
import Hair from '/Users/cynthiarittenbach/alpaca/src/components/Hair.js';
import Leg from '/Users/cynthiarittenbach/alpaca/src/components/Leg.js';
import Mouth from '/Users/cynthiarittenbach/alpaca/src/components/Mouth.js';
import Neck from '/Users/cynthiarittenbach/alpaca/src/components/Neck.js';
import Accessories from '/Users/cynthiarittenbach/alpaca/src/components/Accessories.js';
import Nose from '/Users/cynthiarittenbach/alpaca/src/components/Nose.js';
import Ears from '/Users/cynthiarittenbach/alpaca/src/components/Ears.js';

const BottomMenu = (props) => {
    return (
        <div className="BottomMenu">

        {(() => {
           switch (props.menu) {
             case 'Background':
             return <Backgrounds />
             case 'Ears':
             return <Ears />
             case 'Hair':
             return <Hair />
             case 'Leg':
             return <Leg />
             case 'Mouth':
             return <Mouth />
             case 'Neck':
             return <Neck />
             case 'Accessories':
             return <Accessories />
             case 'Nose':
             return <Nose />
           default:
             return null
         }
         })()}
        </div>
    )
}

export default BottomMenu;
