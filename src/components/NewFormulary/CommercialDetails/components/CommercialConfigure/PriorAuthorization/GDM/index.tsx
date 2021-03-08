import React from "react";
import { Box, Input, InputAdornment } from "@material-ui/core";
import Button from "../../../../../../shared/Frx-components/button/Button";
import PaGroupForm from "./PaGroupForm";
import PaGroups from "./PaGroups";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { TabInfo } from "../../../../../../../models/tab.model";
import PanelHeader from "../../../../../DrugDetails/components/FormularyConfigure/components/PanelHeader";
import FrxMiniTabs from "../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import DialogPopup from "../../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import NewVersionPopup from "../../../CommercialDetailsTop/NewVersionPopoup";
import ClonePopup from "../../../CommercialDetailsTop/ClonePopup";
import DeletePopup from "../../../CommercialDetailsTop/DeletePopup";
import ArchivePopup from "../../../CommercialDetailsTop/ArchivePopup";

const groupsData = [
  {
    id: 1,
    label: "Group 1",
    status: "warning",
  },
  {
    id: 2,
    label: "Group 2",
    status: "completed",
  },
  {
    id: 3,
    label: "Group 3",
    status: "warning",
  },
  {
    id: 4,
    label: "Group 4",
    status: "selected",
  },
  {
    id: 5,
    label: "Group 5",
    status: "warning",
  },
  {
    id: 6,
    label: "Group 6",
    status: "warning",
  },
  {
    id: 7,
    label: "Group 7",
    status: "warning",
  },
];

export default class GDM extends React.Component<any, any> {
  state = {
    activeTabIndex: 0,
    tooltip: "ST CRITERIA",
    DialogshowInd: false,
    newGroup: false,
    popupName: "",
    title: "",
    tabs: [
      {
        id: 1,
        text: "Active",
      },
      {
        id: 2,
        text: "Archived",
      },
    ],
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

  selectGroup = (text: string) => {};
  addNewGroup = () => {};

  render() {
    return (
      <>
        <div className='bordered'>
          <PanelHeader title='Prior Authorization - Group Description Management' />
          <div className='inner-container bg-light-grey display-flex'>
            <div className='group-des'>
              <div className='panel header'>
                <span>GROUP DESCRIPTION</span>
                <Box display='flex' justifyContent='flex-end'>
                  <Button
                    label='+ Add New'
                    className='Button gdm-button '
                    onClick={
                      !this.props.isReadOnly ? this.addNewGroup : () => {}
                    }
                  />
                </Box>
              </div>
              <div className='inner-container'>
                <div className='search-input'>
                  <Input
                    disableUnderline
                    placeholder='Search...'
                    endAdornment={
                      <InputAdornment position='end'>
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <div className='mini-tabs'>
                  <FrxMiniTabs
                    tabList={this.state.tabs}
                    activeTabIndex={this.state.activeTabIndex}
                    onClickTab={this.onClickTab}
                  />
                </div>
                <div className='group-wrapper'>
                  {groupsData.map((group, key) => (
                    <PaGroups
                      key={key}
                      id={group.id}
                      title={group.label}
                      statusType={group.status}
                      selectGroup={
                        !this.props.isReadOnly ? this.selectGroup : () => {}
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <PaGroupForm
              isReadOnly={this.props.isReadOnly}
              tooltip={this.state.tooltip}
              formType={0}
              popupClick={
                !this.props.isReadOnly ? this.dialogClickHandler : () => {}
              }
            />
          </div>
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
