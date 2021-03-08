import React, { useState } from "react";
import Button from "../../../../../../../shared/Frx-components/button/Button";
import { Box, Grid } from "@material-ui/core";
import { Tag } from "antd";
import AdditionalCriteriaPopup from "../AdditionalCriteriaPopup";
import { ReactComponent as AngleDownIcon } from "../../assets/angledown.svg";
import { ReactComponent as VersionHistoryIcon } from "../../assets/versionhistory.svg";
import { ReactComponent as CloneIcon } from "../../assets/clone.svg";
import { ReactComponent as PlusCircleIcon } from "../../assets/pluscircle.svg";
import { ReactComponent as CrossCircleIcon } from "../../assets/crosscircle.svg";
import { ReactComponent as ArchiveIcon } from "../../assets/archive.svg";
import { ReactComponent as CrossCircleWhiteBGIcon } from "../../assets/crosscirclewhitebg.svg";
import { TabInfo } from "../../../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import RadioButton from "../../../../../../../shared/Frx-components/radio-button/RadioButton";
import SearchableDropdown from "../../../../../../../shared/Frx-components/SearchableDropdown";

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
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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

export default function PaGroupForm(props: any) {
  const [isAdvanceSearchPopupOpen, setAdvanceSearchPopup] = useState(false);
  const advanceSearchHandler = () => {
    setAdvanceSearchPopup(!isAdvanceSearchPopupOpen);
  };

  return (
    <div className='new-group-des'>
      <div className='panel header'>
        <span>NEW GROUP DESCRIPTION</span>
      </div>
      <div className='version-wrapper'>
        <div className='item-text version-dd'>
          Group Description Version 1
          <AngleDownIcon />
        </div>
        <div className='item'>
          <VersionHistoryIcon />
          Version History
        </div>
        <div className='item'>
          <CloneIcon />
          Clone
        </div>
        <div className='item'>
          <PlusCircleIcon />
          New Version
        </div>
        <div className='item'>
          <CrossCircleIcon />
          Delete
        </div>
        <div className='item'>
          <ArchiveIcon />
          Archive
        </div>
      </div>

      <div className='inner-container pa-new-group-form'>
        <div className='setting-1'>
          <span className='required-field'>
            What is the default pa type for this description?
          </span>
          <div className='marketing-material radio-group'>
            <RadioButton
              label='Always Applies'
              name='pa-defaultdescription-material-radio'
              defaultChecked={true}
            />
            <RadioButton
              label='New Starts Only'
              name='pa-defaultdescription-material-radio'
            />
          </div>
          <Grid container>
            <Grid item xs={12}>
              <div className='group'>
                <label className='required-field'>PA GROUP DESCRIPTION</label>
                <input type='textarea' className='setup-input-fields' />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='group'>
                <label className='required-field'>PA Criteria</label>
                <input type='textarea' className='setup-input-fields' />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='group'>
                <label className='required-field'>LIST</label>
                <SearchableDropdown options={[1, 2, 3]} />
                <Box className='pg-group-list-tags-box'>
                  <Tag
                    className='pg-group-list-tags'
                    closable
                    onClose={() => {}}
                    closeIcon={<CrossCircleWhiteBGIcon />}
                  >
                    Tag 1
                  </Tag>
                  <Tag
                    className='pg-group-list-tags'
                    closable
                    onClose={() => {}}
                    closeIcon={<CrossCircleWhiteBGIcon />}
                  >
                    Tag 4
                  </Tag>
                </Box>
              </div>
            </Grid>
            <Grid className='additional-criteria' item xs={6}>
              <span className='required-field'>
                do you want to add additional criteria?
              </span>
              <div className='marketing-material radio-group'>
                <RadioButton
                  defaultChecked={true}
                  onClick={() => advanceSearchHandler()}
                  label='Yes'
                  name='additional-criteria-material-radio'
                />
                <RadioButton
                  label='No'
                  name='additional-criteria-material-radio'
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='button-wrapper'>
          <Button label='Save Version Progress' className='Button' />
          <Button label='Save Final Version and Continue' className='Button' />
        </div>
      </div>
      {isAdvanceSearchPopupOpen ? (
        <AdditionalCriteriaPopup
          category='Grievances'
          openPopup={isAdvanceSearchPopupOpen}
          onClose={advanceSearchHandler}
        />
      ) : null}
    </div>
  );
}
