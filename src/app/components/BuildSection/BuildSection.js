'use client'

import { useState } from 'react'
import '@/app/globals.css'
import styles from './BuildSection.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import slider1 from '../../../../public/home/slider1.jpg'
import slider2 from '../../../../public/home/slider2.jpg'
import slider3 from '../../../../public/home/slider3.jpg'
import slider4 from '../../../../public/home/slider4.jpg'
import slider5 from '../../../../public/home/slider5.jpg'
import sliderlogo1 from '../../../../public/svg/sliderlogo1.svg'
import logo1 from '../../../../public/svg/partners/logo1.svg'
import logo2 from '../../../../public/svg/partners/logo2.svg'
import logo3 from '../../../../public/svg/partners/logo3.svg'
import logo4 from '../../../../public/svg/partners/logo4.svg'

const nav = ['NFTs', 'DeFi', 'Payments', 'Gaming', 'DAOs']
const sliders = [slider1, slider2, slider3, slider4, slider5]
const logos = [logo1, logo2, logo3, logo4]
const content = [
  {
    title: "NFTs",
    text: "Content for NFTs"
  },
  {
    title: "DeFi",
    text: "Content for DeFi"
  },
  {
    title: "Payments",
    text: "Content for Payments"
  },
  {
    title: "Gaming",
    text: "Content for Gaming"
  },
  {
    title: "DAOs",
    text: "Content for DAOs"
  }
]

export const BuildSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleNavClick = (index) => {
    setActiveSlide(index)
  }

  return (
    <div className='container'>
      <div className={styles.titlerow}>
        <h2>Build for growth.</h2>
        <div className={styles.nav}>
          {nav.map((item, index) => (
            <div
              key={index}
              className={`${styles.nav_item} ${activeSlide === index ? styles.nav_item_active : ''}`}
              onClick={() => handleNavClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slider_left}>
          <Image
            src={sliders[activeSlide]}
            width="100%"
            height="100%"
            alt={`slider${activeSlide + 1}`}
          />
        </div>
        <div className={styles.slider_right}>
          <Image
            src={sliderlogo1}
            width="100%"
            height="100%"
            alt={`sliderlogo1`}
            className={styles.slider_logo}
          />
          <p className={styles.text}>
            It’s time to bridge the digital and physical.
            <br />
            {content[activeSlide].text}
          </p>
          <Link href="/" className={styles.link}>
            Learn more about {nav[activeSlide]} on Solana
          </Link>
        </div>
      </div>

      <div className={styles.logos}>
        {logos.map((item, i) => (
          <Image key={i} src={item} alt="logo" width="100%" height="100%" />
        ))}
      </div>
    </div>
  )
}

export default BuildSection
