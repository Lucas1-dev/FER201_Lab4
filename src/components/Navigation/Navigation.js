import React from 'react'
import '../Navigation/Navigation.css'
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import NetflixLogo from '../../assets/logo1.png'
import { TfiSearch } from 'react-icons/tfi';
import { ReactComponent as Sun } from "../Theme/Sun.svg";
import { ReactComponent as Moon } from "../Theme/Moon.svg";


function Navbar1() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
        setDarkMode();

    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()

    }
    return (
        <Navbar
            alignLinks="right"
            brand={
                <Link to="/">
            <img className='logo' src={NetflixLogo} alt='/' />
            </Link>
        }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <div className="nav__container">
                <form>
                    <div className="nav__search">
                        <TfiSearch className="icon__search" />
                        <input type='text' placeholder='Input title, genres, people'></input>
                    </div>
                </form>
            </div>

            <ul className='ul'>
                <li><Link to='/' ><Icon left>home</Icon>Home</Link></li>
                <li to='/about'> <Link to='/about' > <Icon left>info_outline</Icon>About</Link></li>
                <li to='/news'> <Link to='/news' > <Icon left>dvr</Icon>News</Link></li>
                <li to='/contact'><Link to='/contact'><Icon left>contacts</Icon>Contact</Link></li>
                <li>
                    <div className='dark_mode'>
                        <input
                            className='dark_mode_input'
                            type='checkbox'
                            id='darkmode-toggle'
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === "dark" }
                        />
                        <label className='dark_mode_label' for='darkmode-toggle'>
                            <Sun />
                            <Moon />
                        </label>
                    </div>
                </li>
            </ul>
        </Navbar>



    )
}

export default Navbar1;

