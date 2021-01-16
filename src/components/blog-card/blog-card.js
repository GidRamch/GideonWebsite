import React from 'react';

import blogCardStyles from './blog-card.module.scss';

const BlogCard = (props) => {

  return (
    <div className={blogCardStyles.cardParent}>
      <div 
        className={blogCardStyles.image}
        style={{backgroundImage: `linear-gradient(116.7deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%), url(${props.image})`,}}
      >

      </div>

      <div className={blogCardStyles.content}>
        <div className={blogCardStyles.title}>{props.title}</div>
        <div className={blogCardStyles.snippet}>{props.snippet}</div>
        <div className={blogCardStyles.tags}>
          <div>{props.date}</div>
          <div>{props.duration}</div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;