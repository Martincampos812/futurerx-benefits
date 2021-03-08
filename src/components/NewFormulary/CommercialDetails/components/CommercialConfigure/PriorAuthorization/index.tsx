import React from "react";
import GDM from "./GDM";
import "./style.scss";
import DrugSection from "./DrugSection";
import { TabInfo } from "../../../../../../models/tab.model";
import { getStTabs } from "../../../../../../mocks/formulary/mock-data";
import FrxMiniTabs from "../../../../../shared/FrxMiniTabs/FrxMiniTabs";
interface DrugDetailsState {
  activeTabIndex: number;
  tabs: Array<TabInfo>;
}

export default class PriorAuthorization extends React.Component<
  any,
  DrugDetailsState
> {
  state = {
    activeTabIndex: 0,
    tabs: getStTabs(),
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
  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    switch (tabIndex) {
      case 0:
        return <GDM isReadOnly={this.props.isReadOnly} />;
      case 1:
        return <DrugSection isReadOnly={this.props.isReadOnly} />;
    }
  };
  render() {
    return (
      <>
        <div className='bordered details-top commercial-pa-root'>
          <div className='inner-container'>
            <div className='configure-mini-tabs'>
              <FrxMiniTabs
                tabList={this.state.tabs}
                activeTabIndex={this.state.activeTabIndex}
                onClickTab={this.onClickTab}
              />
            </div>
            <div className='tabs-info'>{this.renderActiveTabContent()}</div>
          </div>
        </div>
      </>
    );
  }
}
