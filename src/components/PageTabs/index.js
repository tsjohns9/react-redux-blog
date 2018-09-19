import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions/actions';

class PageTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.activeTab = () => this.props.activeTab;
  }

  tabs = [1, 2, 3, 4, 5];

  setActiveTab = index => this.props.dispatch(setPage(index));

  activeTabPlusOne = () => {
    const tab = this.activeTab();
    if (tab < 4) {
      this.props.dispatch(setPage(this.activeTab() + 1));
    }
  };

  activeTabMinusOne = () => {
    const tab = this.activeTab();
    if (tab > 0) {
      this.props.dispatch(setPage(this.activeTab() - 1));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="pagination mx-auto">
          <li onClick={this.activeTabMinusOne} className="page-item shadow-hover">
            <a className="page-link">&laquo;</a>
          </li>
          {this.tabs.map((tab, index) => (
            <Tab
              key={tab}
              text={tab}
              index={index}
              setActiveTab={this.setActiveTab}
              activeTab={this.activeTab()}
            />
          ))}
          <li onClick={this.activeTabPlusOne} className="page-item shadow-hover">
            <a className="page-link">&raquo;</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  };
};

export default connect(mapStateToProps)(PageTabs);
