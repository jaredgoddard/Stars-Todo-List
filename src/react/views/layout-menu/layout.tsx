import React from 'react';
import NavigationController, { NavigationView } from './navigation-controller';
import styles from './layout.module.css';
import HamburgerMenuButton from './layout-menu-items/hamburger-menu';
import { showNotification } from '../../util/messages/notification-handler';
import { NotificationType } from '../../../global/message-types';

interface IProps {}

const Layout = ({ }: IProps) => {
  const [navigationView, setNavigationView] = React.useState(NavigationView.FOLDER_LIST);
  
  
  const handleHamburgerMenuClick = () => {
    showNotification(NotificationType.INFO, 'Hamburger menu clicked');
    if(navigationView == NavigationView.FOLDER_LIST) {
      setNavigationView(NavigationView.TASK_LIST);
    }
    else {
      setNavigationView(NavigationView.FOLDER_LIST);
    }
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
      <NavigationController view={navigationView} />
    </div>
    
  );
};

export default Layout;