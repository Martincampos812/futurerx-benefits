import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import RadioButton from "../../../../../shared/Frx-components/radio-button/RadioButton";
import { DatePicker, Select } from "antd";
import PanelHeader from "../../FormularyConfigure/components/PanelHeader";
import Button from "../../../../../shared/Frx-components/button/Button";
import DialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import FrxReportingTags from "../../../../../shared/FrxReportingTags/FrxReportingTags";
import "../../../../../shared/FrxReportingTags/FrxReportingTags.scss";
import { ReactComponent as EditIcon } from "../../../../../../assets/icons/EditIcon.svg";
import CommercialDetailsContext from "../../../../FormularyDetailsContext";
import AddNewTag from "../../../../../shared/FrxReportingTags/AddNewTag";
import CloneFormularyPopup from "./CloneFormularyPopup";

const FormularyMethod = (props: any) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleRadioOptionChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <>
      <Grid item xs={selectedMethod === "clone" ? 4 : 8}>
        <div className="group">
          <label>
            Method of Formulary Build <span className="astrict">*</span>
          </label>
          <div className="marketing-material radio-group">
            <RadioButton
              label="Clone"
              checked={selectedMethod === "clone"}
              value="clone"
              onChange={handleRadioOptionChange}
              name="marketing-material-radio"
            />
            <RadioButton
              label="Upload"
              checked={selectedMethod === "upload"}
              value="upload"
              onChange={handleRadioOptionChange}
              name="marketing-material-radio"
            />
            <RadioButton
              label="Create New"
              value="create-new"
              name="marketing-material-radio"
              onChange={handleRadioOptionChange}
              checked={selectedMethod === "create-new"}
            />
          </div>

          {selectedMethod === "upload" && (
            <div>
              <Button
                label="Upload"
                htmlFor="upload-file"
                className="upload-button"
              />
            </div>
          )}
        </div>
      </Grid>

      {selectedMethod === "clone" && (
        <Grid item xs={4}>
          <div className="group">
            <label className="input-group-link-lable">
              CLONE FORMULARY <span className="astrict">*</span>
            </label>
            <a className="input-link " onClick={(e) => props.popupClick()}>
              Clone Formulary
            </a>
          </div>
        </Grid>
      )}
    </>
  );
};

interface TagModule {
  id: number;
  name: string;
  description: string;
  categories: string[];
  categoriesWithColor: any[];
}

interface GeneralInformationState {
  addTagsOpened: boolean;
  addNewTagOpened: boolean;

  availableTags: TagModule[];
  displayedTags: TagModule[];

  count: number;
  tagName: string;
  tagCategories: string[];
  tagCategoriesWithColor: any[];
  tagDesc: string;

  DialogshowInd: boolean;
}

export default class GeneralInformation extends React.Component<
  any,
  GeneralInformationState
