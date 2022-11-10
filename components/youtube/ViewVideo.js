
import styles from '../styles/youtube/ViewVideo.module.scss';

import Dislike from '../../images/youtube/mini_elements/dislike.svg'
import Share from '../../images/youtube/mini_elements/share.svg'
import More from '../../images/youtube/mini_elements/more.svg';
import YTComments from './YTComments';
import YTCard from './YTCard'


const ViewVideo = ({ScrollContainer}) => {
  return (
    <section id="viewVideo" className={styles.viewVideo}>
      <section className={styles.left}>
      <section className={styles.videoContainer}>
        <video src="api/video"></video>
        <h2 className={styles.videoTitle}>Elon Musk talks Twitter, Tesla and how his brain works — live at TED2022
        </h2>
        <div className={styles.video_info}> {/* flex */}
          <div className={styles.channel}>
              <div className={styles.c_logo}>
                <img src="https://www.pngplay.com/wp-content/uploads/6/Apple-Fruit-Shining-Small-Transparent-PNG.png" alt="" height="50px" width="50px" />
             
              </div>
              <div className={styles.c_logo_info}>
                <h4 className={styles.c_logo_title}>TED</h4>
                <span className={styles.subscribers}>22.1M subscribers</span>
              </div>
              <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
            <div className={styles.rightInfo}>
              <div className={styles.like_and_dislike}>
                <button className={styles.like}>
               <Dislike/>
                </button>
                <button className={styles.dislike}>
                      <Dislike />
                </button>

              </div>
              <div className={styles.share}>
                  <Share />
                  <span>Share</span>
              </div>
              <div className={styles.more}>
                    <More />
              </div>
            </div>
        </div>
      </section>
      <section className={styles.description}>
        <h5>
        134,554 views  Oct 31, 2022

        </h5>
        <p>Jimena Canales shares the “demons” that shaped computer science.
</p>
      </section>
    <YTComments />

      </section>
      <section className={styles.right}>
      <ScrollContainer />
          <section className={styles.suggested_videos}>
                <YTCard view={{view: "viewVideo", styles2: styles}}  />
          </section>
      </section>
    </section>
  )
}

export default ViewVideo;