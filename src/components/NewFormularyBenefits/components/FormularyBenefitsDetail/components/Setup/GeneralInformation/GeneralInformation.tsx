import React from "react";
import Grid from "@material-ui/core/Grid";
import DropDown from "../../../../../../shared/Frx-components/dropdown/DropDown";
import DialogPopup from "../../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import FrxReportingTags from "../../../../../../shared/FrxReportingTags/FrxReportingTags";
import AddNewTag from "../../../../../../shared/FrxReportingTags/AddNewTag";
import "../../../../../../shared/FrxReportingTags/FrxReportingTags.scss";
import { DatePicker, Select } from "antd";
import SelectFormulary from "./SelectFormulary";

import "./GeneralInformation.scss";

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

export default class GeneralInformation extends React.Component<any, GeneralInformationState> {

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

    addTag = (tag: TagModule) => {
        const displayedTags = [{ ...tag }, ...this.state.displayedTags];
        this.setState({ displayedTags });
    };

    removeTag = (tag: TagModule) => {
        const displayedTags: TagModule[] = this.state.displayedTags;
        const filteredDisplayedTags = displayedTags.filter((t) => t.id !== tag.id);
        this.setState({ displayedTags: filteredDisplayedTags });
    };

    toggleAddTags = () => {
        const { addTagsOpened } = this.state;
        this.setState({
            addTagsOpened: !addTagsOpened,
        });
    };

    selectFormularyHandle = () => {
        this.setState({
            DialogshowInd: true,
        });
    }

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

    handleAddNewTagPopup = () => {
        this.setState({
            addTagsOpened: !this.state.addTagsOpened,
            addNewTagOpened: !this.state.addNewTagOpened,
        });
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

    cancelAddTags = () => {
        this.setState({
            displayedTags: [],
            addTagsOpened: !this.state.addTagsOpened,
        });
    };

    addNewTagToForm = () => {
        const { addTagsOpened } = this.state;
        this.setState({
            addTagsOpened: !addTagsOpened,
        });
    };

    handleCategoryChange = (value) => {
        this.setState({
            tagCategories: [...value],
        });
    };

    onClose = () => {
        this.setState({
            DialogshowInd: false,
        });
        return true;
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
            <div className="general-information-wrapper">
                <div className="heading-wrapper">
                    <h4>GENERAL INFORMATION</h4>
                </div>
                <div className="fields-wrapper">
                    <Grid container>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>benefit type <span className="star">*</span></label>
                                <DropDown
                                    className="benefit-dropdown"
                                    placeholder="Commercial"
                                    options={["Commercial"]}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>benefit NAME<span className="star">*</span></label>
                                <input type="text" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>benefit alias<span className="star">*</span></label>
                                <input type="text" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>benefit id<span className="star">*</span></label>
                                <span className="benefit-id">103-9487759400</span>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className="field-group">
                                <label>
                                    EFFECTIVE DATE <span className="star">*</span>
                                </label>
                                <DatePicker
                                    className="benefit-effective-date"
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
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>benefit service year<span className="star">*</span></label>
                                <DropDown
                                    className="benefit-dropdown"
                                    placeholder=""
                                    options={[""]}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>

                            
                            <div className="field-group reporting-tag-group">
                                <label>reporting tags</label>
                                <Select
                                    mode="multiple"
                                    showSearch={false}
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
                                <svg className="ability-to-add-tags-edit-icon" onClick={this.toggleAddTags} width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6493 2.43847L14.2593 5.08105C14.3692 5.19238 14.3692 5.37402 14.2593 5.48535L7.93981 11.8838L5.25463 12.1855C4.89583 12.2266 4.59201 11.9189 4.63252 11.5557L4.93056 8.83691L11.25 2.43847C11.36 2.32715 11.5394 2.32715 11.6493 2.43847ZM16.3368 1.76758L14.9248 0.33789C14.485 -0.107422 13.7703 -0.107422 13.3275 0.33789L12.3032 1.375C12.1933 1.48633 12.1933 1.66797 12.3032 1.7793L14.9132 4.42187C15.0231 4.5332 15.2025 4.5332 15.3125 4.42187L16.3368 3.38476C16.7766 2.93652 16.7766 2.21289 16.3368 1.76758ZM11.1111 10.1435V13.126H1.85185V3.75097H8.50116C8.59375 3.75097 8.68056 3.71289 8.74711 3.64843L9.90451 2.47656C10.1244 2.2539 9.96817 1.87597 9.65856 1.87597H1.38889C0.622106 1.87597 0 2.50586 0 3.28222V13.5947C0 14.3711 0.622106 15.001 1.38889 15.001H11.5741C12.3409 15.001 12.963 14.3711 12.963 13.5947V8.97167C12.963 8.6582 12.5897 8.50292 12.3698 8.72265L11.2124 9.89452C11.1487 9.9619 11.1111 10.0498 11.1111 10.1435Z" fill="#1D54B4" />
                                </svg>
                            </div>
                        
                        
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <label>formulary type<span className="star">*</span></label>
                                <DropDown
                                    className="benefit-dropdown"
                                    placeholder=""
                                    options={[""]}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group reporting-tag-group">
                                <label>formulary</label>
                                <div className="dialog-div-wrapper" onClick={this.selectFormularyHandle}>
                                    <span>Select Formulary</span>

                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6493 2.43847L14.2593 5.08105C14.3692 5.19238 14.3692 5.37402 14.2593 5.48535L7.93981 11.8838L5.25463 12.1855C4.89583 12.2266 4.59201 11.9189 4.63252 11.5557L4.93056 8.83691L11.25 2.43847C11.36 2.32715 11.5394 2.32715 11.6493 2.43847ZM16.3368 1.76758L14.9248 0.33789C14.485 -0.107422 13.7703 -0.107422 13.3275 0.33789L12.3032 1.375C12.1933 1.48633 12.1933 1.66797 12.3032 1.7793L14.9132 4.42187C15.0231 4.5332 15.2025 4.5332 15.3125 4.42187L16.3368 3.38476C16.7766 2.93652 16.7766 2.21289 16.3368 1.76758ZM11.1111 10.1435V13.126H1.85185V3.75097H8.50116C8.59375 3.75097 8.68056 3.71289 8.74711 3.64843L9.90451 2.47656C10.1244 2.2539 9.96817 1.87597 9.65856 1.87597H1.38889C0.622106 1.87597 0 2.50586 0 3.28222V13.5947C0 14.3711 0.622106 15.001 1.38889 15.001H11.5741C12.3409 15.001 12.963 14.3711 12.963 13.5947V8.97167C12.963 8.6582 12.5897 8.50292 12.3698 8.72265L11.2124 9.89452C11.1487 9.9619 11.1111 10.0498 11.1111 10.1435Z" fill="#1D54B4" />
                                    </svg>

                                </div>
                            </div>
                        </Grid>
                    </Grid>


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
                            debugger;
                            console.log("do some action");
                        }}
                        showActions={false}
                        open={this.state.DialogshowInd}
                    >
                        <SelectFormulary />
                    </DialogPopup>


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
        )
    }
}

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
