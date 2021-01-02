import React from 'react';

import cardStyles from './card.module.scss';

const Card = (props) => {

  const links = props?.links?.map(link=>(
    <a className={cardStyles.noStyle} href={link.url} target="__blank">{link.title}</a>
  ))


  return (
    <div className={cardStyles.cardParent} 
      style={{backgroundImage: `linear-gradient(116.7deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%), url(${props.image})`,}}
      key={props.title}
    >
      <div className={cardStyles.card}>
        <div className={cardStyles.overlay}></div>
        
        <div className={cardStyles.cardContent}>
          <div className={cardStyles.cardTitle}>
            {props.title}
          </div>
          <div className={cardStyles.cardSubtitle}>
            {props.message}
          </div>
          <div className={cardStyles.cardButtons}>
            {links}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;