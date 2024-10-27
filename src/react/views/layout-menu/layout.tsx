import React, { useEffect } from 'react';
import NavigationController, { NavigationView } from './navigation-controller';
import styles from './layout.module.css';
import HamburgerMenuButton from './components/hamburger-menu-button/hamburger-menu-button';
import { showNotification } from '../../util/messages/notification-handler';
import { NotificationType } from '../../../global/message-types';
import HamburgerMenuList from './components/hamburger-menu-list/hamburger-menu-list';

interface IProps {}

const Layout = ({ }: IProps) => {
  const [navigationView, setNavigationView] = React.useState(NavigationView.FOLDER_LIST);
  const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(true);
  
  const handleNavigation = (view: NavigationView) => {
    setNavigationView(view);
  }
  
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
          <p className={styles.titleText}>{navigationView}</p>
        </div>
        <div className={styles.rightItems}>
          <HamburgerMenuButton onClick={handleHamburgerMenuClick}/>
        </div>
      </div>
      <div className={styles.content}>
        <NavigationController view={navigationView} />
        <HamburgerMenuList 
          onNavigate={handleNavigation}
          onClose={handleCloseNavigationMenu} 
          isOpen={navigationMenuOpen} 
        />
      </div>
    </div>
  );
};

export default Layout;