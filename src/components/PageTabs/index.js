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

  // define the number of pages to use
  tabs = [1, 2, 3, 4, 5];

  // saves the active status to the store so the home page can update when this component changes
  setActiveTab = index => this.props.dispatch(setPage(index));

  // sets the active status on the pagination tab
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
      <div className="table1">
        <ul className="pagination">
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
