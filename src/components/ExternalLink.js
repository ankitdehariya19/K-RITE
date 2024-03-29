import React from 'react';

const ExternalLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener noreferrer');
  };

  return (
    <span
      role="button"
      onClick={handleClick}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
    >
      {children}
    </span>
  );
};

export default ExternalLink;
