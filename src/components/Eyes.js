

import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/default.png';
import angry from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/angry.png';


const Eyes = (props) => {
    return (
        <div>

        {(() => {
           switch (props.eyes) {
             case 'default':
             return <img src={defaultt} className="eyes"/>
             case 'angry':
             return <img src={angry} className="eyes"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Eyes;
