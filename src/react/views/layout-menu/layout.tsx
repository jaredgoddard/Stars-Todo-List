import React, { useEffect } from 'react';
import NavigationController, { currentView, NavigationView } from './navigation-controller';
import styles from './layout.module.css';
import HamburgerMenuButton from './components/hamburger-menu-button/hamburger-menu-button';
import { showNotification } from '../../util/messages/notification-handler';
import { NotificationType } from '../../../global/message-types';
import HamburgerMenuList from './components/hamburger-menu-list/hamburger-menu-list';
import { useAtomValue } from 'jotai';

interface IProps {}

const Layout = ({ }: IProps) => {
  const view = useAtomValue(currentView);
  const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(true);
  
  const handleCloseNavigationMenu = () => {
    setNavigationMenuOpen(false);
  };
  
  const handleHamburgerMenuClick = () => {
    setNavigationMenuOpen(true);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.title}>
          <p className={styles.titleText}>{view}</p>
        </div>
        <div className={styles.rightItems}>
          <HamburgerMenuButton onClick={handleHamburgerMenuClick}/>
        </div>
      </div>
      <div className={styles.content}>
        <NavigationController />
        <HamburgerMenuList 
          onClose={handleCloseNavigationMenu} 
          isOpen={navigationMenuOpen} 
        />
      </div>
    </div>
  );
};

export default Layout;