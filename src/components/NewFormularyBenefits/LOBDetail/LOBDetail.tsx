import React from "react";
import { Input } from "@material-ui/core";
import { TabInfo } from "../../../models/tab.model";
import FrxMiniTabs from "../../shared/FrxMiniTabs/FrxMiniTabs";
import { BenefitsGridColumns, formularyDetailsGridColumns } from "../../../utils/grid/columns";
import FrxGridContainer from "../../shared/FrxGrid/FrxGridContainer";
import FrxLoader from "../../shared/FrxLoader/FrxLoader";
import PanelHeader from "../../shared/Frx-components/panel-header/PanelHeader";
import "./LOBDetail.scss";
import DropDown from "../../shared/Frx-components/dropdown/DropDown";
import { Popover } from "antd";
import DialogPopup from "../../shared/FrxDialogPopup/FrxDialogPopup";
import RadioButton from "../../shared/Frx-components/radio-button/RadioButton";
import Grid from "@material-ui/core/Grid";
import { getBenefitDetails } from "../../../mocks/formulary/formularyDetails";
interface State {
  miniTabs: Array<TabInfo>;
  activeMiniTabIndex: number;
  gridData: any;
  gridColumn: any;
  AddNewPopupInd: boolean;
  selectedAddNewFormularyRadio: any;
}

