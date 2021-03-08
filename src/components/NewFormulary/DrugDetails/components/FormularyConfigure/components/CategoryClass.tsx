import React from "react";
import { Grid, Input } from "@material-ui/core";
import "./Tier/Tier.scss";
import DialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import {
  getTapList,
  getMiniTabs,
} from "../../../../../../mocks/formulary/mock-data";
import PanelHeader from "./PanelHeader";
import PanelGrid from "./panelGrid";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import Button from "../../../../../shared/Frx-components/button/Button";
import Box from "@material-ui/core/Box";
import FrxDrugGridContainer from "../../../../../shared/FrxGrid/FrxDrugGridContainer";
import {
  categoryCommercialClassColumns,
  categoryClassColumns,
} from "../../../../../../utils/grid/columns";
import {
  categoryClassMock,
  categoryCommercialClassMock,
} from "../../../../../../mocks/categoryClassMock";
import STPopup from "./STPopup/STpopup";
import FormularyDetailsContext from "../../../../FormularyDetailsContext";
import FrxGridContainer from "../../../../../shared/FrxGrid/FrxGridContainer";
import { OverridePopup } from "./OverridePopup/OverridePopup";

interface State {
  activeMiniTabIndex: number;
  miniTabs: any;
  tabs: any;
  materialPopupInd: any;
  show: any;
  isSearchOpen: false;
  columns: any;
  data: any;
  filteredData: any;
}

class CategoryClass extends React.Component<any, any> {
  state = {
    miniTabs: getMiniTabs(),
    isFetchingData: false,
    activeMiniTabIndex: 0,
    activeTabIndex: 0,
    tabs: getTapList(),
    materialPopupInd: false,
    show: false,
    isSearchOpen: false,
    popupName: "",
    title: "",  
    columns: [] as any,
    data: [] as any,
    filteredData: [] as any,
    showActionsInd: false,
  };
  static contextType = FormularyDetailsContext;

  componentDidMount() {
    const data = this.getColumnsData();
    const columns = this.getColumns();
    console.log(data);
    this.setState({
      columns: columns,
      data: data,
      filteredData: data,
    });
  }

  getColumns = () => {
    switch (this.context.currentSelectedModule) {
      case "commercial":
        return categoryCommercialClassColumns();
        break;
      case "medicare":
        return categoryClassColumns();
        break;
      default:
        break;
    }
  };

  getColumnsData = () => {
    switch (this.context.currentSelectedModule) {
      case "commercial":
        return categoryCommercialClassMock();
        break;
      case "medicare":
        return categoryClassMock();
        break;
      default:
        break;
    }
  };

  onClickMiniTab = (num: number) => {
    this.setState({
      activeMiniTabIndex: num,
    });
  };

  onClose = () => {
    console.log("close");
    this.setState({ materialPopupInd: false });
    return true;
  };
  handleAddFileClick = () => {};
  
  handlePopupButtonClick = (popupName, title) => {
        this.setState({
      materialPopupInd: true,
      popupName: popupName,
      title: title,
  });
  if(popupName === "override"){
    this.setState({
      showActionsInd: true,      
  });  
  }
  else{
    this.setState({
      showActionsInd: false,      
  }); 
  }

  };
  processCloseActions = () => {
    this.setState({ show: true });
  };
  handleSearch = (searchObject) => {
    console.log("search");
  };
  rowSelectionChange = (record) => {
    console.log(record);
  };
  render() {
    return (
      <div className='drug-detail-LA-root'>
        <div className='drug-detail-la-container'>
          <div className='drug-detail-la-inner'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className='mb-10'>
                  <div className='limited-access'>
                    <PanelHeader
                      title='Category/Class View And ASSIGNMENT'
                      tooltip='This section allows for Addition or Removal of product only. To define coverage for all Medicare covered and/or Supplemental products, go to Drug Details'
                    />
                  </div>
                </div>
                <div className='bordered'>
                  <div className='header space-between pr-10'>
                    Select Drugs From
                    <div className='button-wrapper'>
                      {!this.props.isReadOnly &&
                        this.context.currentSelectedModule === "commercial" && (
                          <div className="float-left">
                          <div
                            className='add-file-button'
                            onClick={(e) => this.handlePopupButtonClick("override", "CATEGORY AND CLASS ASSIGNMENT")}
                          >
                            Override
                          </div>
                          <Input
                            className='member-search__input'
                            placeholder='Search'
                            type='text'
                            disableUnderline={true}
                            startAdornment={
                              <svg
                                className='member-search__icon'
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z'
                                  fill='#999999'
                                />
                              </svg>
                            }
                          />
                          </div>
                        )}
                      {!this.props.isReadOnly &&
                        this.context.currentSelectedModule === "medicare" && (
                          <div className="float-left">
                          <Input
                            className='member-search__input'
                            placeholder='Search'
                            type='text'
                            disableUnderline={true}
                            startAdornment={
                              <svg
                                className='member-search__icon'
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z'
                                  fill='#999999'
                                />
                              </svg>
                            }
                          />
                          <div
                            className='add-file-button margin-right'
                            onClick={(e) => this.handlePopupButtonClick("override", "CATEGORY AND CLASS ASSIGNMENT")}
                          >
                            Override
                          </div>
                          </div>
                        )}
                      {!this.props.isReadOnly ? (
                        <div
                          className='advance-search-button'
                          onClick={(e) => this.handlePopupButtonClick("advancesearch", "Advanced Search")}
                        >
                          Advanced Search
                        </div>
                      ) : null}
                      {!this.props.isReadOnly ? (
                        <Button label='Save' className='Button' disabled />
                      ) : null}
                    </div>
                  </div>
                  <FrxGridContainer
                    enableSearch={false}
                    enableColumnDrag={false}
                    onSearch={this.handleSearch}
                    fixedColumnKeys={[]}
                    pagintionPosition='topRight'
                    gridName=''
                    enableSettings={true}
                    customSettingIcon="NONE"
                    isFetchingData={this.state.isFetchingData}
                    columns={this.state.columns}
                    isPinningEnabled={false}
                    scroll={{ x: 0, y: 377 }}
                    enableResizingOfColumns={false}
                    data={this.state.filteredData}
                    isCustomCheckboxEnabled={true}
                    handleCustomRowSelectionChange={this.rowSelectionChange}
                    settingsTriDotClick={() => {
                      console.log("object");
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <DialogPopup
          className='frx-override-result-root'
          showCloseIcon={this.state.showActionsInd}
          positiveActionText="Assign"
          negativeActionText="Cancel"
          title={this.state.title}
          handleClose={() => {
            this.onClose();
          }}
          handleAction={() => {
            this.processCloseActions();
          }}
          showActions={this.state.showActionsInd}
          open={this.state.materialPopupInd}
        >
          {this.state.popupName === "advancesearch" ?
          <STPopup />
          : this.state.popupName === "override" ?
          <OverridePopup />
          : ""
        }
        </DialogPopup>
      </div>
    );
  }
}

export default CategoryClass;
