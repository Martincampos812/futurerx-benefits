import React from "react";
import { TabInfo } from "../../../../../models/tab.model";
import FrxTabs from "../../../../shared/FrxTabs/FrxTabs";
import CompareFormularies from "./components/CompareFormularies";
import CompareTable from "./components/CompareTable/CompareTable";
import ViewFormularies from "./components/ViewFormularies";
import { ReactComponent as DownloadIcon } from "../../../../../assets/icons/DownloadIcon.svg";
import "./CompareView.scss";
import PureAccordion from "../../../../shared/Frx-components/accordion/PureAccordion";
import FormularyCompareGrid from "./components/FormularyCompareGrid/FormularyCompareGrid";

const tabs = [
  { id: 1, text: "COMPARE FORMUARIES" },
  { id: 2, text: "VIEW FORMULARIES" },
  { id: 3, text: "HPMS SUMMMARY" },
];

interface configureState {
  tabs: Array<TabInfo>;
  activeTabIndex: number;
  isCompareClicked: boolean;
}
interface configureProps {}

export default class CompareView extends React.Component<
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
        return (
          <div>
            <ViewFormularies />
          </div>
        );
      case 2:
        return <div>HPMS SUMMARY</div>;
    }
  };
  render() {
    const { activeTabIndex, isCompareClicked } = this.state;
    return (
      <>
        <div className="bordered">
          <FrxTabs
            tabList={this.state.tabs}
            activeTabIndex={activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className="inner-container white-bg">
            {this.renderActiveTabContent()}
          </div>
        </div>
        {activeTabIndex === 0 && isCompareClicked ? (
          <div className="bordered m-t-10 compare-table-root">
            <div className="header white-bg flex-container">
              <label>comparison of formularies</label>
              <DownloadIcon />
            </div>
            <div className="inner-container white-bg p-10">
              <CompareTable />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
