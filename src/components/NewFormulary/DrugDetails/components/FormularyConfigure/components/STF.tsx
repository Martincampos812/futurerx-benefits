import React from 'react';
import Grid from "@material-ui/core/Grid";
import { TabInfo } from "../../../../../../models/tab.model";
import Box from '@material-ui/core/Box';
import Button from '../../../../../shared/Frx-components/button/Button';
import DropDown from '../../../../../shared/Frx-components/dropdown/DropDown';
import RadioButton from '../../../../../shared/Frx-components/radio-button/RadioButton';
import DialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import "./STF.scss";
import STPopup from './STPopup/STpopup';
import { RadioButtonChecked } from '@material-ui/icons';

export default class STF extends React.Component<any,any>{
    state={
        panelGridTitle1: ['Value Based Insurance','Number of Drugs','added drugs','removed drugs'],
        panelTitleAlignment1: ['left','left','left','left'],
        panelGridValue1: [],
        isNotesOpen: false,
        radioPopupInd: false,
        show: false,
        isExistingConfigSelected: false,
        isAdditionalCriteriaSelected: false,
        activeTabIndex: 0,
        tabs: [
            {id: 1,text: "Replace"},
            {id: 2,text: "Append"},
            {id: 3,text: "Remove"}
        ]   
    }
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
    handleNoteClick = (event: React.ChangeEvent<{}>) => {
        event.stopPropagation();
        this.setState({isNotesOpen: !this.state.isNotesOpen});
    };
    handleCloseNote = () => {
        this.setState({isNotesOpen: !this.state.isNotesOpen});
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
    settingFormApplyHandler = () => {
        alert(1)
    }

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
    render(){
        return (
            <div className="bordered stf-root">
                    <div className="modify-wrapper bordered white-bg">
                        <div className="settings-form">
                            <Grid container>
                                <Grid item xs={4}>
                                    <div className="group">
                                        <label>ST GROUP DESCRIPTION<span className="astrict">*</span></label>
                                        <DropDown options={[1,2,3]}/>
                                    </div>

                                    <div className="group mt-10">
                                    <label>
                                        VIEW EXISTING ST CONFIGURATIONS IN ANOTHER FORMULARY?<span className="astrict">*</span>
                                    </label>
                                    <div className="marketing-material radio-group">
                                        <RadioButton 
                                            label="No"
                                            name="view-existing-radio"
                                            onChange={this.handleRadioOptionChange} checked={!this.state.isExistingConfigSelected}
                                            value="No"                                            
                                        />
                                        <RadioButton 
                                            label="Yes"
                                            name="view-existing-radio"
                                            onChange={this.handleRadioOptionChange} checked={this.state.isExistingConfigSelected}
                                            value="Yes"
                                        />
                                    </div>
                                    </div>

                                    <div className="group mt-10">
                                    <label>DO YOU WANT TO ADD ADDITIONAL CRITERIA? <span className="astrict">*</span></label>
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
                                    </div>
                                    <DialogPopup
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
                                    </DialogPopup>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                   
                                    <div className="group">
                                        <label>ST TYPE <span className="astrict">*</span></label>
                                        <DropDown options={[1,2,3]}/>
                                    </div>
                                    {this.state.isExistingConfigSelected && 
                                    <div className="group">
                                        <label>SELECT RELATED FORMULARY TO VIEW EXISTING CONFIGURATION <span className="astrict">*</span></label>
                                        <DropDown options={[1,2,3]}/>
                                    </div>
                                    }
                                </Grid>

                                <Grid item xs={4}>
                                <div className="group">
                                        <label>STEP VALUE <span className="astrict">*</span></label>
                                        <input type="text" />
                                    </div>
                                </Grid>
                            </Grid>
                            <Box display="flex" justifyContent="flex-end">
                                <Button label="Apply" onClick={this.settingFormApplyHandler}/>
                            </Box>
                        </div>
                    </div>
                
            </div>
        )
    }
}