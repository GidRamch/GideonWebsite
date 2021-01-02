import React from 'react';
import NavbarLayout from '../../layouts/navbar-layout/navbar-layout';
import blogsStyles from './blog.module.scss';
import Head from "../../components/head/head";


const blogs = () => {

  return (
    <NavbarLayout>
      <Head title="Blog"/>
      <div className={blogsStyles.container}>
        <div className={blogsStyles.content}>
          <div className={blogsStyles.title}>
            Blog Posts
          </div>
          <div className={blogsStyles.cardContainer}>
            Coming Soon...
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default blogs;