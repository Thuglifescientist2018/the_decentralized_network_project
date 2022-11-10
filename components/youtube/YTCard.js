import styles from '../styles/YTCard.module.scss';
import { Fragment } from 'react';
const YTCard = ({setView, view}) => {

  const changeView = () => {
      setView("video");
  }

  return (
      <Fragment>
       {view.view === "viewVideo" ?
          <div className={view.styles2.yt_card}>
          <div className={view.styles2.vid_container}>
          <video src="api/video" onClick={changeView} ></video>
  
          </div>
          <div className={view.styles2.video_info}>
              <div className={view.styles2.pp_and_video_title}>
                  <img src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-people-user-icon-png-image_3569389.jpg" alt="User" height="30px" width="30px" />
                  <h3 className={view.styles2.v_title}>Video Title ddkkkddkdfdfkdfkdkdfkdfkdfk</h3>
              </div>
                  <span className={view.styles2.username}>Rayeen</span>
                  <div className={view.styles2.views_and_upload}>
                  <span className={view.styles2.views}>10k views </span>
                  <span className={view.styles2.upload_year}> 4 years ago</span>
  
                  </div>
          </div>
          <div className={view.styles2.base_btns}>
            <button>Watch Later</button>
            <button>Add to Queue</button>
          </div>
      </div>
       :
       <div className={styles.yt_card}>
       <div className={styles.vid_container}>
       <video src="api/video" onClick={changeView} ></video>

       </div>
       <div className={styles.video_info}>
           <div className={styles.pp_and_video_title}>
               <img src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-people-user-icon-png-image_3569389.jpg" alt="User" height="30px" width="30px" />
               <h3 className={styles.v_title}>Video Title ddkkkddkdfdfkdfkdkdfkdfkdfk</h3>
           </div>
               <span className={styles.username}>Rayeen</span>
               <div className={styles.views_and_upload}>
               <span className={styles.views}>10k views </span>
               <span className={styles.upload_year}> 4 years ago</span>

               </div>
       </div>
       <div className={styles.baseBtns}>
         <button>Watch Later</button>
         <button>Add to Queue</button>
       </div>
   </div>}
   
      </Fragment>
  )
}

export default YTCard