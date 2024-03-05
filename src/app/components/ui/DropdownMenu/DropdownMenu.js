'use client'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.scss';
import arrow from '../../../../../public/svg/arrow.svg';
import Image from 'next/image';

const DropdownMenu = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openDropdown = () => {
    clearTimeout(timerRef.current);
    setIsAnimating(true);
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsAnimating(true);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    if (!isOpen) {
      timerRef.current = setTimeout(openDropdown, 300);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    if (isOpen) {
      timerRef.current = setTimeout(closeDropdown, 300);
    }
  };

  const handleItemClick = () => {
    closeDropdown();
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className={styles.dropdown_toggle}>
        {label} <Image src={arrow} width={10} height={10} className={isOpen ? styles.rotate : styles.arrow} />
      </a>
      {isOpen && (
        <div
          className={`${styles.dropdown_menu} ${isAnimating ? styles.animating : ''}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {options.map((option, index) => (
            <div key={index} onClick={handleItemClick}>
              {option.link ? (
                <Link href={option.link} className={styles.link}>
                  {option.label}
                </Link>
              ) : (
                <span>{option.label}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
