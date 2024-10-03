import React from 'react';
import styles from './checkbox.module.css';
import { style  } from 'typestyle';
import * as vscode from 'vscode';

interface IProps {
  onClicked: () => void;
}

const Checkbox: React.FC<IProps> = ({ onClicked }) => {
  const [isHovered, setIsHovered] = React.useState(false); 
  
  const handleCheckboxClick = () => {
    onClicked();
  };
  
  const handleCheckboxHover = () => {
    setIsHovered(true); 
  };
  
  const handleCheckboxLeave = () => {
    setIsHovered(false); 
  };

  return (
    <div 
      className={styles.checkbox} 
      onClick={handleCheckboxClick}
      onMouseEnter={handleCheckboxHover}
      onMouseLeave={handleCheckboxLeave}
    >
      {isHovered && <span className={styles.checkmark}>✓</span>} 
    </div>
  );
};

export default Checkbox;

const checkbox = style({
  width: 16,
  height: 16,
  backgroundColor: 'transparent',
  border: 1 || 'solid' || vscode.window.activeColorTheme.getColor('button.foreground'),
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  margin: 0 || 6 || 0 || 3,
});