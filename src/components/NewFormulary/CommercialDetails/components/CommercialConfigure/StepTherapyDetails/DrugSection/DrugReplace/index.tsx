import React from "react";
import { Row, Col } from "antd";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import PAGroupDescription from "../../../PAGroupDescription";
import DropDown from "../../../../../../../shared/Frx-components/dropdown/DropDown";
import FrxDialogPopup from "../../../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import RadioButton from "../../../../../../../shared/Frx-components/radio-button/RadioButton";
import Label from "../../../../../../../shared/Frx-components/label/Label";
import { faShareAltSquare } from "@fortawesome/free-solid-svg-icons";
import STPopup from "../../../../../../DrugDetails/components/FormularyConfigure/components/STPopup/STpopup";

export default class DrugReplace extends React.Component {
  state = {
    isGroupDescPopupEnabled: false,
    isExistingConfigSelected: false,
    radioPopupInd: false,
    show: false,
    isAdditionalCriteriaSelected: false,
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

  onClose = () => {
    console.log("close");
    this.setState({ radioPopupInd: false });
    return true;
  };

  handlePopupButtonClick = () => {
    this.setState({
    radioPopupInd: true,
    isAdditionalCriteriaSelected: true,
});
}

noOnChange = () => {
  this.setState({ isAdditionalCriteriaSelected: false });
}
processCloseActions = () => {
  this.setState({ show: true });
};

  action = () => {
    console.log("no action to perform");
  };

  handleRadioOptionChange = (e) => {
    
    if(e.target.value === 'Yes'){
      this.setState({
        isExistingConfigSelected: true,
        });
    }
    else{
      this.setState({
        isExistingConfigSelected: false,
        });
    }
   
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
                    ST GROUP DESCRIPTION <span className='astrict'>*</span>
                  </label>
                  <div className='input-element'>
                    <div
                      className='bordered pointer'
                      onClick={this.openGroupDescription}
                    >
                      <span className='inner-font'>Select Group Description</span>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={8}>
              <div className='group'>
                <Label required={true}>ST TYPE</Label>
                <DropDown options={["", ""]} />
              </div>
            </Col>
            
            <Col lg={8}>
              <div className='group'>
                <Label required={true}>STEP VALUE</Label>
                <DropDown options={["", ""]} />
              </div>
            </Col>
            
            
            <Col lg={8}>
              <Label required={true}>view existing ST configurations in another formulary?</Label>
              <div className='marketing-material radio-group'>
              <RadioButton
                  label='No'
                  name='drugreplace-existing-pa-configurations'
                 // defaultChecked={true}
                  onChange={this.handleRadioOptionChange} checked={!this.state.isExistingConfigSelected}
                  value="No"
                />
                <RadioButton
                  label='Yes'
                  name='drugreplace-existing-pa-configurations'
                  onChange={this.handleRadioOptionChange} checked={this.state.isExistingConfigSelected}
                  value="Yes"
                />                
              </div>
            </Col>
            
            <Col lg={8}>
              <div className='group'>
                {this.state.isExistingConfigSelected && 
                <div className='input-groups'>
                  <Label required={true}>Select Related Formulary to View Existing configuration?</Label>
                  <div className='input-element'>
                    <div
                      className='bordered pointer'
                      onClick={this.openGroupDescription}
                    >
                      <span className='inner-font'>Select Formulary</span>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              }
              </div>
            </Col>
            
            <Col lg={4}></Col>
            <Col lg={8}>
              <Label required={true}>do you want to add additional criteria?</Label>
              <div className="marketing-material radio-group">
                                        <RadioButton 
                                            label="Yes"
                                            name="additional-criteria-radio"
                                            onChange={(e) => this.handlePopupButtonClick()}
                                            checked={this.state.isAdditionalCriteriaSelected}
                                        />
                                        <RadioButton 
                                            label="No"
                                            name="additional-criteria-radio"
                                            onChange={(e) => this.noOnChange() }
                                            checked={!this.state.isAdditionalCriteriaSelected}                                        
                                        />
                                        <FrxDialogPopup
                                    className='frx-override-result-root'
                                    showCloseIcon={this.state.show}
                                    positiveActionText="Assign"
                                    negativeActionText="Cancel"
                                    title="ADDITIONAL CRITERIA"
                                    handleClose={() => {
                                        this.onClose();
                                    }}
                                    handleAction={() => {
                                        this.processCloseActions();
                                    }}
                                    showActions={this.state.show}
                                    open={this.state.radioPopupInd}
                                    >
                                    <STPopup />
                                    </FrxDialogPopup>
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
          </Row>
        </div>
      </>
    );
  }
}
