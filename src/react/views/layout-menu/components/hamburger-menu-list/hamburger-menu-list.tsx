import React from 'react';
import styles from './hamburger-menu-list.module.css';
import HamburgerMenuButton from '../hamburger-menu-button/hamburger-menu-button';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  pages: string[];
}

const HamburgerMenuList: React.FC<IProps> = ({ isOpen, onClose, pages }) => {
  
  const handleBackgroundClick = () => {
    onClose();
  };
  
  const handleNavigationItemClick = (view: string) => {}
  
  return (
    <div className={styles.parent}>
      {isOpen && (
        <div className={styles.background}>
          <div className={styles.container} onClick={handleBackgroundClick}>
            <div className={styles.list}>
              <div className={styles.hamburger}>
                <HamburgerMenuButton />
              </div>
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
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuList;