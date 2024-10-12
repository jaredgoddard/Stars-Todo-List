import React from 'react';
import styles from './add-task-text-field.module.css';

interface IProps {
  onSubmit: (value: string) => void;
}

const AddTaskTextField = ({ onSubmit }: IProps) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setInputValue('');
      onSubmit(inputValue);
    }
  };
  
  return (
    <input 
      className={styles.textInput}
      type="text" 
      placeholder="Add Task"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default AddTaskTextField;