import React from 'react'
import styles from './styles/SocialCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const SocialCard = ({imgSRC, height, width, text}) => {
  return (
    <div className={styles.social}>
          <div>
            <Image src={imgSRC} height={height} width={width} alt="YouTube" />
            <h4>

            <Link href={'/youtube'}>{text}</Link>
            </h4>
        </div>
    </div>
  )
}

export default SocialCard