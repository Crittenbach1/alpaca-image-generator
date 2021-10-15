

import React, { useState } from 'react';

import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/default.png';
import bang from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/bang.png';
import curls from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/curls.png';
import elegant from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/elegant.png';
import fancy from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/fancy.png';
import quiff from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/quiff.png';
import short from '/Users/cynthiarittenbach/alpaca/src/assets/images/hair/short.png';

const Hair = (props) => {
    return (
        <div>

        {(() => {
           switch (props.hair) {
             case 'default':
             return <img src={defaultt} className="hair"/>
             case 'bang':
             return <img src={bang} className="hair"/>
             case 'curls':
             return <img src={curls} className="hair"/>
             case 'elegant':
             return <img src={elegant} className="hair"/>
             case 'fancy':
             return <img src={fancy} className="hair"/>
             case 'quiff':
             return <img src={quiff} className="hair"/>
             case 'short':
             return <img src={short} className="hair"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Hair;
