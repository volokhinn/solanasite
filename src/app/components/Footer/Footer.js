import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/logo1.svg'
import yt from '../../../../public/svg/social/yt.svg'
import twitter from '../../../../public/svg/social/twitter.svg'
import tg from '../../../../public/svg/social/tg.svg'
import gh from '../../../../public/svg/social/gh.svg'
import discord from '../../../../public/svg/social/discord.svg'
import lang from '../../../../public/svg/lang.svg'

import '@/app/globals.css'

const social = [
  { icon: yt, link: "https://youtube.com" },
  { icon: twitter, link: "https://twitter.com" },
  { icon: tg, link: "https://telegram.org" },
  { icon: gh, link: "https://github.com" },
  { icon: discord, link: "https://discord.com" }
];

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
          <div className={styles.left}>
              <Image src={logo} alt="logo" width={25} height={25} />
              <p className={styles.text}>Managed by Solana Foundation</p>
              <div className={styles.social_list}>
                {social.map((item, index) => (
                    <Link key={index} href={item.link} className={styles.social}>
                        <Image src={item.icon} alt="social" width={15} height={15} />
                    </Link>
                ))}
              </div>
              <p className='textgray'>© 2023 Solana Foundation. All rights reserved.</p>
          </div>
          <div className={styles.menu_column}>
            <div className={styles.center}>
              <nav className={styles.menu}>
                <span className={styles.menu_title}>SOLANA</span>
                <Link href="/" className={styles.menu_item}>Grants</Link>
                <Link href="/" className={styles.menu_item}>Break Solana</Link>
                <Link href="/" className={styles.menu_item}>Media Kit</Link>
                <Link href="/" className={styles.menu_item}>Careers</Link>
                <Link href="/" className={styles.menu_item}>Disclaimer</Link>
              </nav>
            </div>
            <div className={styles.right}>
              <nav className={styles.menu}>
                <span className={styles.menu_title}>GET CONNECTED</span>
                <Link href="/" className={styles.menu_item}>Ecosystem</Link>
                <Link href="/" className={styles.menu_item}>Blog</Link>
                <Link href="/" className={styles.menu_item}>Newsletter</Link>
              </nav>
            </div>
            <div className={styles.lang}>
              <Image src={lang} alt="lang" width={20} height={20} />
              <p>EN</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
