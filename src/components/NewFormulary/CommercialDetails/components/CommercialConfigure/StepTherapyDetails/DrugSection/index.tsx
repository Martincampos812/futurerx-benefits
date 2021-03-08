import React from "react";
import { Box, Grid, Input } from "@material-ui/core";
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

export default class DrugSection extends React.Component {
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
      ["Always Applies", "2", "2", "4", "2", "2", "2"],
      ["New Starts Only", "2", "3", "4", "1", "1", "1"],
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
        return <DrugReplace />;
      case 1:
        return <DrugReplace />;
      case 2:
        return <DrugRemove />;
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
        <div className="drug-detail-LA-root">
          <div className="drug-detail-la-container">
            <div className="drug-detail-la-inner">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="limited-access">
                    <PanelHeader title="STEP THERAPY - DRUG SELECTION" />
                    <div className="inner-container">
                      <PanelGrid
                        panelGridTitle={this.state.panelGridTitle}
                        panelGridValue={this.state.panelGridValue}
                      />
                      <div className="authorization-settings-holder">
                        <Grid
                          container
                          className="commercial-drug-remove-header"
                          justify="flex-end"
                          spacing={0}
                        >
                          <Grid
                            className="commercial-drug-remove-header-panel"
                            item
                            xs={6}
                          >
                            <PanelHeader title="STEP THERAPY SETTINGS" />
                          </Grid>
                          <Grid
                            className="commercial-drug-remove-header-right-panel white-bg"
                            item
                            xs={6}
                          >
                            <Box
                              display="flex"
                              justifyContent="flex-end"
                              m={1}
                              mr={2}
                            >
                              <CopyIcon />
                            </Box>
                          </Grid>
                        </Grid>
                        <div className="modify-wrapper white-bg">
                          <div className="modify-panel">
                            <div className="icon">
                              <span>R</span>
                            </div>
                            <div className="switch-box">
                              <CustomizedSwitches
                                leftTitle="Modify"
                                rightTitle="view all"
                              />
                            </div>
                            <div className="mini-tabs">
                              <FrxMiniTabs
                                tabList={this.state.tabs}
                                activeTabIndex={this.state.activeTabIndex}
                                onClickTab={this.onClickTab}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="pa-tab-content">
                          {this.renderTabContent()}
                        </div>
                        <Row justify="end" className="white-bg">
                          <Col>
                            <Button
                              onClick={() => this.applyBtnHandler()}
                              label="Apply"
                            ></Button>
                          </Col>
                        </Row>
                      </div>
                      {this.state.isDrugGrideVisible ? (
                        <div className="authorization-settings-holder commercial-drug-grid">
                          <Grid container justify="flex-end" spacing={0}>
                            <Grid
                              className="commercial-drug-header"
                              item
                              xs={6}
                            >
                              <PanelHeader title="DRUG GRID" />
                            </Grid>
                            <Grid
                              className="commercial-drug-header"
                              item
                              xs={6}
                            >
                              <Input
                        className="drug-details-search-input"
                        placeholder="Search"
                        type="text"
                        disableUnderline={true}
                        startAdornment={
                          <svg
                            className="member-search__icon"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z"
                              fill="#999999"
                            />
                          </svg> 
                        }
                      />
                              <Button
                                label="Advanced Search"
                                className="AdvancedButton"
                                onClick={() => this.advanceSearchHandler()}
                              />
                              <Button
                                label="Save"
                                className="SaveButton"
                                onClick={() => {}}
                              />
                            </Grid>
                          </Grid>
                          <div className="pa-grid-container white-bg ns-border">
                            <div className="pinned-table highlight-selected-record-pinned-table">
                              <FrxGridContainer
                                enableSearch={false}
                                enableColumnDrag
                                onSettingsClick="grid-menu"
                                settingsWidth={50}
                                onSearch={() => {}}
                                customSettingIcon={"RED-DOT"}
                                fixedColumnKeys={["claimId"]}
                                pagintionPosition="topRight"
                                gridName="DRUG GRID"
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
                              category="Grievances"
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
