import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./header.css";
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='text'>
            <p>Stop manually calculating the transmission parameter of your electrical system. Use our online tool for quick and accurate results! </p>
        </div>
        <div className='btn'>
            <button><a href="#parameter">Let's Calculate</a></button>
        </div>
    </div>
  )
}

export default Header;