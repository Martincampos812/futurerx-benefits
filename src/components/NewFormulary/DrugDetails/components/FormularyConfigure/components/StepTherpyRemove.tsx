import React from "react";
import FrxDrugGridContainer from "../../../../../shared/FrxGrid/FrxDrugGridContainer";
import FrxGridContainer from "../../../../../shared/FrxGrid/FrxGridContainer";
import {
  getStDetails,
  getStDetailsCol2,
} from "../../FormularyConfigure/DrugGridColumn";
import Button from "../../../../../shared/Frx-components/button/Button";  
import { stData, stDataTableTwo } from "../../../../../../mocks/DrugGridMock";
import DialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import STPopup from "./STPopup/STpopup"
import "../../../../../ClaimsGrid/ClaimsGrid.scss";
import { Input } from "@material-ui/core";
import "./STRemove.scss";

export default class DrugGrid extends React.Component<any, any> {
  state = {
    isFetchingData: false,
    data: [] as any[],
    filteredData: [] as any[],
    filteredDataForTwo: [] as any[],
    materialPopupInd: false,    
    show:false,
  };

  onClose = () => {
    console.log("close");
    this.setState({ materialPopupInd: false });
    return true;
  };
  closeClaimsResult = () => {
    this.setState({ materialPopupInd: false });
  };
  handleIconClick = () => {
    this.setState({ materialPopupInd: true });
  }
  processCloseActions = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    //fetch data from API
    const data = stData();
    const data2 = stDataTableTwo();
    this.setState({ data, filteredData: data });
    this.setState({ data2, filteredDataForTwo: data2 });
  }
  handleSearch = (searchObject) => {
    console.log(searchObject);
    this.setState({ isFetchingData: true });
    if (searchObject && searchObject.status) {
      setTimeout(() => {
        const newData = this.state.data.filter(
          (d) => d.status === searchObject.status
        );
        this.setState({ isFetchingData: false, filteredData: newData });
      }, 2000);
    } else {
      this.setState({ isFetchingData: false });
    }
  };
  render() {
    const columns = getStDetails();
    const columns2 = getStDetailsCol2();
    return (
      <>
        <div className="bordered ns-border">
          <div className="header">Drug Grid</div>
          <div className="inner-container st-remove-grid">
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
                                isFetchingData={this.state.isFetchingData}
                                columns={columns}
                                isPinningEnabled={true}
                                scroll={{  y: 377 }}
                                enableResizingOfColumns
                                data={this.state.filteredData}
                                isCustomCheckboxEnabled={true}
                                handleCustomRowSelectionChange={(r) => {
                                  console.log(r);
                                }}
                              />      
          </div>
        </div>
            <Button label="Apply" className="apply-btn" />
          </div>
        </div>
        <br />
        <div className="bordered ns-border">
          <div className="header header space-between pr-10">
            Drug Grid
            <div className="button-wrapper">
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
                      onClick={(e) => this.handleIconClick()}
                        className="Button normal"
                        label="Advance Search"
                      />
                      <Button label="Save" disabled />
                    </div>
            </div>

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
                                columns={columns2}
                                isPinningEnabled={true}
                                scroll={{ x:1600, y: 377 }}
                                enableResizingOfColumns
                                data={this.state.filteredDataForTwo}
                                isCustomCheckboxEnabled={true}
                                handleCustomRowSelectionChange={(r) => {
                                  console.log(r);
                                }}
                              />      
          </div>
        </div>
        </div>
        <DialogPopup
            className="frx-claims-result-root"
            showCloseIcon={true}
            positiveActionText="Clear"
            negativeActionText="Apply Search"
            title="Advanced Search"
            handleClose={() => {
                this.onClose();
              }}
              handleAction={() => {
                this.processCloseActions();
              }}
            showActions={true}
            open={this.state.materialPopupInd}
            >
            <STPopup />
           
          </DialogPopup>
      </>
    );
  }
}
