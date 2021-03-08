import React from "react";
import "./CommercialSetUp.scss";
import Box from "@material-ui/core/Box";
import Button from "../../../../shared/Frx-components/button/Button";
import GeneralInformation from "../../../../NewFormulary/DrugDetails/components/FormularySetUp/components/GeneralInformation";
import SupplementalModels from "../../../../NewFormulary/DrugDetails/components/FormularySetUp/components/SupplementalModels";
import FormularyTiers from "../../../../NewFormulary/DrugDetails/components/FormularySetUp/components/FormularyTiers";
export default class CommercialSetUp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <GeneralInformation isReadOnly={this.props.isReadOnly} />
        <SupplementalModels isReadOnly={this.props.isReadOnly} />
        <FormularyTiers />
        {!this.props.isReadOnly ? (
          <div className='btn-action'>
            <Box display='flex' justifyContent='flex-end' className='save-btn'>
              <Button label='Save' />
            </Box>
            <Box
              display='flex'
              justifyContent='flex-end'
              className='save-and-continue-btn'
            >
              <Button label='Save & Continue' />
            </Box>
          </div>
        ) : null}
      </div>
    );
  }
}
