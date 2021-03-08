import React from "react";
import { TabInfo } from "../../../../../models/tab.model";
import FrxTabs from "../../../../shared/FrxTabs/FrxTabs";
import PriorAuthorization from "./PriorAuthorization";
import StepTherapyDetails from "./StepTherapyDetails";

// import components
import QL from "../QL/QL";
import DrugDetails from "../DrugDetails/DrugDetails";
import Tier from "../../../DrugDetails/components/FormularyConfigure/components/Tier/Tier";
import CategoryClass from "../../../DrugDetails/components/FormularyConfigure/components/CategoryClass";
import StepTherpayDetails from "../../../DrugDetails/components/FormularyConfigure/components/StepTherapyData";
const tabs = [
  { id: 1, text: "TIER" },
  { id: 2, text: "CATEGORY/CLASS" },
  { id: 3, text: "PA" },
  { id: 4, text: "ST" },
  { id: 5, text: "QL" },
  { id: 6, text: "DRUG DETAILS" },
];

interface configureState {
  tabs: Array<TabInfo>;
  activeTabIndex: number;
}
interface configureProps {
  isReadOnly: boolean;
}

export default class CommercialConfigure extends React.Component<
  configureProps,
  configureState
> {
  state = {
    tabs: tabs,
    activeTabIndex: 0,
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
        return <Tier isReadOnly={this.props.isReadOnly} />;
      case 1:
        return <CategoryClass isReadOnly={this.props.isReadOnly} />;
      case 2:
        return <PriorAuthorization isReadOnly={this.props.isReadOnly} />;
      case 3:
        return <StepTherapyDetails isReadOnly={this.props.isReadOnly} />;
      case 4:
        return <QL isReadOnly={this.props.isReadOnly} />;
      case 5:
        return <DrugDetails isReadOnly={this.props.isReadOnly} />;
    }
  };
  render() {
    return (
      <div className='bordered'>
        <FrxTabs
          tabList={this.state.tabs}
          activeTabIndex={this.state.activeTabIndex}
          onClickTab={this.onClickTab}
        />
        <div className='inner-container white-bg'>
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}
