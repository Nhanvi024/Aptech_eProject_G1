import './Header.css'


import SearchBox from './headerComponents/SearchBox';
import NavBar from './headerComponents/NavBar';
import Logo from './headerComponents/Logo';
import Menu from './headerComponents/Menu';
import LogIn from './headerComponents/LogIn';
import CartList from './headerComponents/CartList';
import AboutUs from './headerComponents/AboutUs';
import MenuSearch from './headerComponents/MenuSearch';


function Header(props) {

    return (
        <>
        <div className='headerContainer'>

            <div className='headerContainer_row1 row'>
                <Logo />
                <SearchBox />
                <div className='header-group1'>
                    <LogIn />
                    <CartList />
                </div>

            </div>
            <div className='headerContainer_row2 row'>
                <Menu />
                <NavBar />
                <AboutUs />
            </div>


        </div>
        <MenuSearch/>

        </>
    );
}

export default Header;