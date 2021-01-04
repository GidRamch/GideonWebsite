import React from 'react';
import backdropStyles from './backdrop.module.scss';

const Backdrop = (props) => {
  return (
    <div className={backdropStyles.backdrop} onClick={props.drawerClickHander}></div>
  );
}

export default Backdrop;