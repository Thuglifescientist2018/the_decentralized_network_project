import styles from '../styles/youtube/Comments.module.scss'

const YTComments = () => {
  return (
    <section className={styles.comments}>
    <div className={styles.comments_info}>
      <span className={styles.noc}>29 Comments</span>
      <div className={styles.sort_by}>Sort By</div>
    </div>
    <div className={styles.write_comment}>
      <div className={styles.userPic}>
        <img src="https://yt3.ggpht.com/NG5asuRHW0dMBNeUrLSPGPIhwU3UUaXl8Z8bv_BYLs5rLmImHcOCI--u-LgVyWHF_Drx1yuZYA=s48-c-k-c0x00ffffff-no-rj" alt="" />
      </div>
      <div className={styles.commentBox}>
        <textarea name="" ></textarea>
        
      </div>
    </div>
    <div className={styles.commentBoxOptions}>
   <button className={styles.cancelCommentBtn}>Cancel</button>
   <button className={styles.commentBtn}>Comment</button>

    </div>
    <section className={styles.userComments}>
      <div className={styles.userPic}>
        <img src="https://yt3.ggpht.com/NG5asuRHW0dMBNeUrLSPGPIhwU3UUaXl8Z8bv_BYLs5rLmImHcOCI--u-LgVyWHF_Drx1yuZYA=s48-c-k-c0x00ffffff-no-rj" alt="" />
       
      </div>
      <div className={styles.username_and_comment}>
        <h5 className={styles.username}>Victor Washington <span className={styles.c_upload_year}>6 months ago</span> </h5>
        <p className={styles.comment}>I can take watchdogs videos serious alot more than I can take GTA 6 videos serious. GTA 6 may never come out. Hell, there still making DLCs for GTA 5.</p>
      </div>
    </section>
  </section>
  )
}

export default YTComments