import { Link } from 'gatsby';
import React from 'react';
import Nav from '../nav/nav';
import headerStyle from './header.module.scss'
import navStyle from '../nav/nav.module.scss'
import hamburger from '../../assets/hamburger.png'
import hamburgerWhite from '../../assets/hamburger-white.png'


const Header = (props) => {

  let pageTitleStyle = props.contrast
    ? headerStyle.pageTitleContrast
    : headerStyle.pageTitle;

  let containerStyle = props.contrast
    ? headerStyle.containerContrast
    : headerStyle.container;

  return (
    <div className={containerStyle}>
      <div className={headerStyle.flexContainer}>
        <Link className={pageTitleStyle} to="/">
          Gideon Ramcharan
        </Link>

        <Nav className={headerStyle.navBar} contrast={props.contrast}></Nav>

        <div className={headerStyle.hamburger} onClick={props.drawerClickHander}>
          <img src={props.contrast ? hamburgerWhite : hamburger} height="24px" className={navStyle.iconLink} ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;