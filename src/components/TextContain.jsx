import React from 'react';
import '../styles/components/TextContain.css';

const TextContain = ({ title, contain }) => {
  return (
    <div className="contain__text">
      <p className="text--bold">{title}:</p>
      <p className="text--simple">{contain}</p>
    </div>
  );
};

export default TextContain;
