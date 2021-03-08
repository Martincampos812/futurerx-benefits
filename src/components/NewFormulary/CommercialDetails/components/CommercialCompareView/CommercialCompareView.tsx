import React from "react";
import { TabInfo } from "../../../../../models/tab.model";
import FrxTabs from "../../../../shared/FrxTabs/FrxTabs";
import CompareFormularies from "../../../../NewFormulary/DrugDetails/components/CompareView/components/CompareFormularies";
import ViewFormularies from "../../../../NewFormulary/DrugDetails/components/CompareView/components/ViewFormularies";
import CompareTable from "../../../DrugDetails/components/CompareView/components/CompareTable/CompareTable";
import DownloadIcon from "../../../../../assets/icons/DownloadIcon.svg";

const tabs = [
  { id: 1, text: "COMPARE FORMUARIES" },
  { id: 2, text: "VIEW FORMULARIES" },
];

interface configureState {
  tabs: Array<TabInfo>;
  activeTabIndex: number;
  isCompareClicked: boolean;
}
interface configureProps {
  isReadOnly: boolean;
}

export default class CommercialCompareView extends React.Component<
  configureProps,
  configureState
> {
  state = {
    tabs: tabs,
    activeTabIndex: 0,
    isCompareClicked: false,
  };
  onClickTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = this.state.tabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeTabIndex = index;
      }
      return tab;
    });
    this.setState({ tabs, activeTabIndex });
  };

  handleCompareBtn = () => {
    this.setState({
      isCompareClicked: !this.state.isCompareClicked,
    });
  };

  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    const { isCompareClicked } = this.state;
    switch (tabIndex) {
      case 0:
        return (
          <div>
            <CompareFormularies
              handleCompareBtn={this.handleCompareBtn}
              isCompareClicked={isCompareClicked}
            />
          </div>
        );
      case 1:
        return <ViewFormularies />;
    }
  };
  render() {
    const { activeTabIndex, isCompareClicked } = this.state;
    return (
      <>
        <div className='bordered'>
          <FrxTabs
            tabList={this.state.tabs}
            activeTabIndex={activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className='inner-container white-bg'>
            {this.renderActiveTabContent()}
          </div>
        </div>
        {/* {activeTabIndex === 0 && isCompareClicked ? ( */}
        {activeTabIndex === 0 && !isCompareClicked ? (
          <div className='bordered m-t-10 compare-table-root'>
            <div className='header white-bg flex-container'>
              <label>comparison of formularies</label>
              <img src={DownloadIcon} alt='DownloadIcon' />
            </div>
            <div className='inner-container white-bg p-10'>
              <CompareTable />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
