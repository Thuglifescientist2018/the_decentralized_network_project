import React from 'react';
import styles from './styles/Card.module.scss';
import computer from './images/computer.jpg';
import Image from 'next/image';

export const Card = ({url, ip}) => {
 
  return (
    <div className={styles.Card}>
        <Image src={computer.src} height={"100"} width={'100'} alt="" />
       <a href={url}>{ip}</a>
    </div>
  )
}
