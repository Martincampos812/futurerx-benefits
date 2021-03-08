import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Box } from "@material-ui/core";
import CategoryForm from "./CategoryForm";
import FrxDialogPopup from "../../FrxDialogPopup/FrxDialogPopup";
import SearchCategory from "./SearchCategory";
import { ReactComponent as ClearCircleIcon } from "./assets/clearcircle.svg";
import "./style.scss";

interface AdvancedSearchPopupProps {
  categoriesData: Array<CategoryData>;
  openPopup: boolean;
  onClose: () => void;
  category: string;
}
interface CategoryData {
  id: number;
  category: string;
}

interface AdvancedSearchPopupState {
  activeCategoryIndex: number;
  activeCategoryTitle: string;
  formArray: any;
  formCount: number;
  checkBoxOpt: any;
}

class AdvancedSearchPopup extends React.Component<
  AdvancedSearchPopupProps,
  AdvancedSearchPopupState
> {
  state: AdvancedSearchPopupState = {
    activeCategoryIndex: 0,
    activeCategoryTitle: "",
    formCount: 0,
    formArray: [],
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

  /**
   *@function onClose
   *
   * Close the member notes popup
   *
   * @memberof AdvancedSearchPopup
   */

  onClose = () => {
    this.props.onClose();
  };

  /**
   * Action method if any action is required for dialog popup
   *
   * @memberof AdvancedSearchPopup
   */
  action = () => {
    console.log("no action to perform");
  };

  /**
   *Fetch notes details for all categories and filter specific category notes
   *
   * @param {string} type
   * @param {number} index
   * @param {*} [item]
   * @memberof AdvancedSearchPopup
   */
  handleListItemClick = (e, index: any) => {
    const title = index.category;
    const catid = index.id;
    const checkIndex = this.state.formArray.findIndex((v) => v.type === title);
    if (checkIndex === -1) {
      this.setState({
        formArray: [...this.state.formArray, { type: title, id: catid }],
        activeCategoryIndex: index.id,
      });
    }
  };

  deleteFormHandler = (getIndex: number) => {
    let updatedForms = [...this.state.formArray];
    updatedForms.splice(getIndex, 1);
    this.setState({
      formArray: updatedForms,
    });
  };

  clearSelected = () => {
    this.setState({
      formArray: [],
    });
  };

  render() {
    let formContent = (
      <div className='noForms'>
        Drag the file type(s) from the list on the left to create a filter.
      </div>
    );
    if (this.state.formArray.length > 0) {
      formContent = this.state.formArray.map((a, index: number) => (
        <CategoryForm
          title={a.type}
          index={index}
          deleteField={this.deleteFormHandler}
          checkBoxOpt={this.state.checkBoxOpt[a.id]}
          catid={a.id}
        />
      ));
    }

    return (
      <div>
        <React.Fragment>
          <FrxDialogPopup
            positiveActionText=''
            negativeActionText='Close'
            title='Advance Search'
            handleClose={this.onClose}
            handleAction={this.action}
            open={this.props.openPopup}
            showActions={false}
            className='drug-grid-advance-search member-notes-popup-root'
            height='80%'
            width='90%'
          >
            <Grid
              container
              spacing={0}
              alignContent='flex-start'
              className='drug-grid-popup-root__dialog'
            >
              <Grid
                xs={3}
                className='member-notes-popup-root__dialog__categories'
                key={0}
                item
              >
                <SearchCategory
                  handleListItemClick={this.handleListItemClick}
                  categoriesData={this.props.categoriesData}
                  activeCategoryIndex={this.state.activeCategoryIndex}
                />
              </Grid>
              <Grid
                className='form-wrapper-root member-notes-popup-root__dialog__category-notes'
                item
                xs={9}
              >
                <Box className='right-content'>
                  <div className='formWrappers scroll-bar'>{formContent}</div>

                  <Box
                    display='flex'
                    justifyContent='flex-end'
                    className='button-wrapper'
                  >
                    <Button
                      className='Button advanced-grid-search__btn-clear'
                      onClick={this.clearSelected}
                    >
                      <ClearCircleIcon />
                      <span>Clear</span>
                    </Button>
                    <button className='Button member-notes-popup-root__dialog__category-notes_form__submit-btn'>
                      Apply Search
                    </button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </FrxDialogPopup>
        </React.Fragment>
      </div>
    );
  }
}

export default AdvancedSearchPopup;
