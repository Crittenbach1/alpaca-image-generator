
import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/default.png';
import astonished from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/astonished.png';


const Mouth = (props) => {
    return (
        <div>

        {(() => {
           switch (props.mouth) {
             case 'default':
             return <img src={defaultt} className="mouth"/>
             case 'astonished':
             return <img src={astonished} className="mouth"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Mouth;
