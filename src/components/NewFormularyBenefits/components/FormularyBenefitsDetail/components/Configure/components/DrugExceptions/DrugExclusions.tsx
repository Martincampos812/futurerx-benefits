import React from "react";
import { TabInfo } from "../../../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import DrugListLevel from "./components/DrugListLevel/DrugListLevel";

import "./DrugExclusions.scss";

export default class DrugExclusions extends React.Component<any, any> {

    state = {
        tabs: [
            {
                id: 1,
                text: "Attribute Level"
            },
            {
                id: 2,
                text: "Drug List Level"
            }
        ],
        activeTabIndex: 0,
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
        switch (tabIndex) {
            case 0:
                return <div>1</div>
            case 1:
                return <DrugListLevel />
        }
    }

    render() {
        return (
            <div className="drug-exclusions-wrapper">
                <div className="heading-wrapper">
                    <h4>GENERAL INFORMATION</h4>
                </div>
                <div className="drug-exclusions-tabs">
                    <FrxMiniTabs
                        tabList={this.state.tabs}
                        activeTabIndex={this.state.activeTabIndex}
                        onClickTab={this.onClickTab}
                    />
                </div>
                <div className="drug-exclusions-tabs-info">{this.renderActiveTabContent()}</div>
            </div>
        )
    }
}