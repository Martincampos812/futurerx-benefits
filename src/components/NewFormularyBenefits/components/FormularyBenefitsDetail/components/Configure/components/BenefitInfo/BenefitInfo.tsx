
import React from "react";
import { TabInfo } from "../../../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import "./BenefitInfo.scss";
import COB from "./components/COB/COB";
import DMR from "./components/DMR/DMR";
import Incentive from "./components/Incentive/Incentive";
import PaperClaims from "./components/PaperClaims/PaperClaims";
import SCC from "./components/SCC/SCC";
import ShortCycleDosing from "./components/ShortCycleDosing/ShortCycleDosing";
import VaccineAdministration from "./components/VaccineAdministration/VaccineAdministration";
const miniTabs = [
    { id: 1, text: "COB" },
    { id: 2, text: "DMR" },
    { id: 3, text: "Paper Claims" },
    { id: 4, text: "SCC" },
    { id: 5, text: "Incentive" },
    { id: 6, text: "Short Cycle Dispensing/Maintenance Dosing" },
    { id: 7, text: "Vaccine Administration" },
  ];
export default class BenefitInfo extends React.Component<any, any> {
    state = {
        miniTabs: miniTabs,
        activeMiniTabIndex: 0      
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
            return <COB />;
          case 1:
            return <DMR />;
          case 2:
            return <PaperClaims />;
          case 3:
            return <SCC />;
          case 4:
            return <Incentive />;
          case 5:
            return <ShortCycleDosing />;
        case 6:
            return <VaccineAdministration />;
        }
      };
render(){
    return(
        <div className="benefit-info-container">
            <FrxMiniTabs
            tabList={this.props.tabs ? this.props.tabs : this.state.miniTabs}
            activeTabIndex={this.state.activeMiniTabIndex}
            onClickTab={this.onClickMiniTab}
            />
            <div className="formulary-mini-tabs-info">
            {this.renderActiveMiniTabContent()}
            </div>
        </div>
    )
}
}