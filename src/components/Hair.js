

import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/default.png';
import bang from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/bang.png';


const Hair = (props) => {
    return (
        <div>

        {(() => {
           switch (props.hair) {
             case 'default':
             return <img src={defaultt} className="hair"/>
             case 'bang':
             return <img src={bang} className="hair"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Hair;
