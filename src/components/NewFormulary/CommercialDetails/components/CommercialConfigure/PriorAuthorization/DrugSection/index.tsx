import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Row, Col } from "antd";
import Button from "../../../../../../shared/Frx-components/button/Button";
import DrugReplace from "./DrugReplace";
import DrugRemove from "./DrugRemove";
import FrxGridContainer from "../../../../../../shared/FrxGrid/FrxGridContainer";
import { ReactComponent as CopyIcon } from "../assets/copy.svg";
import AdvancedSearch from "../../../../../../shared/Frx-components/advancesearchbuilder";
import { getMiniTabs } from "../../../../../../../mocks/formulary/mock-data";
import { TabInfo } from "../../../../../../../models/tab.model";
import PanelHeader from "../../../../../DrugDetails/components/FormularyConfigure/components/PanelHeader";
import PanelGrid from "../../../../../DrugDetails/components/FormularyConfigure/components/panelGrid";
import CustomizedSwitches from "../../../../../DrugDetails/components/FormularyConfigure/components/CustomizedSwitches";
import FrxMiniTabs from "../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import DropDown from "../../../../../../shared/Frx-components/dropdown/DropDown";
import { getCommercialDrugGridDetailsCol } from "../../../../../DrugDetails/components/FormularyConfigure/DrugGridColumn";
import { stDataTableTwo } from "../../../../../../../mocks/DrugGridMock";
import { getSearchMockForCommercialPriorAuthorization } from "../../../../../../../mocks/formulary/searchMock";

export default class DrugSection extends React.Component<any, any> {
  state = {
    tierGridContainer: false,
    miniTabs: getMiniTabs(),
    isFetchingData: false,
    activeMiniTabIndex: 0,
    activeTabIndex: 0,
    isDrugGrideVisible: false,
    isAdvanceSearchPopupOpen: false,
    tabs: [
      { id: 1, text: "Replace" },
      { id: 2, text: "Append" },
      { id: 3, text: "Remove" },
    ],
    panelGridTitle: [
      "TYPE",
      "NUMBER OF GROUPS",
      "ADDED GROUPS",
      "REMOVED GROUPS",
      "NUMBER OF DRUGS",
      "ADDED DRUGS",
      "REMOVED DRUGS",
    ],
    panelGridValue: [
      ["Always Applies", "4", "2", "4", "2", "2", "2"],
      ["New Starts Only", "6", "3", "4", "1", "1", "1"],
    ],
  };

  advanceSearchHandler = () => {
    this.setState({
      isAdvanceSearchPopupOpen: !this.state.isAdvanceSearchPopupOpen,
    });
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

  renderTabContent = () => {
    const activeTabIndex = this.state.activeTabIndex;
    switch (activeTabIndex) {
      case 0:
        return <DrugReplace isReadOnly={this.props.isReadOnly} />;
      case 1:
        return <DrugReplace isReadOnly={this.props.isReadOnly} />;
      case 2:
        return <DrugRemove isReadOnly={this.props.isReadOnly} />;
    }
  };

  applyBtnHandler = () => {
    this.setState({
      isDrugGrideVisible: true,
    });
  };

  render() {
    return (
      <>
        <div className='drug-detail-LA-root'>
          <div className='drug-detail-la-container'>
            <div className='drug-detail-la-inner'>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className='limited-access'>
                    <PanelHeader title='Prior Authorization - DRUG SELECTION' />
                    <div className='inner-container'>
                      <PanelGrid
                        panelGridTitle={this.state.panelGridTitle}
                        panelGridValue={this.state.panelGridValue}
                      />
                      <div className='authorization-settings-holder'>
                        <Grid
                          container
                          className='commercial-drug-remove-header'
                          justify='flex-end'
                          spacing={0}
                        >
                          <Grid
                            className='commercial-drug-remove-header-panel'
                            item
                            xs={6}
                          >
                            <PanelHeader title='Prior Authorization Settings' />
                          </Grid>
                          <Grid
                            className='commercial-drug-remove-header-right-panel white-bg'
                            item
                            xs={6}
                          >
                            <Box
                              display='flex'
                              justifyContent='flex-end'
                              m={1}
                              mr={2}
                            >
                              <CopyIcon />
                            </Box>
                          </Grid>
                        </Grid>
                        <div className='modify-wrapper white-bg'>
                          <div className='modify-panel'>
                            <div className='icon'>
                              <span>R</span>
                            </div>
                            <div className='switch-box'>
                              <CustomizedSwitches
                                leftTitle='Modify'
                                rightTitle='view all'
                              />
                            </div>
                            <div className='mini-tabs'>
                              <FrxMiniTabs
                                tabList={this.state.tabs}
                                activeTabIndex={this.state.activeTabIndex}
                                onClickTab={this.onClickTab}
                              />
                            </div>
                            <div>
                              <div className='PA-list tier-dropdown'>
                                <span className='list-label'>LIST</span>
                                <DropDown options={[1, 2, 3]} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='pa-tab-content'>
                          {this.renderTabContent()}
                        </div>
                        <Row justify='end' className='white-bg'>
                          <Col>
                            <Button
                              onClick={() => this.applyBtnHandler()}
                              label='Apply'
                            ></Button>
                          </Col>
                        </Row>
                      </div>
                      {this.state.isDrugGrideVisible ? (
                        <div className='authorization-settings-holder commercial-drug-grid'>
                          <Grid container justify='flex-end' spacing={0}>
                            <Grid
                              className='commercial-drug-header'
                              item
                              xs={6}
                            >
                              <PanelHeader title='DRUG GRID' />
                            </Grid>
                            <Grid
                              className='commercial-drug-header'
                              item
                              xs={6}
                            >
                              {!this.props.isReadOnly ? (
                                <>
                                  <Button
                                    label='Advanced Search'
                                    className='AdvancedButton'
                                    onClick={() => this.advanceSearchHandler()}
                                  />
                                  <Button
                                    label='Save'
                                    className='SaveButton'
                                    onClick={() => {}}
                                  />
                                </>
                              ) : null}
                            </Grid>
                          </Grid>
                          <div className='pa-grid-container white-bg ns-border'>
                            <div className='pinned-table highlight-selected-record-pinned-table'>
                              <FrxGridContainer
                                enableSearch={false}
                                enableColumnDrag
                                onSettingsClick='grid-menu'
                                settingsWidth={50}
                                onSearch={() => {}}
                                customSettingIcon={"RED-DOT"}
                                fixedColumnKeys={["claimId"]}
                                pagintionPosition='topRight'
                                gridName='DRUG GRID'
                                enableSettings
                                isFetchingData={false}
                                columns={getCommercialDrugGridDetailsCol()}
                                isPinningEnabled={true}
                                scroll={{ x: 1800, y: 377 }}
                                enableResizingOfColumns
                                data={stDataTableTwo()}
                                isCustomCheckboxEnabled={true}
                                handleCustomRowSelectionChange={(r) => {
                                  console.log(r);
                                }}
                              />
                            </div>
                          </div>
                          {this.state.isAdvanceSearchPopupOpen ? (
                            <AdvancedSearch
                              category='Grievances'
                              openPopup={this.state.isAdvanceSearchPopupOpen}
                              onClose={this.advanceSearchHandler}
                              categoriesData={getSearchMockForCommercialPriorAuthorization()}
                            />
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
  }
}
