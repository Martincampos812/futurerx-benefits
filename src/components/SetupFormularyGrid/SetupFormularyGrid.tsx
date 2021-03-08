import { Button, Card } from "@material-ui/core";
import React, { Component } from "react";
import FormularySearch from "../formulary/Components/FormularySearch/FormularySearch";
import FormularyDetailsTop from "../NewFormulary/DrugDetails/components/FormularyDetailsTop/FormularyDetailsTop";
import DropDown from "../shared/Frx-components/dropdown/DropDown";
import TextBox from "../shared/Frx-components/text-box/TextBox";
import FormularyBody from "./FormularyBody/FormularyBody";
import { getFormularyDetails } from "../../mocks/formulary/formularyDetails";
import DialogPopup from '../shared/FrxDialogPopup/FrxDialogPopup';
import VersionGridPopup from "./components/versionGridPopup";
interface formularyTopData {
  effectiveDate: string;
  formularyID: number;
  formularyName: string;
  terminationDate: string;
}
interface State {   
  versionDialogshowInd:boolean;  
}
export default class SetupFormularyGrid extends Component {

  state = {
    versionDialogshowInd: false
  }

  versionClickHandler = () => {       
    this.setState({
      versionDialogshowInd:true
    }); 
  };

  onClose = () => {
    this.setState({
      versionDialogshowInd:false
    }); 
    return true;
  };

  render() {
    return (
      <div>
        <div
          style={{ marginLeft: "60px", marginRight: "60px", marginTop: "50px" }}
          className="FormularyHeading"
        >
          {/* <FormularyHeading/> */}
          <FormularyDetailsTop formularyTopData={getFormularyDetails()} versionGridClick={this.versionClickHandler} />
        </div>
        <div className="formularyBody">
          <FormularyBody />
        </div>

        <DialogPopup
          showCloseIcon={true}
          positiveActionText="Save"
          negativeActionText="Cancel"
          title="ADD FORMULARY VERSION"
          handleClose={() => {
            this.onClose();
          }}
          handleAction={() => {
            
            console.log("do some action");
          }}
          showActions={true}
          height="100vh"
          width="100vh"
          open={this.state.versionDialogshowInd}>
            <VersionGridPopup />
      </DialogPopup>
      </div>
    );
  }
}
