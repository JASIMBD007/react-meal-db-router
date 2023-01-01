import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='no-underline bg-lime-500 p-4 text-white	'>
                <Link className='pr-8' to='/'>Home</Link>
                <Link className='pr-8' to='/restaurant'>Restaurant</Link>
                <Link to='/aboutus'>About Us</Link>

            </nav>
        </div >
    );
};

export default Header;