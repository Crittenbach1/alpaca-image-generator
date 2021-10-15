
import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/default.png';
import astonished from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/astonished.png';
import eating from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/eating.png';
import laugh from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/laugh.png';
import tongue from '/Users/cynthiarittenbach/alpaca/src/assets/images/mouth/tongue.png';


const Mouth = (props) => {
    return (
        <div>

        {(() => {
           switch (props.mouth) {
             case 'default':
             return <img src={defaultt} className="mouth"/>
             case 'astonished':
             return <img src={astonished} className="mouth"/>
             case 'eating':
             return <img src={eating} className="mouth"/>
             case 'laugh':
             return <img src={laugh} className="mouth"/>
             case 'tongue':
             return <img src={tongue} className="mouth"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Mouth;