const miniTabs = [
  { id: 1, text: "All" },
  { id: 2, text: "Add/Remove NDCs" },
  { id: 3, text: "Add/Remove Criteria" },
  { id: 4, text: "Payment Override" },
  { id: 5, text: "Group 4" },
  { id: 6, text: "Group 5" },
];
const steps = [
  "Setup",
  "Construct",
  "Compare",
  "Validation",
  "Complete",
  "Bazaar",
];
class LOBDetail extends React.Component<any, any> {
  state = {
    miniTabs: miniTabs,
    activeMiniTabIndex: 0,
    gridData: [],
    gridColumn: [],
    AddNewPopupInd: false,
    selectedAddNewFormularyRadio: "AddRemoveCriteria",
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
  onClickAddNewFormulary(selectedOption: any) {
    if (selectedOption == "createNew") {
      this.openAddNewPopup();
    }
  }

  addNewBenefit = () => {
    this.props.addNewFormulary("new benefits")
  }

  openAddNewPopup() {
    this.setState({ AddNewPopupInd: true });
  }

  handleAddNewPopupAction(action: any) {
    if (action === "positive") {
      this.props.addNewFormulary(this.state.selectedAddNewFormularyRadio);
    }
  }
  handleAddNewFormularyRadioOptionChange = (e) => {
    this.setState({
      selectedAddNewFormularyRadio: e.target.value,
    });
  };
  closeAddNewPopop() {
    this.setState({ AddNewPopupInd: false });
  }

  getVariant(label: any, type: any) {
    if (label === "N/A" && type === "block") {
      return 4;
    }
    if (label === "Sell" && type === "block") {
      return 2;
    }
    if (label === "Selling" && type === "block") {
      return 1;
    }

    if (label === "Purchased" && type === "pill") {
      return 6;
    }

    if (label === "Imported" && type === "pill") {
      return 2;
    }
    if (label === "Created" && type === "pill") {
      return 1;
    }

  }

  renderActiveMiniTabContent = () => {
    const miniTabIndex = this.state.activeMiniTabIndex;
    switch (miniTabIndex) {
      case 0:
        return this.getGridData(this.props.baseData);
      case 1:
        return <div>Add/Remove NDCs</div>;
      case 2:
        return <div>Add/Remove Criteria</div>;
      case 3:
        return <div>Payment Override</div>;
      case 4:
        return <div>Group 4</div>;
      case 5:
        return <div>Group 5</div>;
    }
  };
  updateHiddenGridColumn = (hiddenColumns) => {
    const getKey = hiddenColumns.map((e) => e.key);
    const updatedFormularyDetailsGridColumns = formularyDetailsGridColumns();
    console.log(updatedFormularyDetailsGridColumns);
    const updatedColumns = updatedFormularyDetailsGridColumns.map((e) => {
      if (getKey.indexOf(e.key) !== -1) {
        e.hidden = true;
      }
      return e;
    });
    return updatedColumns;
  };
  getGridData = (baseData) => {
    let grid = <FrxLoader />;
    let gridData = null;
    let hiddenColumns = [];
    gridData = baseData
      ? baseData.map((e, index: any) => {
        return {
          id: index + 1,
          key: index + 1,
          service_year: e.service_year,
          bazaar: {
            label: e.bazaar.label,
            type: "block",
            variant: this.getVariant(e.bazaar.label, "block"),
            fill: "fill",
          },
          origin: {
            label: e.origin.label,
            type: "pill",
            variant: this.getVariant(e.origin.label, "pill"),
            fill: "fill",
          },
          component_name: e.component_name,
          description: e.description,
          version_number: e.version_number,
          assemblyType: {
            label: e.assemblyType.label,
            type: "block",
            variant: 5,
            fill: "fill",
          },
        };
      })
      : null;
    const addNewButtonDDContent = <div className="add-new-dd"><p className="newFormularyOptions" onClick={() => this.onClickAddNewFormulary("createNew")}>Create New</p><p onClick={() => this.onClickAddNewFormulary('buyFromBazaar')}>Buy from Bazaar</p></div>;
    return gridData ? (
      <div className="formulary-benefit-grid-landing-page">
        <div className="bordered">
          <div className="formulary-grid-panel-header-container">
            <PanelHeader
              title="BENEFITS LIST"
              tooltip="BENEFITS LIST"
              className="formulary-grid-panel-header"
            />
            <div className="fields-container">
              <div className="field-container">
                <DropDown
                  className="formulary-type-dropdown"
                  placeholder="All"
                  options={["All", "None"]}
                />
              </div>
              <div className="field-container">
                <Input
                  className="formulary-list-search"
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
              </div>
              <div className="field-container">
                <DropDown
                  className="formulary-type-dropdown"
                  placeholder="Active"
                  options={["Active", "Inactive"]}
                />
              </div>
            </div>
            <div className="panel-divider"></div>
            <Popover content={addNewButtonDDContent} trigger="" placement="bottom">
              <div className="add-new-formulary-button">Add New Benefits:
              <span
                  className="new-formulary-icon svg-icon"
                  onClick={(e) => this.addNewBenefit()}
                >
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3.5V14.5C12 15.3284 11.3284 16 10.5 16H1.5C0.671562 16 0 15.3284 0 14.5V3.5C0 2.67156 0.671562 2 1.5 2H4C4 0.897187 4.89719 0 6 0C7.10281 0 8 0.897187 8 2H10.5C11.3284 2 12 2.67156 12 3.5ZM6 1.25C5.58578 1.25 5.25 1.58578 5.25 2C5.25 2.41422 5.58578 2.75 6 2.75C6.41422 2.75 6.75 2.41422 6.75 2C6.75 1.58578 6.41422 1.25 6 1.25ZM9 4.8125V4.1875C9 4.13777 8.98025 4.09008 8.94508 4.05492C8.90992 4.01975 8.86223 4 8.8125 4H3.1875C3.13777 4 3.09008 4.01975 3.05492 4.05492C3.01975 4.09008 3 4.13777 3 4.1875V4.8125C3 4.86223 3.01975 4.90992 3.05492 4.94508C3.09008 4.98025 3.13777 5 3.1875 5H8.8125C8.86223 5 8.90992 4.98025 8.94508 4.94508C8.98025 4.90992 9 4.86223 9 4.8125ZM5.5 7.5C5.5 7.22386 5.72386 7 6 7C6.27614 7 6.5 7.22386 6.5 7.5V9.5H8.5C8.77614 9.5 9 9.72386 9 10C9 10.2761 8.77614 10.5 8.5 10.5H6.5V12.5C6.5 12.7761 6.27614 13 6 13C5.72386 13 5.5 12.7761 5.5 12.5V10.5H3.5C3.22386 10.5 3 10.2761 3 10C3 9.72386 3.22386 9.5 3.5 9.5H5.5V7.5Z"
                      fill="#5F80B9"
                    />
                  </svg>
                </span>
                <span
                  className="new-formulary-upload-icon svg-icon"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M9.25 12.0001H6.75C6.33437 12.0001 6 11.6657 6 11.2501V6.0001H3.25938C2.70312 6.0001 2.425 5.32822 2.81875 4.93447L7.57188 0.178223C7.80625 -0.0561523 8.19063 -0.0561523 8.425 0.178223L13.1812 4.93447C13.575 5.32822 13.2969 6.0001 12.7406 6.0001H10V11.2501C10 11.6657 9.66562 12.0001 9.25 12.0001ZM16 11.7501V15.2501C16 15.6657 15.6656 16.0001 15.25 16.0001H0.75C0.334375 16.0001 0 15.6657 0 15.2501V11.7501C0 11.3345 0.334375 11.0001 0.75 11.0001H5V11.2501C5 12.2157 5.78438 13.0001 6.75 13.0001H9.25C10.2156 13.0001 11 12.2157 11 11.2501V11.0001H15.25C15.6656 11.0001 16 11.3345 16 11.7501ZM12.125 14.5001C12.125 14.1563 11.8438 13.8751 11.5 13.8751C11.1562 13.8751 10.875 14.1563 10.875 14.5001C10.875 14.8438 11.1562 15.1251 11.5 15.1251C11.8438 15.1251 12.125 14.8438 12.125 14.5001ZM14.125 14.5001C14.125 14.1563 13.8438 13.8751 13.5 13.8751C13.1562 13.8751 12.875 14.1563 12.875 14.5001C12.875 14.8438 13.1562 15.1251 13.5 15.1251C13.8438 15.1251 14.125 14.8438 14.125 14.5001Z"
                        fill="#5F80B9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  className="new-formulary-store-icon svg-icon"
                >
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8125 3.70625L16.7843 0.46875C16.6031 0.178125 16.2812 0 15.9375 0H3.31245C2.9687 0 2.64683 0.178125 2.46557 0.46875L0.43745 3.70625C-0.609425 5.37813 0.3187 7.70312 2.27495 7.96875C2.41558 7.9875 2.55932 7.99687 2.70307 7.99687C3.62807 7.99687 4.44683 7.59063 5.00933 6.9625C5.57183 7.59063 6.3937 7.99687 7.31558 7.99687C8.24057 7.99687 9.05933 7.59063 9.62183 6.9625C10.1843 7.59063 11.0062 7.99687 11.9281 7.99687C12.8531 7.99687 13.6718 7.59063 14.2343 6.9625C14.8 7.59063 15.6187 7.99687 16.5406 7.99687C16.6875 7.99687 16.8281 7.9875 16.9687 7.96875C18.9312 7.70625 19.8624 5.38125 18.8125 3.70625ZM16.5468 9C16.2343 9 15.925 8.95312 15.625 8.88125V12H3.62495V8.88125C3.32495 8.95 3.01557 9 2.70307 9C2.51557 9 2.32495 8.9875 2.14057 8.9625C1.96557 8.9375 1.7937 8.89688 1.62807 8.85V15C1.62807 15.5531 2.07495 16 2.62807 16H16.6281C17.1812 16 17.6281 15.5531 17.6281 15V8.85C17.4593 8.9 17.2906 8.94062 17.1156 8.9625C16.925 8.9875 16.7374 9 16.5468 9Z"
                      fill="#5F80B9"
                    />
                  </svg>
                </span>
              </div>
            </Popover>
          </div>
          <div className="inner-container">
            <FrxGridContainer
              enableSearch={false}
              enableColumnDrag
              onSearch={() => { }}
              fixedColumnKeys={["claimId"]}
              pagintionPosition="topRight"
              gridName="BENEFITS"
              enableSettings={true}
              columns={BenefitsGridColumns()}
              scroll={{ x: 2000, y: 377 }}
              isFetchingData={false}
              enableResizingOfColumns
              data={getBenefitDetails()}
              expandable={{
                isExpandable: true,
                expandIconColumnIndex:
                  BenefitsGridColumns({}).length + 1,
                expandedRowRender: (props) => (
                  <div></div>
                ),
                expandCloseIcon: (
                  <span>
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.223752 0.24549C0.531543 -0.0693596 0.960049 -0.0940675 1.33632 0.24549L4.09513 2.89065L6.85395 0.24549C7.23022 -0.0940675 7.65943 -0.0693596 7.9651 0.24549C8.27289 0.559634 8.25313 1.0905 7.9651 1.38559C7.67849 1.68067 4.65071 4.56373 4.65071 4.56373C4.57861 4.63846 4.49219 4.69789 4.39662 4.73849C4.30104 4.77908 4.19827 4.8 4.09443 4.8C3.99059 4.8 3.88782 4.77908 3.79224 4.73849C3.69666 4.69789 3.61025 4.63846 3.53815 4.56373C3.53815 4.56373 0.511776 1.68067 0.223752 1.38559C-0.0649778 1.0905 -0.0840382 0.559634 0.223752 0.24549Z"
                        fill="#999999"
                      />
                    </svg>
                  </span>
                ),
                expandOpenIcon: (
                  <span>
                    <svg
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.245493 7.96947C-0.0693603 7.6615 -0.0940685 7.23274 0.245493 6.85625L2.89068 4.09578L0.245492 1.33532C-0.0940688 0.958827 -0.0693606 0.529358 0.245492 0.223503C0.559639 -0.0844708 1.09051 -0.0646925 1.3856 0.223503C1.68069 0.510286 4.56378 3.53987 4.56378 3.53987C4.63851 3.61202 4.69794 3.69849 4.73853 3.79412C4.77913 3.88975 4.80005 3.99259 4.80005 4.09649C4.80005 4.20039 4.77913 4.30322 4.73853 4.39886C4.69794 4.49449 4.63851 4.58096 4.56378 4.6531C4.56378 4.6531 1.68069 7.68128 1.3856 7.96947C1.09051 8.25838 0.55964 8.27745 0.245493 7.96947Z"
                        fill="#323C47"
                      />
                    </svg>
                  </span>
                ),
              }}
            />
          </div>
        </div>
      </div>
    ) : (
        grid
      );
  };
  render() {
    return (
      <>
        <FrxMiniTabs
          tabList={this.props.tabs ? this.props.tabs : this.state.miniTabs}
          activeTabIndex={this.state.activeMiniTabIndex}
          onClickTab={this.onClickMiniTab}
        />
        <div className="formulary-mini-tabs-info">
          {this.renderActiveMiniTabContent()}
        </div>

        <DialogPopup
          showCloseIcon={true}
          positiveActionText='Continue'
          negativeActionText='Cancel'
          title='SELECT LISTS FOR CREATION'
          handleClose={() => {
            this.closeAddNewPopop();
          }}
          handleAction={(e) => { this.handleAddNewPopupAction(e) }}
          showActions={true}
          open={this.state.AddNewPopupInd}
        >
          <div className="addNewPopupWrapper">
            <Grid container xs={12}>
              <Grid item xs={4}>
                <RadioButton label="Add/Remove NDCs" name="add-new-Formulary-radio" onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "AddRemoveNDCs"} value="AddRemoveNDCs" />
              </Grid>
              <Grid item xs={4}>
                <RadioButton label="Add/Remove Criteria" name="add-new-Formulary-radio" onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "AddRemoveCriteria"} value="AddRemoveCriteria" />
              </Grid>
              <Grid item xs={4}>
                <RadioButton label="Payment Override" name="add-new-Formulary-radio" onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "PaymentOverride"} value="PaymentOverride" />
              </Grid>
            </Grid>
          </div>
        </DialogPopup>
      </>
    );
  }
}

export default LOBDetail;
