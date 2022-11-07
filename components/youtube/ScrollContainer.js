import React from 'react';

import styles from '../styles/youtube/ScrollContainer.module.scss';
import RightArrow from '../../images/youtube/main_contents/right_arrow.svg';

const ScrollContainer = () => {
  return (
    <div className={styles.scroll_container}>
    <button className={styles.sc_btn}>All</button>
    <div className={styles.sc_btn_next}>
        <RightArrow />
    </div>
</div>
  )
}

export default ScrollContainer