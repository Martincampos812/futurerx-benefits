import React from "react";
import { TabInfo } from "../../../../../../models/tab.model";
import FrxTabs from "../../../../../shared/FrxTabs/FrxTabs";
import Assignment from "./components/Assignment/Assignment";
import Availablity from "./components/Availablity/Availablity";
import BenefitInfo from "./components/BenefitInfo/BenefitInfo";
import BenefitsExceptions from "./components/BenefitsExceptions/BenefitsExceptions";
import DrugExclusions from "./components/DrugExceptions/DrugExclusions";
import Medicare from "./components/Medicare/Medicare";
import Plan from "./components/Plan/Plan";
import Transition from "./components/Transition/Transition";
import View from "./components/View/View";
const miniTabs = [
    { id: 1, text: "DRUG EXCLUSIONS" },
    { id: 2, text: "BENEFIT INFO" },
    { id: 3, text: "PLAN" },
    { id: 4, text: "TRANSITION" },
    { id: 5, text: "MEDICARE" },
    { id: 6, text: "DRUG EXCEPTIONS" },
    { id: 7, text: "BENEFIT EXCEPTIONS" },
    { id: 8, text: "ASSIGNMENT" },
    { id: 9, text: "AVAILABLITY" },
    { id: 10, text: "VIEW" },
  ];
export default class FormularyBenefitsDetailConfigure extends React.Component<any, any> {
    state = {
        tabs: miniTabs,
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
            return <DrugExclusions />; 
        case 1:
            return <BenefitInfo />;
        case 2:
            return <Plan />; 
        case 3:
            return <Transition />;
        case 4:
            return <Medicare />; 
        case 5:
            return <DrugExclusions />;
        case 6:
            return <BenefitsExceptions />; 
        case 7:
            return <Assignment />;
        case 8:
            return <Availablity />; 
        case 9:
            return <View />;   
    }
    };
render(){
    return(
        <div className="drug-details-bottom">
          <FrxTabs
            tabList={this.state.tabs}            
            activeTabIndex={this.state.activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className="inner-container">{this.renderActiveTabContent()}</div>
        </div>
    )
}
}