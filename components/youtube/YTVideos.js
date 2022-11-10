import YTCard from './YTCard';
import styles from '../styles/youtube/YTVideos.module.scss'
const YTVideos = ({setView, view}) => {
  return (
    <div className={styles.yt_videos}>
          <YTCard setView={setView} view={view}  />
    </div>
  )
}

export default YTVideos;