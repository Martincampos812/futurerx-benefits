import React from "react";
import { Row, Col } from "antd";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import PAGroupDescription from "../../../PAGroupDescription";
import DropDown from "../../../../../../../shared/Frx-components/dropdown/DropDown";
import FrxDialogPopup from "../../../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import RadioButton from "../../../../../../../shared/Frx-components/radio-button/RadioButton";
import SelectFormularyPopUp from "../../../SelectFormularyPopUp";
import ViewFullFormulary from "../../../SelectFormularyPopUp/ViewFullFormulary";
import AdditionalCriteriaPopup from "../../GDM/AdditionalCriteriaPopup";
enum PopUpTypes {
  TYPE1 = "SELECTFORMULARY",
  TYPE2 = "VIEWFULLFORMULARY",
}

export default class DrugReplace extends React.Component<any, any> {
  state = {
    isGroupDescPopupEnabled: false,
    isSelectFormularyPopUpEnabled: false,
    PopUpType: PopUpTypes.TYPE1,
    isAdditionalCriteriaPopupOpen: false,
  };

  additionalCriteriaHandler = () => {
    this.setState({
      isAdditionalCriteriaPopupOpen: !this.state.isAdditionalCriteriaPopupOpen,
    });
  };

  openGroupDescription = () => {
    this.setState({
      isGroupDescPopupEnabled: !this.state.isGroupDescPopupEnabled,
    });
  };

  openSelectFormularies = () => {
    this.setState({
      isSelectFormularyPopUpEnabled: !this.state.isSelectFormularyPopUpEnabled,
    });
  };

  closeSelectFormularies = () => {
    this.setState({
      isSelectFormularyPopUpEnabled: !this.state.isSelectFormularyPopUpEnabled,
    });
  };
  closeGroupDescription = () => {
    this.setState({
      isGroupDescPopupEnabled: !this.state.isGroupDescPopupEnabled,
    });
  };

  action = () => {
    console.log("no action to perform");
  };

  formularyToggle = () => {
    const type =
      this.state.PopUpType === PopUpTypes.TYPE1
        ? PopUpTypes.TYPE2
        : PopUpTypes.TYPE1;
    this.setState({
      PopUpType: type,
    });
  };

  render() {
    return (
      <>
        <div className='group tier-dropdown white-bg'>
          <Row className='p-1'>
            <Col lg={8}>
              <div className='group'>
                <div className='input-groups'>
                  <label>
                    PA GROUP DESCRIPTION <span className='astrict'>*</span>
                  </label>
                  <div className='input-element'>
                    <div
                      className='bordered pointer'
                      onClick={
                        !this.props.isReadOnly
                          ? this.openGroupDescription
                          : () => {}
                      }
                    >
                      <span className='inner-font'>ADHD PA over 25</span>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}></Col>
            <Col lg={8}>
              <div className='group'>
                <label>
                  PA Type <span className='astrict'>*</span>
                </label>
                <DropDown options={["ALWAYS APPLIES", "NEW STARTS ONLY"]} />
              </div>
            </Col>
            <Col lg={8}>
              <label>
                Do you want to view existing PA configurations in another
                formulary? <span className='astrict'>*</span>
              </label>
              <div className='marketing-material radio-group'>
                <RadioButton
                  label='Yes'
                  name='drugreplace-existing-pa-configurations'
                  defaultChecked={true}
                />
                <RadioButton
                  label='No'
                  name='drugreplace-existing-pa-configurations'
                />
              </div>
            </Col>
            <Col lg={4}></Col>
            <Col lg={8}>
              <div className='group'>
                <div className='input-groups'>
                  <label>
                    Select Related Formulary to View Existing configuration?{" "}
                    <span className='astrict'>*</span>
                  </label>
                  <div className='input-element'>
                    <div
                      className='bordered pointer'
                      onClick={
                        !this.props.isReadOnly
                          ? this.openSelectFormularies
                          : () => {}
                      }
                    >
                      <span className='inner-font'>Select Formulary</span>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}></Col>
            <Col lg={8}>
              <label>
                do you want to add additional criteria?
                <span className='astrict'>*</span>
              </label>
              <div className='marketing-material radio-group'>
                <RadioButton
                  label='Yes'
                  name='drugreplace-additional-criteria'
                  defaultChecked={true}
                  onClick={
                    !this.props.isReadOnly
                      ? () => this.additionalCriteriaHandler()
                      : () => {}
                  }
                />
                <RadioButton
                  label='No'
                  name='drugreplace-additional-criteria'
                />
              </div>
            </Col>
            {this.state.isGroupDescPopupEnabled ? (
              <FrxDialogPopup
                positiveActionText=''
                negativeActionText='Close'
                title='Group Description'
                handleClose={this.closeGroupDescription}
                handleAction={this.action}
                open={this.state.isGroupDescPopupEnabled}
                showActions={false}
                className=''
                height='80%'
                width='90%'
              >
                <PAGroupDescription />
              </FrxDialogPopup>
            ) : null}
            {this.state.isSelectFormularyPopUpEnabled ? (
              <FrxDialogPopup
                positiveActionText=''
                negativeActionText='Close'
                title={
                  this.state.PopUpType === PopUpTypes.TYPE1
                    ? "Select Formulary"
                    : "View Full Formulary"
                }
                handleClose={this.closeSelectFormularies}
                handleAction={this.action}
                open={this.state.isSelectFormularyPopUpEnabled}
                showActions={false}
                className=''
                height='80%'
                width='90%'
              >
                {this.state.PopUpType === PopUpTypes.TYPE1 ? (
                  <SelectFormularyPopUp
                    formularyToggle={this.formularyToggle}
                  />
                ) : (
                  <ViewFullFormulary />
                )}
              </FrxDialogPopup>
            ) : null}
          </Row>
          {this.state.isAdditionalCriteriaPopupOpen ? (
            <AdditionalCriteriaPopup
              category='Grievances'
              openPopup={this.state.isAdditionalCriteriaPopupOpen}
              onClose={this.additionalCriteriaHandler}
            />
          ) : null}
        </div>
      </>
    );
  }
}
