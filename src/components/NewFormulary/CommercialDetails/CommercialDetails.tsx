import React from "react";
import { TabInfo } from "../../../models/tab.model";
import FrxTabs from "../../shared/FrxTabs/FrxTabs";
import FormularyDetailsTop from "./components/CommercialDetailsTop/CommercialDetailsTop";
import FormularyConfigure from "./components/CommercialConfigure/CommercialConfigure";
import CompareView from "./components/CommercialCompareView/CommercialCompareView";
import "./CommercialDetails.scss";
import FormularySetUp from "./components/CommercialSetUp/CommercialSetUp";
import Validation from "../../Validation/Validation";
import CommercialDetailsTop from "./components/CommercialDetailsTop/CommercialDetailsTop";
import CommercialSetUp from "./components/CommercialSetUp/CommercialSetUp";
import CommercialConfigure from "./components/CommercialConfigure/CommercialConfigure";
import CommercialCompareView from "./components/CommercialCompareView/CommercialCompareView";
import DialogPopup from "../../shared/FrxDialogPopup/FrxDialogPopup";
import ClonePopup from "./components/CommercialDetailsTop/ClonePopup";
import DeletePopup from "./components/CommercialDetailsTop/DeletePopup";
import ArchivePopup from "./components/CommercialDetailsTop/ArchivePopup";
import NewVersionPopup from "./components/CommercialDetailsTop/NewVersionPopoup";

const tabs = [
  { id: 1, text: "Setup" },
  { id: 2, text: "Configure" },
  { id: 3, text: "Compare/View" },
  { id: 4, text: "Validation" },
  { id: 5, text: "Complete" },
  { id: 6, text: "Bazaar" },
];

export default class CommercialDetails extends React.Component<any, any> {
  state = {
    tabs: tabs,
    activeTabIndex: 0,
    DialogshowInd: false,
    popupName: "",
    title: "",
  };

  dialogClickHandler = (popupName, title) => {
    this.setState({
      DialogshowInd: true,
      popupName: popupName,
      title: title,
    });
  };

  onClose = () => {
    this.setState({
      DialogshowInd: false,
    });
    return true;
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
  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    switch (tabIndex) {
      case 0:
        return <CommercialSetUp isReadOnly={this.props.isReadOnly} />;
      case 1:
        return <CommercialConfigure isReadOnly={this.props.isReadOnly} />;
      case 2:
        return <CommercialCompareView isReadOnly={this.props.isReadOnly} />;
      case 3:
        return <div>Commercial Validation </div>;
      case 4:
        return <div>Commercial Complete</div>;
      case 5:
        return <div>Commercial Bazaar</div>;
    }
  };
  render() {
    const fData = this.props.data;
    return (
      <>
        <CommercialDetailsTop
          isReadOnly={this.props.isReadOnly}
          formularyTopData={fData}
          popupClick={
            !this.props.isReadOnly ? this.dialogClickHandler : () => {}
          }
        />
        <div className='drug-details-bottom'>
          <FrxTabs
            tabList={this.state.tabs}
            typeCard={"line"}
            activeTabIndex={this.state.activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className='inner-container'>{this.renderActiveTabContent()}</div>
          <DialogPopup
            className='commercial-detail-popup'
            showCloseIcon={true}
            positiveActionText=''
            negativeActionText=''
            title={this.state.title}
            handleClose={() => {
              this.onClose();
            }}
            handleAction={() => {
              
              console.log("do some action");
            }}
            showActions={true}
            height='100vh'
            width='100vh'
            open={this.state.DialogshowInd}
          >
            {this.state.popupName === "version" ? (
              <NewVersionPopup />
            ) : this.state.popupName === "clone" ? (
              <ClonePopup />
            ) : this.state.popupName === "delete" ? (
              <DeletePopup />
            ) : this.state.popupName === "archive" ? (
              <ArchivePopup />
            ) : (
              ""
            )}
          </DialogPopup>
        </div>
      </>
    );
  }
}
