import React from "react";
import { Grid } from "@material-ui/core";
import FrxMiniTabs from "../../../../shared/FrxMiniTabs/FrxMiniTabs";
import { TabInfo } from "../../../../../models/tab.model";
import { getCommercialConfigurationDrugDetailsTabsList } from '../../../../../mocks/formulary/mock-data';
import AL from './components/AL/AL';
import GL from './components/GL/GL';
import ICD from './components/ICD/ICD';
import PN from './components/PN/PN';
import PT from './components/PT/PT';
import POS from './components/POS/POS';
import PR from './components/PR/PR';
import FFF from './components/FFF/FFF';
import Other from './components/Other/Other';


interface drugDetailsState {
  activeTabIndex: number;
  tabs: Array<TabInfo>;
}

export default class DrugDetails extends React.Component<any,drugDetailsState>{
    state = {
        activeTabIndex: 0,
        tabs: getCommercialConfigurationDrugDetailsTabsList()
    }
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
        switch(tabIndex){
            case 0:
                return <AL/>
            case 1:
                return <GL/>
            case 2:
                return <ICD/>
            case 3:
                return <PN/>
            case 4:
                return <PT/>
            case 5:
                return <POS/>
            case 6:
                return <PR/>
            case 7:
                return <FFF/>
            case 8:
                return <Other/>
        }
    }
    
  render() {
    return (
      <>
        <div className="bordered details-top">
          <div className="header">Drug Details</div>
          <div className="inner-container">
            <div className="configure-mini-tabs">
              <FrxMiniTabs
                tabList={this.state.tabs}
                activeTabIndex={this.state.activeTabIndex}
                onClickTab={this.onClickTab}
              />
            </div>
            <div className="tabs-info">{this.renderActiveTabContent()}</div>
          </div>
        </div>
      </>
    );
  }
}
