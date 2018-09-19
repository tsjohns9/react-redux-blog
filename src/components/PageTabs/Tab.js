import React from 'react';

const Tab = ({ text, index, setActiveTab, activeTab }) => {
  return (
    <li onClick={() => setActiveTab(index)} className="page-item shadow-hover">
      <span
        className={`page-link ${index === activeTab ? 'bg-primary text-white' : ''}`}
      >
        {text}
      </span>
    </li>
  );
};

export default Tab;
