import React from 'react';
// import {Link} from "react-router-dom";
import {useRouter} from "../../Routes";

const Header = () => {
    return (
        <div>
            {useRouter()}
        </div>
    );
};

export default Header;
