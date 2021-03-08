import React from "react";
import { TabInfo } from "../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../shared/FrxMiniTabs/FrxMiniTabs";

const formInformationPanelTabs = [
  {
    id: 1,
    text: "PA Criteria Change Indicator",
  },
  {
    id: 2,
    text: "PA Indication Indicator",
  },
];

const FormInformationPanel = (props: any) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const onClickTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = formInformationPanelTabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeTabIndex = index;
      }
      return tab;
    });

    setActiveTabIndex(activeTabIndex);
  };

  const renderActiveTabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div className='pa-form-information-panel__criteria'>
            Value is assigned based on a comparison of the current criteria and
            criteria applied to the previous year's formulary that the current
            year most closely resembles, defined in the Formulary General
            Information Page. Any difference will result in the value to be 1.
          </div>
        );
      case 1:
        return (
          <div className='pa-form-information-panel__indication'>
            <div>
              <div className='pa-form-information-panel__indication-text'>
                <span className='prefix-text'>1</span>
                <div>
                  All FDA-approved Indications. This value cannot be used if the
                  drug that requires PA is subject to Indication-Based Coverage
                  (IBC).
                </div>
              </div>
              <div className='pa-form-information-panel__indication-text'>
                <span className='prefix-text'>2</span>
                <div>
                  Some FDA-approved Indications Only. This value is to be
                  submitted for drugs that are subject to IBC.
                </div>
              </div>
              <div className='pa-form-information-panel__indication-text'>
                <span className='prefix-text'>3</span>
                <div>
                  All Medically-accepted Indications. Drugs for which the PA
                  will be approved for all Part D medically-accepted indications
                  (FDA-approved and compendia-supported) should be submitted
                  with a 3.
                </div>
              </div>
              <div className='pa-form-information-panel__indication-text'>
                <span className='prefix-text'>4</span>
                <div>
                  All FDA-approved Indications, Some Medically-accepted
                  Indications. If the PA will only be approved for specific
                  off-label uses, a 4 should be submitted. The additional
                  off-label uses should be submitted in the subsequent Off-Label
                  Uses field.
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='pa-form-information-panel'>
      <div className='inner-container'>
        <div className='configure-mini-tabs'>
          <FrxMiniTabs
            tabList={formInformationPanelTabs}
            activeTabIndex={activeTabIndex}
            onClickTab={onClickTab}
          />
        </div>
      </div>
      <div>{renderActiveTabContent()}</div>
    </div>
  );
};

export default FormInformationPanel;
