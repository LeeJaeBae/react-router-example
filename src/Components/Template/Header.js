import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/MENU1'}>MENU1</Link>
            <br/>
            <Link to={'/MENU2'}>MENU2</Link>
        </div>
    );
};

export default Header;
