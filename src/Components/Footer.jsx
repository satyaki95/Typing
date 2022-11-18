import Select  from 'react-select';
import React from 'react';
import { themeOptions } from '../Styles/Theme';
import {useTheme} from '../Context/ThemeContext';

const Footer = () => {
  const {setTheme} = useTheme();
  const handleThemeChange = (e) => {
    setTheme(e.value);
  }
  return (
    <div className='footer'>
        <div className="footer-links">
            Link
        </div>
        <div className="theme-options">
            <Select
            options={themeOptions}
            menuPlacement="top"
            onChange={handleThemeChange}
            />
        </div>
        </div>
  )
}

export default Footer;