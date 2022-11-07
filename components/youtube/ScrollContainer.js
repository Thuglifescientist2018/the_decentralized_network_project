import React from 'react'

const ScrollContainer = ({styles, RightArrow}) => {
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