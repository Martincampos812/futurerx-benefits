import React from "react";

import { TabInfo } from "../../../../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import MandatoryFills from '../MandatoryFills/MandatoryFills';

interface State {
  miniTabs: Array<TabInfo>;
  activeMiniTabIndex: number;
  gridData: any;
  gridColumn: any;
  AddNewPopupInd:boolean;
  selectedAddNewFormularyRadio:any;
}

const miniTabs = [
  { id: 1, text: "Mandatory Fills" },
  { id: 2, text: "Formulary" },
  { id: 3, text: "Cost Share" },
  
];
const steps = [
  "Setup",
  "Construct",
  "Compare",
  "Validation",
  "Complete",
  "Bazaar",
];
class PlanTabs extends React.Component<any, any> {
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
            <MandatoryFills />
             </div>;
      case 1:
        return <div>Add/Remove NDCs</div>;
      case 2:
        return <div>
          yes
        </div>;
    
    
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

export default PlanTabs;
