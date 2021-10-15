
import '/Users/cynthiarittenbach/alpaca/src/App.css';


import bendbackward from '/Users/cynthiarittenbach/alpaca/src/assets/images/neck/bend-backward.png';
import bendforward from '/Users/cynthiarittenbach/alpaca/src/assets/images/neck/bend-forward.png';
import defaultt from '/Users/cynthiarittenbach/alpaca/src/assets/images/neck/default.png';
import thick from '/Users/cynthiarittenbach/alpaca/src/assets/images/neck/thick.png';


import React from 'react';

const Neck = (props) => {
    return (
        <div>

              {(() => {
                 switch (props.neck) {
                   case 'bend-backward':
                   return <img src={bendbackward} className="neck" />
                   case 'bend-forward':
                   return <img src={bendforward} className="neck" />
                   case 'default':
                   return <img src={defaultt} className="neck" />
                   case 'thick':
                   return <img src={thick} className="neck" />
                 default:
                   return null
               }
               })()}
        </div>
    )
}

export default Neck;
