import { Link } from 'gatsby';
import React from 'react';
import sidenavStyles from './sidenav.module.scss';
import githubWhite from '../../assets/github-white.png'
import linkdinWhite from '../../assets/linkdin-white.png'

const Sidenav = (props) => {

  let classes = [sidenavStyles.sidenav];

  if (props.show) {
    classes.push(sidenavStyles.open);
  }


  return (
    <nav className={classes.join(' ')}>
      <Link className={sidenavStyles.link} to="/">Home</Link>
      <Link className={sidenavStyles.link} to="/projects/projects">Projects</Link>
      <Link className={sidenavStyles.link} to="/blog/blog">Blog</Link>
      <div className={sidenavStyles.iconLinks}>
        <a href="https://github.com/GidRamch" target="_blank" className={sidenavStyles.noPadLink}><img src={githubWhite} height="48px" className={sidenavStyles.iconLink} ></img></a>
        <a href="https://www.linkedin.com/in/gideon-ramcharan/" target="_blank" className={sidenavStyles.noPadLink}><img src={linkdinWhite} height="48px" className={sidenavStyles.iconLink}></img></a>
      </div>
    </nav>
  );
}

export default Sidenav;
