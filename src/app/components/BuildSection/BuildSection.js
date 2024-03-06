'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
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
import { useInView } from 'react-intersection-observer'
import Title from '../ui/Title/Title'

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

  const [refLogos, inViewLogos] = useInView({ triggerOnce: true });
  const [refMenus, inViewMenus] = useInView({ triggerOnce: true });

  return (
    <div className='container'>
      <div className={styles.titlerow}>
          <Title>Build for growth.</Title>
        <div className={styles.nav}>
          {nav.map((item, index) => (
            <motion.div
            key={index}
            ref={refMenus}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inViewMenus ? 1 : 0, y: inViewMenus ? 0 : 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
            className={`${styles.nav_item} ${activeSlide === index ? styles.nav_item_active : ''}`}
            onClick={() => handleNavClick(index)}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0, transform: 'scale(0)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 0.3 }}
      >
      <div className={styles.slider}>
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0, transform: 'scale(0)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.slider_left}>
        <motion.div
        key={activeSlide}
        initial={{ opacity: 0, transform: 'scale(0)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        transition={{ duration: 0.2, delay: 0.2 }}
        >
            <Image
              src={sliders[activeSlide]}
              width="100%"
              height="100%"
              alt={`slider${activeSlide + 1}`}
            />
        </motion.div>
        </div>
        </motion.div>
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
      </motion.div>
      <div className={styles.logos}>
        {logos.map((item, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inViewLogos ? 1 : 0, y: inViewLogos ? 0 : 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
          >
            <Image ref={refLogos} key={i} src={item} alt="logo" width="100%" height="100%" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BuildSection
