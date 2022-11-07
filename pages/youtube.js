import React from 'react';
import styles from '../styles/Youtube.module.scss';



import { useState } from 'react';
import ViewVideo from '../components/youtube/ViewVideo';
import Header from '../components/youtube/Header';
import SideMenu from '../components/youtube/SideMenu';
import ScrollContainer from '../components/youtube/ScrollContainer';
import YTVideos from '../components/youtube/YTVideos';

const Youtube = () => {
    const [view, setView] = useState("cards")
  return (
    <main id="youtube" className={styles.youtube}>
          <Header />
            <section className={styles.content}>
               <SideMenu  />
                <div className={styles.main_contents}>
                       <ScrollContainer />
                        {view === "cards" ? 
                        <YTVideos styles={styles} />: 
                     <ViewVideo />
                    }
                       
                        
                </div>
            </section>
    </main>
  )
}

export default Youtube;