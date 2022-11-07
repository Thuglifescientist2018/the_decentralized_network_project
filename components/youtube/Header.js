import React from 'react';
import Logo from '../../images/youtube/logo/Logo.svg'
import styles from '../styles/youtube/Header.module.scss'


const Header = () => {
  return (
    <header className={styles.yt_header}>
    <nav className={styles.yt_nav}>
        <div className={styles.toggler}>
           <span className={styles.line}></span>
           <span className={styles.line}></span>
           <span className={styles.line}></span>
          
        </div>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles.text_search}>
            <div className={styles.input_and_search_logo}>
                <input type="text" placeholder='Search' />
                <button className={styles.search_btn}>
                    <div className={styles.s_btn_circle}>
                       
                    </div>
                </button>
            </div>
        </div>
        <div className={styles.voice_search}>
             <div className={styles.holder}></div>
             <div className={styles.mouth}></div>
        </div>
        <div className={styles.right_side_options}>
            <div className={styles.create}>
                <div className={styles.box}>
                    +
                    <div className={styles.triangle}></div>
                </div>
            </div>
            <div className={styles.notifications}>

                <div className={styles.bell}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                </div>
            </div>
            <div className={styles.profile_picture}>
                👤
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header