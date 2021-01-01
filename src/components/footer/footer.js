import React from 'react';
import footerStyles from './footer.module.scss';


const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div  className={footerStyles.footerText}>
        Gideon Ramcharan &copy; 2021
      </div>
    </div>
  );
}

export default Footer;