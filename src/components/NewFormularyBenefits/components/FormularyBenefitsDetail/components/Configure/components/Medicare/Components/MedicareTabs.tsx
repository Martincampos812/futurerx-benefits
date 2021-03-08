import React from "react";

import { TabInfo } from "../../../../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../../../../shared/FrxMiniTabs/FrxMiniTabs";

import "./MedicareTabs.scss";
import OTCBenefits from './OTCBenefits/OTCBenefits';
import BVDProcessing from './BvDProcessing/BvDProcessing'
import PartDEnhancedTab from './PartDEnhanced/PartDEnhanced'
import LisTab from './LisTab/LisTab'

interface State {
  miniTabs: Array<TabInfo>;
  activeMiniTabIndex: number;
  gridData: any;
  gridColumn: any;
  AddNewPopupInd:boolean;
  selectedAddNewFormularyRadio:any;
}

const miniTabs = [
  { id: 1, text: "OTC Benefits" },
  { id: 2, text: "Part B Coverage" },
  { id: 3, text: "BvD Processing" },
  { id: 4, text: "Part D Enhanced/EGWP" },
  { id: 5, text: "LIS" },
  { id: 6, text: "Member Level Conditions" },
];
const steps = [
  "Setup",
  "Construct",
  "Compare",
  "Validation",
  "Complete",
  "Bazaar",
];
class MediCareTabs extends React.Component<any, any> {
  state = {
    miniTabs: miniTabs,
    activeMiniTabIndex: 0,
    gridData: [],
    gridColumn: [],
    AddNewPopupInd:false,
    selectedAddNewFormularyRadio:"AddRemoveCriteria",
  };
  onClickMiniTab = (selectedTabIndex: number) => {
    let activeMiniTabIndex = 0;

    const tabs = this.state.miniTabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeMiniTabIndex = index;
      }
      return tab;
    });
    this.setState({ tabs, activeMiniTabIndex });
  };
 



  renderActiveMiniTabContent = () => {
    const miniTabIndex = this.state.activeMiniTabIndex;
    switch (miniTabIndex) {
      case 0:
        return <div>
            <OTCBenefits />
             </div>;
      case 1:
        return <div>Add/Remove NDCs</div>;
      case 2:
        return <div>
          <BVDProcessing />
        </div>;
      case 3:
        return <div>
          <PartDEnhancedTab />
        </div>;
      case 4:
        return <div>
          <LisTab />
        </div>;
      case 5:
        return <div>Group 5</div>;
    }
  };
 

  render() {
    return (
      <>
        <FrxMiniTabs
          tabList={this.props.tabs ? this.props.tabs : this.state.miniTabs}
          activeTabIndex={this.state.activeMiniTabIndex}
          onClickTab={this.onClickMiniTab}
        />
        <div className="formulary-mini-tabs-info">
          {this.renderActiveMiniTabContent()}
        </div>
        
     
      </>
    );
  }
}

export default MediCareTabs;
