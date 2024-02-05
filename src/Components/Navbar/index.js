import { React, useEffect, useState } from 'react';
import './style.css';

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import useStrings from '../../common/hooks/useStrings';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../../assets/logo.svg';
import { useConfigContext } from '../../common/context/configuration';


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(null)

    const {
        language,
        setLanguage,
        theme,
        setTheme
    } = useConfigContext();


    const strings = useStrings();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuOpen && !event.target.closest('.menu-wrapper')) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header>
            <nav className="navbar" style={{ backgroundColor: menuOpen ? 'var(--bg-light-strong)' : 'var(--header-transparent)' }}>
                <Link to='/#about' className='logo'>
                    {/* <img src={logo} alt="Logo do site: texto 'mari' envolvido por símbolos simulando uma tag HTML" /> */}
                <h2>&lt; Alan &gt;</h2>
                </Link>
                <Link><h4>Frontend</h4></Link>
                <Link><h4>Mobile</h4></Link>
                <Link><h4>Backend</h4></Link>

                <div className='menu-wrapper'>
                    <div className='language-switcher'>
                        <Select
                            labelId="language"
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            autoWidth
                            label="Lang"
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            disableUnderline
                            variant="standard"
                            inputProps={{
                                classes: {
                                    icon: 'icon-select',
                                },
                            }}
                        >
                            <MenuItem value={'pt'}>PT</MenuItem>
                            <MenuItem value={'en'}>EN</MenuItem>
                        </Select>
                    </div>

                    <div
                        className={`theme-switcher ${theme}`}
                        role='button'
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        <BsFillMoonFill className='moon' />
                        <BsFillSunFill className='sun' />
                    </div>

                    <div
                        className={`hamburguer ${menuOpen !== null && (menuOpen ? 'close' : 'open')}`}
                        role='button'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                    </div>

                    <ul
                        className={menuOpen !== null ? (menuOpen ? 'opened' : 'closed') : undefined}
                        onClick={() => menuOpen && setMenuOpen(false)}
                    >

                        <Link to="/#about">
                            <li className='code autoclose'>{strings.navbar.about}</li>
                        </Link >

                        <Link to="/#experience">
                            <li className='code autoclose'>{strings.navbar.experience}</li>
                        </Link >

                        <Link to="/#skills">
                            <li className='code autoclose'>{strings.navbar.skills}</li>
                        </Link >

                        <Link to="/#projects">
                            <li className='code autoclose'>{strings.navbar.projects}</li>
                        </Link >

                        <Link to="/contact/#contact">
                            <li className='code autoclose'>{strings.navbar.contact}</li>
                        </Link >

                        <Link to="/resume">
                            <li className='code autoclose'>{strings.navbar.resume}</li>
                        </Link >
                    </ul>
                </div>
            </nav>

            {menuOpen && <div className='fade fade-menu show' />}
        </header>
    )
}