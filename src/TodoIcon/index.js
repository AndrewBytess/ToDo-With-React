import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './TodoIcon.css';
import {ReactComponent as icon } from './icon.svg';
import {ReactComponent as icon2 } from './icon.svg';



const iconType = {
    "check":color =>(<icon className="Icon-svg Icon-svgCheck" fill={color}  /> ),
    "delete":color =>(<icon2 className="Icon-svg Icon-svgDelete" fill={color} />),
} ;


function TodoIcon ({type, color = 'gray', onClick} ){
  
    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconType[type](color)}

        </span>

    );
}


export {TodoIcon};