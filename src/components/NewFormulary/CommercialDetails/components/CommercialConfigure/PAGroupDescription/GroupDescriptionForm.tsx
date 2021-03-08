import React from "react";
import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import RadioButton from "../../../../../shared/Frx-components/radio-button/RadioButton";
import AdditionalCriteriaBuilder from "../../../../../shared/Frx-components/additionalcriteriabuilder";
import { getAdditionalCriteria } from "../../../../../../mocks/formulary/searchMock";
import FormInformationPanel from "./FormInformationPanel";
import Button from "../../../../../shared/Frx-components/button/Button";

import { ReactComponent as AngleDownIcon } from "../PriorAuthorization/assets/angledown.svg";
import { ReactComponent as VersionHistoryIcon } from "../PriorAuthorization/assets/versionhistory.svg";
import { ReactComponent as CloneIcon } from "../PriorAuthorization/assets/clone.svg";
import { ReactComponent as PlusCircleIcon } from "../PriorAuthorization/assets/pluscircle.svg";
import { ReactComponent as CrossCircleIcon } from "../PriorAuthorization/assets/crosscircle.svg";
import { ReactComponent as ArchiveIcon } from "../PriorAuthorization/assets/archive.svg";

interface CategoryData {
  id: number;
  category: string;
}

interface AdditionalCriteria {
  id: number;
  title: string;
  formArray: any;
}

interface GroupDescriptionFormState {
  categoriesData: Array<CategoryData>;
  activeCategoryIndex: number;
  isAdditionalCriteriaDisplay: boolean;
  activeCategoryTitle: string;
  formCount: number;
  checkBoxOpt: any;
  additionalCriterias: Array<AdditionalCriteria>;
}

export default class GroupDescriptionForm extends React.Component<
  any,
  GroupDescriptionFormState
