import logo from '../../../../public/logo.svg'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import DropdownMenu from '../ui/DropdownMenu/DropdownMenu'
import '@/app/globals.css'

const options1 = [
    { label: 'Опция 1', link: '/option1' },
    { label: 'Опция 2', link: '/option2' },
    { label: 'Опция 3', link: '/option3' },
  ];

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
            <Link href="/">
                <Image src={logo} alt="logo" width={150} height={100} />
            </Link>
            <div className={styles.menu}>
                <DropdownMenu label="Learn" options={options1} />
                <DropdownMenu label="Build" options={options1} />
                <DropdownMenu label="Network" options={options1} />
                <DropdownMenu label="Community" options={options1} />
            </div>
        </div>
    </div>
  )
}

export default Header