import React from 'react';
import styles from './hamburger-menu-button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  onClick?: () => void;
}

const HamburgerMenuButton = ({ onClick }: IProps) => {
  return (
    <div className={styles.container} >
      <FontAwesomeIcon 
      className={`${styles.hamburgerButton} ${onClick ? styles.hamburgerButtonClickable : ''}`} 
      icon={faBars} 
      size="xl" 
      onClick={onClick}
      />
    </div>
  );
};

export default HamburgerMenuButton;