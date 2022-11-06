import React from 'react';
import styles from './styles/PcContents.module.scss'
import youtube from './images/social/YouTube.png';
import discord from './images/social/discord.png'
import SocialCard from './SocialCard';


const PCContent = () => {
  return (
    <main id="pc_contents" className={styles.pc_contents}>
      <SocialCard imgSRC={youtube.src} height={50} width={50} text={'YouTube'}/>
      <SocialCard imgSRC={discord.src} height={50} width={50} text={'Discord'}/>
    </main>
  )
}

export default PCContent