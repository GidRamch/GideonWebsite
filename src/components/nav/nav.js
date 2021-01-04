import { Link } from 'gatsby';
import React from 'react';
import navStyle from './nav.module.scss'
import github from '../../assets/github.png'
import githubWhite from '../../assets/github-white.png'
import linkdin from '../../assets/linkdin.png'
import linkdinWhite from '../../assets/linkdin-white.png'


const Nav = (props) => {

  let linkStyle = props.contrast
    ? navStyle.linkContrast
    : navStyle.link;


  return (
    <div>
      <div className={navStyle.container}>
        <Link className={linkStyle} to="/">Home</Link>
        <Link className={linkStyle} to="/projects/projects">Projects</Link>
        <Link className={linkStyle} to="/blog/blog">Blog</Link>
        <a href="https://github.com/GidSchwifty" target="_blank" className={navStyle.noPadLink}><img src={props.contrast ? githubWhite : github} height="24px" className={navStyle.iconLink} ></img></a>
        <a href="https://www.linkedin.com/in/gideon-ramcharan/" target="_blank" className={navStyle.noPadLink}><img src={props.contrast ? linkdinWhite : linkdin} height="24px" className={navStyle.iconLink}></img></a>
      </div>
    </div>

  );
}

export default Nav;