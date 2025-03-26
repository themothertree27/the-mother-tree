
import React from 'react';

// Proper type checking for scrolling to element
const scrollToMotherBoard = () => {
  const element = document.getElementById('themotherboard');
  if (element && element instanceof HTMLDivElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Make sure to export the component
export { scrollToMotherBoard };

// Also export a default component to resolve the TS error
const MembershipCard = () => {
  return null; // This is just a placeholder
};

export default MembershipCard;
