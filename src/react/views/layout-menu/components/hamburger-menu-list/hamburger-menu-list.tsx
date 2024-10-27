import React from 'react';
import styles from './hamburger-menu-list.module.css';
import { NavigationView } from '../../navigation-controller';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: NavigationView) => void;
}

const HamburgerMenuList: React.FC<IProps> = ({ isOpen, onClose, onNavigate }) => {
  const pages = Object.values(NavigationView);
  
  const handleBackgroundClick = () => {
    onClose();
  };
  
  const handleNavigationItemClick = (view: NavigationView) => {
    onNavigate(view);
  }
  
  return (
    <div className={styles.parent}>
      {isOpen && (
        <div className={styles.container} onClick={handleBackgroundClick}>
          <div className={styles.list}>
            { // Create list of pages
              pages.map((page) => {
                return (
                    <div 
                      key={page}
                      className={styles.listItem} 
                      data-page={page}
                      onClick={() => handleNavigationItemClick(page)}
                    >
                      {page}
                    </div>
                );
              })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuList;