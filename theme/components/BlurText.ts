import React, { useState, FC } from 'react';

interface BluerTextProps {
  text: string;
}

const BluerText: FC<BluerTextProps> = ({ text }) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(true);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    React.createElement('div', {
      onClick: toggleBlur,
      style: {
        backgroundColor: isBlurred ? '#55f89f' : 'transparent',
        borderRadius: '2px',
        cursor: 'pointer',
        display: 'inline-block',
        transition: 'background-color 0.3s ease'
      }
    },
    React.createElement('span', {
  
      style: {
        margin: '10px 10px 10px 10px',
        filter: isBlurred ? 'blur(5px)' : 'none',
        transition: 'filter 0.3s ease'
      }
    }, text))
  );
};

export default BluerText;