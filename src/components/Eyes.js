

import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/default.png';
import angry from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/angry.png';
import naughty from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/naughty.png';
import panda from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/panda.png';
import smart from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/smart.png';
import star from '/Users/cynthiarittenbach/alpaca/src/assets/images/eyes/star.png';


const Eyes = (props) => {
    return (
        <div>

        {(() => {
           switch (props.eyes) {
             case 'default':
             return <img src={defaultt} className="eyes"/>
             case 'angry':
             return <img src={angry} className="eyes"/>
             case 'naughty':
             return <img src={naughty} className="eyes"/>
             case 'panda':
             return <img src={panda} className="eyes"/>
             case 'smart':
             return <img src={smart} className="eyes"/>
             case 'star':
             return <img src={star} className="eyes"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Eyes;
