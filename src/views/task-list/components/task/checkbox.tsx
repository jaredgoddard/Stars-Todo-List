import React from 'react';
import styles from './checkbox.module.css';

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