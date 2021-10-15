import React, { useState } from 'react';

import earings from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/earings.png';
import flower from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/flower.png';


const Accessories = (props) => {
    return (
        <div>

        {(() => {
           switch (props.accessories) {
             case 'earings':
             return <img src={earings} className="accessories"/>
             case 'flower':
             return <img src={flower} className="accessories"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Accessories;
