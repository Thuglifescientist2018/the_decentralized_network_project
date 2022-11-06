import React from 'react';
import styles from '../styles/Youtube.module.scss';
import Logo from '../images/youtube/logo/Logo.svg'
import Home from '../images/youtube/sidebar/home.svg';
import Shorts from '../images/youtube/sidebar/shorts.svg';
import Subscriptions from '../images/youtube/sidebar/subscriptions.svg';
import Library from '../images/youtube/sidebar/library.svg';
import RightArrow from '../images/youtube/main_contents/right_arrow.svg';
import YTCard from '../components/youtube/YTCard';


const Youtube = () => {
  return (
    <main id="youtube" className={styles.youtube}>
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
            <section className={styles.content}>
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
                <div className={styles.main_contents}>
                        <div className={styles.scroll_container}>
                            <button className={styles.sc_btn}>All</button>
                            <div className={styles.sc_btn_next}>
                                <RightArrow />
                            </div>
                        </div>

                        <div className={styles.yt_videos}>
                            <YTCard  />
                        </div>
                        
                </div>
            </section>
    </main>
  )
}

export default Youtube