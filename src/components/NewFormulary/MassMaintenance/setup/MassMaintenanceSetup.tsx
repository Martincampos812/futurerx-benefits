import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import "./MassMaintenanceSetup.scss";
// import {
//   _claimsGridColumns,
//   _grievancesGridColumns,
//   _pacases_initial,
//   _testClaimsGridColumns,
// } from "../../../../utils/grid/columns";
import DropDown from "../../../shared/Frx-components/dropdown/DropDown";
import Button from "../../../shared/Frx-components/button/Button";
import Label from "../../../shared/Frx-components/label/Label";
import RadioButton from "../../../shared/Frx-components/radio-button/RadioButton";
import CustomDatePicker from "../../../shared/Frx-components/date-picker/CustomDatePicker";
import { Input } from "antd";
import FrxLoader from "../../../shared/FrxLoader/FrxLoader";

import { getFormularyGridData } from "../../../../mocks/formulary-grid/FormularyGridData";
import FormularyGrid from "./FormularyGrid";
import DrugGrid from "../../DrugDetails/components/DrugGrid";
import { getFormularyGridColumns } from "../../../../mocks/formulary-grid/FormularyGridColumn";
import FrxGridContainer from "../../../shared/FrxGrid/FrxGridContainer";
import MassMaintenanceContext from '../../FormularyDetailsContext';

class MassMaintenanceSetup extends Component {
  state = {
    isFormularyGridShown: false,
    columns: [],
    data: [],
    pinData: {
      value: false,
    },
    scroll: {
      x: 960,
      y: 450,
    },
  };
  
  static contextType = MassMaintenanceContext;

  showFormularyGrid = () => {
    this.setState({
      isFormularyGridShown: !this.state.isFormularyGridShown,
    });
  };
  rowSelectionChange = (r) => {
    console.log(r);
  };
  componentDidMount() {
    this.setState({
      columns: getFormularyGridColumns(),
      data: getFormularyGridData(),
    });
  }

  render() {
    console.log("++++++++++++++++++++", this.context);
    const { isFormularyGridShown, columns, data, scroll, pinData } = this.state;
    let dataGrid = <FrxLoader />;
    if (data) {
      dataGrid = (
        <FrxGridContainer
          enableSearch={false}
          enableColumnDrag={false}
          onSearch={() => {}}
          fixedColumnKeys={[]}
          pagintionPosition="topRight"
          gridName=""
          isFetchingData={false}
          columns={columns}
          scroll={{ x: 0, y: 377 }}
          enableResizingOfColumns={false}
          data={data}
          // pinning columns
          isPinningEnabled={false}
          // setting gear 1st column
          enableSettings={true}
          // checkbox 2nd column
          isCustomCheckboxEnabled={true}
          // event reference for checkbox (mandotory if checkbox is true)
          handleCustomRowSelectionChange={(r) => {
            console.log(r);
          }}
          onSettingsClick="grid-menu"
        />
      );
    }
    return (
      <div className="_mass-maintainance-setup-root">
        <div className="bordered details-top">
          <div className="header">Formulary Maintenance</div>
          <div className="inner-container p-20">
            <Grid container>
              <Grid item xs={12}>
                <div className="input-field-group">
                  <Label required={true}>lob</Label>
                  <DropDown
                    className="w-80 m-t-6"
                    placeholder="Medicare"
                    options={["Medicare", "Medicaid", "Commercial", "Exchange"]}
                  />
                </div>
              </Grid>
              
              <Grid item xs={12}>
                <div className="input-field-group">
                  <Label required={true}>what type of maintenance do you want to perform</Label>
                  <div className="radio-group root-container">
                    <RadioButton
                      label="Manual Maintenance"
                      name="mass-maintenance-setup"
                      checked
                    />
                    
                    {
                      this.context.currentSelectedModule === 'medicare' &&  
                      <RadioButton
                        label="FRF Change Report Maintenance"
                        name="mass-maintenance-setup"
                      />
                    }
                  </div>
                </div>
              </Grid>
              
              <Grid container item xs={12}>
                  <Grid item xs={4}>
                    <div className="input-field-group">
                      <Label required={true}>service year</Label>
                      <div>
                        <DropDown
                          className="w-80 m-t-6"
                          placeholder=""
                          options={[
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017",
                          ]}
                        />
                      </div>
                    </div>
                  </Grid>
                  
                  { 
                    this.context.currentSelectedModule === 'medicare' &&                
                    <Grid item xs={4}>
                      <div className="input-field-group">
                        <Label>submission month</Label>
                        <div>
                          <Input placeholder="" className="submission-month-input m-t-6" />
                        </div>
                      </div>
                    </Grid>
                  }
                  <Grid item xs={4}>
                    <div className="input-field-group">
                      <Label required={true}>EFFECTIVE DATE of change </Label>
                      <div>
                        <CustomDatePicker
                          className="__effective-date m-t-6"
                          placeholder=""
                          suffixIcon={
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ant-picker-suffix"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 20H2C0.897 20 0 19.103 0 18V4C0 2.897 0.897 2 2 2H4V0H6V2H12V0H14V2H16C17.103 2 18 2.897 18 4V18C18 19.103 17.103 20 16 20ZM16.001 18L16 6H2V18H16.001ZM6 9H4V11H6V9ZM6 13H4V15H6V13ZM10 9H8V11H10V9ZM10 13H8V15H10V13ZM14 9H12V11H14V9ZM14 13H12V15H14V13Z"
                                fill="#C4C4C4"
                              />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </Grid>
              </Grid>
            </Grid>
            <div className="move-right">
              <Button
                label={
                  isFormularyGridShown ? "Hide Formularies" : "Show Formularies"
                }
                style={{
                  cursor: "pointer",
                }}
                onClick={this.showFormularyGrid}
              />
            </div>
          </div>
        </div>
        {isFormularyGridShown ? (
          <div className="bordered details-top">
            <div className="header">Select Formularies to apply updates to</div>
            <div className="inner-container maintaince-grid">{dataGrid}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MassMaintenanceSetup;
