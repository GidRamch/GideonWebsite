import { Link } from 'gatsby';
import React from 'react';
import Nav from '../nav/nav';
import headerStyle from './header.module.scss'

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

        <Nav contrast={props.contrast}></Nav>
      </div>
    </div>
  );
}

export default Header;