> {
  state: GroupDescriptionFormState = {
    categoriesData: getAdditionalCriteria(),
    activeCategoryIndex: 0,
    activeCategoryTitle: "",
    isAdditionalCriteriaDisplay: true,
    additionalCriterias: [
      {
        id: 0,
        title: `ADDITIONAL CRITERIA 1`,
        formArray: [],
      },
    ],
    formCount: 0,
    checkBoxOpt: {
      1: [
        { id: 1, text: "Formulary File" },
        { id: 2, text: "Prior Authorization File" },
        { id: 3, text: "Step Therapy File" },
        { id: 4, text: "Indication-Based Coverage File" },
      ],
      2: [
        { id: 1, text: "Tire1" },
        { id: 2, text: "Tire2" },
        { id: 3, text: "Tire3" },
        { id: 4, text: "Tire4" },
        { id: 5, text: "Tire5" },
        { id: 6, text: "Tire6" },
      ],
    },
  };

  handleAddNewClick = () => {};

  handleListItemClick = (
    category: CategoryData,
    additionalCriteriaId: number
  ) => {};

  deleteFormHandler = (id: number, additionalCriteriaId: number) => {};

  deleteAdditionalCriteria = (additionalCriteriaId: number) => {};

  clearSelected = (additionalCriteriaId: number) => {};

  additionalCriteriaDisplay = (value: boolean) => {
    this.setState({
      isAdditionalCriteriaDisplay: value,
    });
  };

  render() {
    return (
      <div className='new-group-des new-group-des-popup'>
        <div className='panel header'>
          <Grid container justify='space-between' spacing={0}>
            <Grid item xs={10}>
              <span>NEW GROUP DESCRIPTION</span>
            </Grid>
            <Grid item xs={2}>
              <Button
                label='Select This Group'
                className='select-this-group-btn'
                onClick={() => {}}
              />
            </Grid>
          </Grid>
        </div>
        <div className='version-wrapper-green'>
          <div className='item-text-green version-dd-green'>
            Group Description Version 1
            <AngleDownIcon style={{ fill: "#219653" }} />
          </div>
          <div className='item-green'>
            <VersionHistoryIcon style={{ fill: "#219653" }} />
            Version History
          </div>
          <div className='item-green'>
            <CloneIcon style={{ fill: "#219653" }} />
            Clone
          </div>
          <div className='item-green'>
            <PlusCircleIcon style={{ fill: "#219653" }} />
            New Version
          </div>
          <div className='item-green'>
            <CrossCircleIcon style={{ fill: "#219653" }} />
            Delete
          </div>
          <div className='item-green'>
            <ArchiveIcon style={{ fill: "#219653" }} />
            Archive
          </div>
        </div>

        <div className='inner-container pa-new-group-form scroll-bar'>
          <div className='setting-1'>
            <span>What file type is this group description for? *</span>
            <div className='marketing-material radio-group'>
              <RadioButton
                label='Formulary/OTC'
                name='marketing-material-radio1'
                defaultChecked={true}
              />
              <RadioButton label='Excluded' name='marketing-material-radio1' />
              <RadioButton label='ADD' name='marketing-material-radio1' />
            </div>
            <Grid container>
              <Grid container item xs={6}>
                <Grid item xs={12}>
                  <div className='group group-padding'>
                    <label>
                      PA GROUP DESCRIPTION <span className='astrict'>*</span>
                    </label>
                    <input type='textarea' className='setup-input-fields' />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className='group group-padding'>
                    <label>
                      PA Criteria Change Indicator{" "}
                      <span className='astrict'>*</span>
                    </label>
                    <DropDown
                      className='formulary-type-dropdown'
                      placeholder='Commercial'
                      options={["Commercial", "Medicare", 3]}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className='group group-padding'>
                    <label>
                      PA INDICATION Indicator<span className='astrict'>*</span>
                    </label>
                    <DropDown
                      className='formulary-type-dropdown'
                      placeholder='Commercial'
                      options={["Commercial", "Medicare", 3]}
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <FormInformationPanel />
              </Grid>

              <Grid item xs={12}>
                <div className='group'>
                  <label>Off-LABEL USES</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>EXCLUSION CRITERIA</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>REQUIRED MEDICAL INFORMATION</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>AGE RESTRICTIONS</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>PRESCRIBER RESTRICTIONS</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>
                    COVERAGE DURATION<span className='astrict'>*</span>
                  </label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='group'>
                  <label>OTHER CRITERIA</label>
                  <input type='textarea' className='setup-input-fields' />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className='setting-1 mb-20'>
            <span>MARKETING MATERIAL CONSIDERATIONS</span>
            <div className='marketing-material-chk'>
              <FormControlLabel
                control={<Checkbox />}
                label='Supress Criteria and Display: Pending CMS Approval'
              />
              <FormControlLabel
                control={<Checkbox />}
                label='Display Criteria for Drugs not on FRF'
              />
            </div>
            <span>
              do you want to add additional criteria?
              <span className='astrict'>*</span>
            </span>
            <div className='marketing-material radio-group'>
              <RadioButton
                onClick={() => this.additionalCriteriaDisplay(true)}
                label='Yes'
                name='marketing-material-radio'
                defaultChecked={true}
              />
              <RadioButton
                onClick={() => this.additionalCriteriaDisplay(false)}
                label='No'
                name='marketing-material-radio'
              />
            </div>
          </div>
          {this.state.isAdditionalCriteriaDisplay ? (
            <AdditionalCriteriaBuilder
              activeCategoryIndex={0}
              activeCategoryTitle={""}
              categoriesData={this.state.categoriesData}
              checkBoxOpt={this.state.checkBoxOpt}
              deleteFormHandler={this.deleteFormHandler}
              deleteAdditionalCriteria={this.deleteAdditionalCriteria}
              clearSelected={this.clearSelected}
              handleListItemClick={this.handleListItemClick}
              additionalCriterias={this.state.additionalCriterias}
              handleAddNewClick={this.handleAddNewClick}
              isReadOnly={true}
              className={""}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
