import React, { useState } from 'react';

import earings from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/earings.png';
import flower from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/flower.png';

import glasses from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/glasses.png';
import headphone from '/Users/cynthiarittenbach/alpaca/src/assets/images/accessories/headphone.png';

const Accessories = (props) => {
    return (
        <div>

        {(() => {
           switch (props.accessories) {
             case 'earings':
             return <img src={earings} className="accessories"/>
             case 'flower':
             return <img src={flower} className="accessories"/>
             case 'glasses':
             return <img src={glasses} className="accessories"/>
             case 'headphone':
             return <img src={headphone} className="accessories"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Accessories;
