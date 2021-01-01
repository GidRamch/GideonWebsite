import React from 'react';
import NavbarLayout from '../../layouts/navbar-layout/navbar-layout';
import blogsStyles from './blog.module.scss';


const blogs = () => {

  return (
    <NavbarLayout>
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