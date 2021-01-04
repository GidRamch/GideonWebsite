import React, { useState } from 'react';
import navLayoutStyles from './navbar-layout.module.scss';
import Header from "../../components/header/header"
import Footer from '../../components/footer/footer';
import Sidenav from '../../components/sidenav/sidenav';
import Backdrop from '../../components/backdrop/backdrop';

const NavbarLayout = (props) => {

  let footer = <Footer />;

  if (props.contrast) {
    footer = '';
  }

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };


  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop drawerClickHander={drawerToggleClickHandler}></Backdrop>;
  }

  return (
    <div className={navLayoutStyles.container}>
      <div className={navLayoutStyles.allContent}>
        <Header contrast={props.contrast} drawerClickHander={drawerToggleClickHandler} />
        <Sidenav show={sideDrawerOpen}></Sidenav>
        {backdrop}
        
        {props.children}
      </div>
      {footer}
    </div>
  );
}

export default NavbarLayout;