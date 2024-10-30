import React from 'react';
import styles from './hamburger-menu-list.module.css';
import { currentView, NavigationView } from '../../navigation-controller';
import { useAtom } from 'jotai';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenuList: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useAtom(currentView);
  const pages = Object.values(NavigationView);
  
  const handleBackgroundClick = () => {
    onClose();
  };
  
  const handleNavigationItemClick = (view: NavigationView) => {
    setView(view);
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