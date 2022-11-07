import React from 'react'
import Home from '../../images/youtube/sidebar/home.svg';
import Library from '../../images/youtube/sidebar/library.svg';
import Shorts from '../../images/youtube/sidebar/shorts.svg';
import Subscriptions  from '../../images/youtube/sidebar/subscriptions.svg';
import styles from '../styles/youtube/Sidemenu.module.scss'

const SideMenu = () => {
  return (
    <section className={styles.side_menu}>
    <ul className={styles.items}>
        <li className={styles.item}>
            <a className={styles.endpoint} href="">
                <Home/>
                <span className={styles.e_text}>Home</span>
            </a>
        </li>
        <li className={styles.item}>
            <a className={styles.endpoint} href="">
                <Shorts/>
                <span className={styles.e_text}>Shorts</span>
            </a>
        </li>
        <li className={styles.item}>
            <a className={styles.endpoint} href="">
                <Subscriptions/>
                <span className={styles.e_text}>Subscriptions</span>
            </a>
        </li>
        <li className={styles.item}>
            <a className={styles.endpoint} href="">
                <Library/>
                <span className={styles.e_text}>Library</span>
            </a>
        </li>
    </ul>
</section>
  )
}

export default SideMenu