import React from 'react';
import styles from '../styles/Youtube.module.scss';

import RightArrow from '../images/youtube/main_contents/right_arrow.svg';
import YTCard from '../components/youtube/YTCard';
import { useState } from 'react';
import ViewVideo from '../components/youtube/ViewVideo';
import Header from '../components/youtube/Header';
import SideMenu from '../components/youtube/SideMenu';
import ScrollContainer from '../components/youtube/ScrollContainer';
import YTVideos from '../components/youtube/YTVideos';

const Youtube = () => {
    const [view, setView] = useState("card")
  return (
    <main id="youtube" className={styles.youtube}>
          <Header styles={styles} />
            <section className={styles.content}>
               <SideMenu styles={styles} />
                <div className={styles.main_contents}>
                       <ScrollContainer styles={styles} RightArrow={RightArrow}/>
                        {view === "card" ? 
                        <YTVideos styles={styles} YTCard={YTCard} />: 
                     <ViewVideo />
                    }
                       
                        
                </div>
            </section>
    </main>
  )
}

export default Youtube;