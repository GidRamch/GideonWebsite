import React from 'react';
import navLayoutStyles from './navbar-layout.module.scss';
import Header from "../../components/header/header"
import Footer from '../../components/footer/footer';

const NavbarLayout = (props) => {

  let footer = <Footer />;

  if (props.contrast) {
    footer = '';
  }


  return (
    <div className={navLayoutStyles.container}>
      <div className={navLayoutStyles.allContent}>
        <Header contrast={props.contrast} />
        {props.children}
      </div>
      {footer}
    </div>
  );
}

export default NavbarLayout;