import React, { useEffect } from 'react';
import styles from './layout.module.css';
import HamburgerMenuButton from './components/hamburger-menu-button/hamburger-menu-button';
import HamburgerMenuList from './components/hamburger-menu-list/hamburger-menu-list';
import { useAtomValue } from 'jotai';
import TaskList from '../task-list/task-list';

interface IProps {}

const Layout = ({ }: IProps) => {
  const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
  
  const handleCloseNavigationMenu = () => {
    setNavigationMenuOpen(false);
  };
  
  const handleHamburgerMenuClick = () => {
    setNavigationMenuOpen(true);
  };
  
  return (
    <div className={styles.container}>
      {/* <HamburgerMenuList 
        onClose={handleCloseNavigationMenu} 
        isOpen={navigationMenuOpen} 
      /> */}
      <div className={styles.topBar}>
        <div className={styles.title}>
          <p className={styles.titleText}>Task List</p>
        </div>
        {/* <div className={styles.rightItems}>
          <HamburgerMenuButton onClick={handleHamburgerMenuClick}/>
        </div> */}
      </div>
      <div className={styles.content}>
        <TaskList />
      </div>
    </div>
  );
};

export default Layout;