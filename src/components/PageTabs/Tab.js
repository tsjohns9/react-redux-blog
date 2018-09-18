import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ text, index, setActiveTab, activeTab }) => {
  return (
    <li onClick={() => setActiveTab(index)} className="page-item">
      <span
        className="page-link"
        style={{
          color: index === activeTab && 'white',
          backgroundColor: index === activeTab && '#008cba',
          borderColor: index === activeTab && '#0079a1'
        }}
      >
        {text}
      </span>
    </li>
  );
};

export default Tab;
