import React from 'react';

const Tab = ({ text, index, setActiveTab, activeTab }) => {
  return (
    <li onClick={() => setActiveTab(index)} className="page-item">
      <span
        className={`page-link ${index === activeTab ? 'bg-danger text-white' : ''}`}
      >
        {text}
      </span>
    </li>
  );
};

export default Tab;
