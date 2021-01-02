import React from 'react';
import { Link } from 'gatsby';
import NavbarLayout from '../layouts/navbar-layout/navbar-layout';
import styles from './404.module.scss';
import Head from "../components/head/head";

const NotFound = () => {
  return (
    <NavbarLayout>
      <Head title="404"/>
      <div className={styles.container}>
        <div className={styles.title}>Page not found</div>
        <Link to="/" className={styles.link}>Back to home</Link>   
      </div>
    </NavbarLayout>
  );
}

export default NotFound;