import React, { Component } from "react";

import IconInfo from "../../../../../../assets/icons/IconInfo.svg";
import PlusIcon from "../../../../../../assets/icons/PlusIcon.svg";
import DownloadIcon from "../../../../../../assets/icons/DownloadIcon.svg";
import EditIcon from "../../../../../../assets/icons/EditIcon.svg";

import Button from "../../../../../shared/Frx-components/button/Button";
import AdvancedSearch from "../../../../../shared/Frx-components/advancesearchbuilder";

import PAGroupDescription from "../../CommercialConfigure/PAGroupDescription";
import { TabInfo } from "../../../../../../models/tab.model";
import {
  getColumns,
  getData,
  getDrugsList,
} from "../../../../../../mocks/formulary-grid/FormularySimpleGridMock";
import { getDrugsPAGridColumns } from "../../../../../../mocks/formulary-grid/FormularyGridColumn";
import { getDrugsPAGridData } from "../../../../../../mocks/formulary-grid/FormularyGridData";
import FrxLoader from "../../../../../shared/FrxLoader/FrxLoader";
import FrxGridContainer from "../../../../../shared/FrxGrid/FrxGridContainer";
import SimpleGrid from "../../../../../shared/Frx-formulary/SimpleGrid/SimpleGrid";
import { getSearchMock } from "../../../../../../mocks/formulary/searchMock";
import FrxMiniTabs from "../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import CustomizedSwitches from "../../../../DrugDetails/components/FormularyConfigure/components/CustomizedSwitches";
import FrxDialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import "./style.scss";

export interface FormularyGridDS {
  key: string;
  formularyName: string;
  formularyId: string;
  formularyVersion: number;
  contractYeat: string;
  formularyType: string;
  effectiveDate: string;
}
interface MassMaintenancePAState {
  isGroupDescPopupEnabled: boolean;
  gridData: FormularyGridDS[];
  isSearchOpen: boolean;
  isFormularyGridShown: boolean;
  columns: any;
  data: any;
  pinData: {
    value: boolean;
  };
  scroll: {
    x: number;
    y: number;
  };
  miniTabs: TabInfo[];
  activeMiniTabIndex: number;
  drugsList: any[];
}
export default class PriorAuthorization extends Component<
  any,
  MassMaintenancePAState