> {
  state = {
    addTagsOpened: false,
    addNewTagOpened: false,

    availableTags: tags,
    // displayedTags: tags,
    displayedTags: [],

    count: 12,
    tagName: "",
    tagCategories: [],
    tagCategoriesWithColor: [],
    tagDesc: "",
    DialogshowInd: false,
  };

  dialogClickHandler = () => {
    this.setState({
      DialogshowInd: true,
    });
  };

  onClose = () => {
    this.setState({
      DialogshowInd: false,
    });
    return true;
  };

  cancelAddTags = () => {
    this.setState({
      displayedTags: [],
      addTagsOpened: !this.state.addTagsOpened,
    });
  };

  toggleAddTags = () => {
    const { addTagsOpened } = this.state;
    this.setState({
      addTagsOpened: !addTagsOpened,
    });
  };
  handleAddNewTagPopup = () => {
    this.setState({
      addTagsOpened: !this.state.addTagsOpened,
      addNewTagOpened: !this.state.addNewTagOpened,
    });
  };

  static contextType = CommercialDetailsContext;

  // componentDidMount() {
  //   // extra process for typescript error || Need to fix this soon
  //   this.initializeTags();
  // }

  // initializeTags = () => {
  //   this.setState({
  //     displayedTags: [],
  //   });
  // };

  addTag = (tag: TagModule) => {
    const displayedTags = [{ ...tag }, ...this.state.displayedTags];
    this.setState({ displayedTags });
  };

  removeTag = (tag: TagModule) => {
    const displayedTags: TagModule[] = this.state.displayedTags;
    const filteredDisplayedTags = displayedTags.filter((t) => t.id !== tag.id);
    this.setState({ displayedTags: filteredDisplayedTags });
  };

  getRandomTagColor = () => {
    return ["blue", "green", "orange"][Math.floor(Math.random() * 3 + 1)];
  };

  addNewTagToList = () => {
    const { count, tagName, tagDesc, tagCategories } = this.state;
    const catObj = tagCategories.map((cat) => {
      return {
        name: cat,
        color: this.getRandomTagColor(),
      };
    });
    const newTag: TagModule = {
      id: count,
      name: tagName,
      categories: tagCategories,
      categoriesWithColor: catObj,
      description: tagDesc,
    };

    this.setState({
      availableTags: [...this.state.availableTags, { ...newTag }],
      displayedTags: [{ ...newTag }, ...this.state.displayedTags],
      count: count + 1,
      tagName: "",
      tagDesc: "",
      tagCategories: [],
      tagCategoriesWithColor: [],
    });

    this.handleAddNewTagPopup();
  };

  handleChange = (event) => {
    if (event.target.name === "name") {
      this.setState({
        tagName: event.target.value,
      });
    }
    if (event.target.name === "desc") {
      this.setState({
        tagDesc: event.target.value,
      });
    }
  };
  handleCategoryChange = (value) => {
    this.setState({
      tagCategories: [...value],
    });
  };

  getDisplayedTags = (): string[] => {
    const displayedTags: TagModule[] = this.state.displayedTags;
    // const filteredDisplayedTags = displayedTags.filter((t) => t.id !== tag.id);
    // const { displayedTags } = this.state;

    let tagsArr: string[] = [];
    for (let index = 0; index < displayedTags.length; index++) {
      const element = displayedTags[index];
      tagsArr.push(element.name);
    }
    return tagsArr;
  };

  addNewTagToForm = () => {
    const { addTagsOpened } = this.state;
    this.setState({
      addTagsOpened: !addTagsOpened,
    });
  };

  render() {
    const { Option } = Select;
    const {
      addTagsOpened,
      addNewTagOpened,

      tagName,
      tagCategories,
      tagDesc,
    } = this.state;
    return (
      <div className="general-information-container">
        <h4>General information</h4>
        <div className="general-information-fields-wrapper setup-label">
          <Grid container>
            <Grid item xs={4}>
              {this.context.currentSelectedModule === "medicare" ? (
                <div className="group">
                  <label>
                    FORMULARY TYPE <span className="astrict">*</span>
                  </label>
                  <DropDown
                    className="formulary-type-dropdown"
                    placeholder="Medicare"
                    options={["Medicare"]}
                  />
                </div>
              ) : this.context.currentSelectedModule === "commercial" ? (
                <div className="group">
                  <label>
                    FORMULARY TYPE <span className="astrict">*</span>
                  </label>
                  <DropDown
                    className="formulary-type-dropdown"
                    placeholder="Commercial"
                    options={["Commercial"]}
                  />
                </div>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={4}>
              <div className="group">
                <label>
                  FORMULARY NAME <span className="astrict">*</span>
                </label>
                <input type="text" className="setup-input-fields" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="group">
                <label>ABBREVIATION</label>
                <input type="text" className="setup-input-fields" />
              </div>
            </Grid>
            <Grid item sm={4}>
              <label>
                EFFECTIVE DATE <span className="astrict">*</span>
              </label>
              <DatePicker
                className="effective-date"
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
            </Grid>
            <FormularyMethod
              popupClick={
                !this.props.isReadOnly ? this.dialogClickHandler : () => {}
              }
            />
            <DialogPopup
              className="frx-claims-result-root"
              showCloseIcon={false}
              positiveActionText=""
              negativeActionText=""
              title="SELECT FORMULARY"
              handleClose={() => {
                this.onClose();
              }}
              handleAction={() => {
                
                console.log("do some action");
              }}
              showActions={false}
              open={this.state.DialogshowInd}
            >
              {this.context.currentSelectedModule === "medicare" ? (
                <CloneFormularyPopup type="medicare" />
              ) : this.context.currentSelectedModule === "commercial" ? (
                <CloneFormularyPopup type="commercial" />
              ) : (
                ""
              )}
            </DialogPopup>
            <Grid item xs={4}>
              <div className="group">
                <label>
                  SERVICE YEAR <span className="astrict">*</span>
                </label>
                <DropDown
                  className="formulary-type-dropdown"
                  options={[2018, 2019, 2020]}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="group">
                <label>FORMULARY DESCRIPTION</label>
                <input type="text" className="setup-input-fields" />
              </div>
            </Grid>
            <Grid item xs={4}>
              {this.context.currentSelectedModule === "medicare" && (
                <div className="group">
                  <label className="input-group-link-lable">
                    Which prior year's formulary does this most closely
                    resemble?
                  </label>
                  <a onClick={this.dialogClickHandler} className="input-link ">
                    Select Formulary
                  </a>
                </div>
              )}
            </Grid>
            <Grid item xs={4}>
              <div className="group setup-panel">
                <PanelHeader
                  title="FORMULARY CLASSIFICATION SYSTEM"
                  tooltip="FORMULARY CLASSIFICATION SYSTEM"
                />
                <div className="marketing-material radio-group">
                  {this.context.currentSelectedModule === "commercial" ? (
                    <RadioButton label="Medispan" name="medispan" checked />
                  ) : (
                    <Fragment>
                      <RadioButton label="USP" name="marketing-usp-radio" />
                      <RadioButton label="AHFS" name="marketing-usp-radio" />
                      <RadioButton
                        label="Medispan"
                        name="marketing-usp-radio"
                        checked
                      />
                    </Fragment>
                  )}
                </div>
              </div>
            </Grid>
            {this.context.currentSelectedModule === "commercial" ? (
              <Grid item xs={4}>
                <div className="group setup-panel">
                  <PanelHeader
                    title="IS THIS A CLOSED OR OPEN FORMULARY"
                    tooltip="IS THIS A CLOSED OR OPEN FORMULARY"
                  />
                  <div className="marketing-material radio-group">
                    <RadioButton
                      label="Closed"
                      name="marketing-usp-radio"
                      checked
                    />
                    <RadioButton label="Open" name="marketing-usp-radio" />
                  </div>
                </div>
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={4}>
              <div className="group reporting-tag-group">
                <label>reporting tags</label>
                <Select
                  mode="multiple"
                  showSearch={false}
                  // value={value}
                  defaultActiveFirstOption={false}
                  disabled={this.getDisplayedTags().length === 0 ? false : true}
                  notFoundContent={null}
                  placeholder={"Add a tag"}
                  onClick={this.toggleAddTags}
                  className="root--ant-select-tag"
                  value={
                    this.getDisplayedTags().length === 0
                      ? []
                      : this.getDisplayedTags()
                  }
                />
                <EditIcon
                  className="ability-to-add-tags-edit-icon"
                  onClick={this.toggleAddTags}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        {addTagsOpened ? (
          <DialogPopup
            className=""
            showCloseIcon={false}
            positiveActionText="Apply"
            negativeActionText="Cancel"
            title="tags"
            handleClose={this.cancelAddTags}
            handleAction={this.addNewTagToForm}
            showActions={true}
            open={addTagsOpened}
            popupMaxWidth={"lg"}
            headJSX={() => (
              <button
                className="add-new-tag-btn"
                onClick={this.handleAddNewTagPopup}
              >
                + Add New Tag
              </button>
            )}
          >
            <FrxReportingTags
              availableTags={this.state.availableTags}
              displayedTags={this.state.displayedTags}
              removeTag={this.removeTag}
              addTag={this.addTag}
            />
          </DialogPopup>
        ) : null}

        {addNewTagOpened ? (
          <div className="root-component-add-new-tag">
            <DialogPopup
              showCloseIcon={true}
              positiveActionText="Add Tag"
              negativeActionText="Cancel"
              title="ADD NEW TAG"
              handleClose={this.handleAddNewTagPopup}
              handleAction={this.addNewTagToList}
              showActions={true}
              open={addNewTagOpened}
              popupMaxWidth={"md"}
              className="root-add-new-tag-popup"
            >
              <AddNewTag
                categories={categories}
                tagName={tagName}
                tagCategories={tagCategories}
                tagDesc={tagDesc}
                handleChange={this.handleChange}
                handleCategoryChange={this.handleCategoryChange}
              />
            </DialogPopup>
          </div>
        ) : null}
      </div>
    );
  }
}

// fake data
const categories = [
  { id: 1, name: "Category 1", color: "green" },
  { id: 2, name: "Category 2", color: "blue" },
  { id: 3, name: "Category 3", color: "orange" },
  { id: 4, name: "Category 4", color: "green" },
  { id: 5, name: "Category 5", color: "blue" },
  { id: 6, name: "Category 6", color: "orange" },
  { id: 7, name: "Category 7", color: "green" },
  { id: 8, name: "Category 8", color: "blue" },
];

// fake data
const tags = [
  {
    id: 1,
    name: "Tag 1",
    description: "This will display all assets with Tag 1",
    categories: ["Category 1", "Category 2", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 2", color: "blue" },
      { name: "Category 6", color: "orange" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 2,
    name: "Tag 2",
    description: "This will display all assets with Tag 2",
    categories: ["Category 1", "Category 2", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "blue" },
      { name: "Category 2", color: "orange" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 3,
    name: "Tag 3",
    description: "This will display all assets with Tag 3",
    categories: ["Category 1", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 8", color: "orange" },
    ],
  },
  {
    id: 4,
    name: "Tag 4",
    description: "This will display all assets with Tag 4",
    categories: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 7",
      "Category 8",
    ],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 2", color: "orange" },
      { name: "Category 3", color: "blue" },
      { name: "Category 4", color: "orange" },
      { name: "Category 7", color: "blue" },
      { name: "Category 5", color: "green" },
      { name: "Category 8", color: "orange" },
    ],
  },
  {
    id: 5,
    name: "Tag 5",
    description: "This will display all assets with Tag 5",

    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 2", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 6,
    name: "Tag 6",
    description: "This will display all assets with Tag 6",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 2", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 7,
    name: "Tag 7",
    description: "This will display all assets with Tag 7",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 8,
    name: "Tag 8",
    description: "This will display all assets with Tag 8",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 9,
    name: "Tag 9",
    description: "This will display all assets with Tag 9",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 10,
    name: "Tag 10",
    description: "This will display all assets with Tag 10",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
  {
    id: 11,
    name: "Tag 11",
    description: "This will display all assets with Tag 11",
    categories: ["Category 2", "Category 4", "Category 6", "Category 8"],
    categoriesWithColor: [
      { name: "Category 1", color: "green" },
      { name: "Category 4", color: "orange" },
      { name: "Category 6", color: "blue" },
      { name: "Category 8", color: "green" },
    ],
  },
];