> {
  state = {
    isGroupDescPopupEnabled: false,
    isSearchOpen: false,
    gridData: getData(),
    gridColumns: getColumns(),
    drugsList: getDrugsList(),
    isFormularyGridShown: false,
    columns: [],
    data: [],
    pinData: {
      value: false,
    },
    scroll: {
      x: 960,
      y: 450,
    },
    miniTabs: [
      {
        id: 1,
        text: "Replace",
      },
      {
        id: 2,
        text: "Append",
      },
      {
        id: 3,
        text: "Remove",
      },
    ],
    activeMiniTabIndex: 0,
  };

  action = () => {
    console.log("no action to perform");
  };

  addNew = () => {};
  advanceSearchClickHandler = (event) => {
    event.stopPropagation();
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  };
  advanceSearchClosekHandler = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  };
  saveClickHandler = () => {};
  rowSelectionChange = (r) => {
    console.log(r);
  };
  componentDidMount() {
    this.setState({
      columns: getDrugsPAGridColumns(),
      data: getDrugsPAGridData(),
    });
  }
  onClickMiniTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = this.state.miniTabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeTabIndex = index;
      }
      return tab;
    });
    this.setState({ miniTabs: tabs, activeMiniTabIndex: activeTabIndex });
  };

  openGroupDescription = () => {
    this.setState({
      isGroupDescPopupEnabled: !this.state.isGroupDescPopupEnabled,
    });
  };

  closeGroupDescription = () => {
    this.setState({
      isGroupDescPopupEnabled: !this.state.isGroupDescPopupEnabled,
    });
  };
  render() {
    const {
      gridData,
      gridColumns,
      isSearchOpen,
      miniTabs,
      activeMiniTabIndex,
      isGroupDescPopupEnabled,
    } = this.state;
    const { columns, data, scroll, pinData } = this.state;
    let dataGrid = <FrxLoader />;
    if (data) {
      dataGrid = (
        <FrxGridContainer
          enableSearch={false}
          enableColumnDrag
          onSearch={() => {}}
          fixedColumnKeys={[]}
          pagintionPosition='topRight'
          gridName=''
          isFetchingData={false}
          columns={columns}
          scroll={scroll}
          enableResizingOfColumns={false}
          data={data}
          isPinningEnabled={false}
          enableSettings={true}
          isCustomCheckboxEnabled={true}
          handleCustomRowSelectionChange={(r) => {
            console.log(r);
          }}
        />
      );
    }
    return (
      <div className='bordered details-top commercial-mm-pa-root'>
        <div className='inner-container'>
          <div className='mm-pa-root'>
            <div className='bordered details-top'>
              <div className='header'>
                SELECTED FORMULARIES
                <span>
                  &nbsp; &nbsp;
                  <img src={IconInfo} alt='info' />
                </span>
              </div>
              <div className='inner-container p-20'>
                <div>
                  <SimpleGrid columns={gridColumns} data={gridData} />
                </div>
                <div className='dynamic-row-addition'>
                  <span onClick={this.addNew}>
                    <img src={PlusIcon} alt='PlusIcon' />
                    &nbsp;
                    <span className='__add-new-row'>add new</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='bordered mm-configure details-top'>
              <div className='header'>
                <div className='mini-container'>
                  <div>
                    SELECT DRUGS FOR PRIOR AUTHORIZATION
                    <span>
                      &nbsp; &nbsp;
                      <img src={IconInfo} alt='info' />
                    </span>
                  </div>
                </div>
                <div className='button-wrapper'>
                  <Button
                    className='Button normal'
                    label='Advance Search'
                    onClick={this.advanceSearchClickHandler}
                  />
                  <Button
                    label='Save'
                    onClick={this.saveClickHandler}
                    disabled
                  />
                  <img
                    style={{
                      marginLeft: "10px",
                    }}
                    src={DownloadIcon}
                    alt='DownloadIcon'
                  />
                </div>
              </div>
              <div className='inner-container mm-configure-grid p-20'>
                {dataGrid}
                {isSearchOpen ? (
                  <AdvancedSearch
                    category='Grievances'
                    openPopup={isSearchOpen}
                    onClose={this.advanceSearchClosekHandler}
                    categoriesData={getSearchMock()}
                  />
                ) : null}
              </div>
            </div>
            <div className='bordered mm-configure-pa-auth details-top'>
              <div className='header'>PRIOR AUTHORIZATION</div>
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
                    tabList={miniTabs}
                    activeTabIndex={activeMiniTabIndex}
                    onClickTab={this.onClickMiniTab}
                  />
                </div>
              </div>
              <div className='inner-container mm-configure-pa-auth-grid p-20'>
                {gridData.map((drug, index) => (
                  <div
                    key={`${drug.formularyName}_${index}`}
                    className='mm-configure-pa-auth-grid-item'
                  >
                    <div>
                      <span className='font-style'>{drug.formularyName}</span>
                    </div>
                    {drug.formularyName === "2021Care1234" ? (
                      <div className='mini-flex-container'>
                        <div className='input-groups'>
                          <label className='uppercase'>
                            pa group description &nbsp;
                            <span className='asterisk'>*</span>
                          </label>
                          <div className='input-element'>
                            <div
                              className='bordered pointer'
                              onClick={this.openGroupDescription}
                            >
                              <span className='inner-font'>
                                ADHD PA over 25
                              </span>
                              <img src={EditIcon} alt='EditIcon' />
                            </div>
                          </div>
                        </div>
                        <div className='input-groups'>
                          <label className='uppercase'>
                            pa type &nbsp;
                            <span className='asterisk'>*</span>
                          </label>
                          <div className='input-element'>
                            <div className='bordered'>
                              <span className='no-inner-font'>
                                New Starts Only (2)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='fancy'>
                        <span className='fancy-font'>
                          Not applicable for this formulary
                        </span>
                      </div>
                    )}
                  </div>
                ))}

                <div className='button-container-root'>
                  <span className='white-bg-btn'>
                    <Button label='Save' onClick={() => {}} />
                  </span>
                  <Button label='Save & Continue' onClick={() => {}} />
                </div>
              </div>
            </div>
            {isGroupDescPopupEnabled ? (
              <FrxDialogPopup
                positiveActionText=''
                negativeActionText='Close'
                title='Group Description'
                handleClose={this.closeGroupDescription}
                handleAction={this.action}
                open={isGroupDescPopupEnabled}
                showActions={false}
                className=''
                height='80%'
                width='90%'
              >
                <PAGroupDescription />
              </FrxDialogPopup>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
