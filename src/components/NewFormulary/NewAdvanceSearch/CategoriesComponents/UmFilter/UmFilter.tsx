import React, { Component } from "react";
import { Checkbox, Button } from "@material-ui/core";
import { Left } from "react-bootstrap/lib/Media";

import "./UmFilter.scss";

const umfilter = [
  { id: 1, lable: "N/A" },
  { id: 2, lable: "Limited Access" },
  { id: 3, lable: "MO/NM Indicator" },
  { id: 4, lable: "Additional Demonstration Drugs " },
  { id: 5, lable: "Indication Based Coverage" },
  { id: 6, lable: "Full Gap Coverage" },
  { id: 7, lable: "ST Type 1" },
  { id: 8, lable: "ST Type 2" },
  { id: 9, lable: "QL Type 1" },
  { id: 10, lable: "QL Type 2" },
  { id: 11, lable: "Partial Gap Coverage" },
  { id: 12, lable: "Free First Fill" },
  { id: 13, lable: "Home Infusion" },
  { id: 14, lable: "Value-Based Insurance Design" },
  { id: 15, lable: "Capped Benefits" },
  { id: 16, lable: "PA Type 1" },
  { id: 17, lable: "PA Type 2" },
  { id: 18, lable: "PA Type 3" },
  { id: 19, lable: "UM Criteria" },
  { id: 20, lable: "LIS Cost-Sharing Reduction" },
  { id: 21, lable: "Part B Step Therapy" },
  { id: 22, lable: "Senior Savings Model" },
  { id: 23, lable: "Abridged Formulary" },
  { id: 24, lable: "other" },
];

interface Props {}
interface State {}

class UmFilter extends Component<Props, State> {
  state = {
    umFilterList: umfilter,
    newUmlable: "",
    selectedUm: [],
  };

  handleOnChange = (e) => {
    console.log(e.target.name);
    this.setState({ newUmlable: e.target.value });
  };

  addUmFilter = () => {
    if (this.state.newUmlable == "") return;
    const curretUmFilteList = [...this.state.umFilterList];
    const newUmFilter = {
      id: curretUmFilteList.length,
      lable: this.state.newUmlable,
    };
    curretUmFilteList.push(newUmFilter);
    this.setState({ umFilterList: curretUmFilteList, newUmlable: "" });
  };

  deleteUmFilter = () => {
    if (this.state.newUmlable == "") return;
    const currentUmFilterList = [...this.state.umFilterList];
    const filterList = currentUmFilterList.filter(
      (umFilter) =>
        umFilter.lable.toLowerCase() !== this.state.newUmlable.toLowerCase()
    );

    this.setState({ umFilterList: filterList, newUmlable: "" });
  };

  onSelect = (e, selectedUm) => {
    const currentSelectedUmList: any = [...this.state.selectedUm];

    if (e.target.checked) {
      currentSelectedUmList.push(selectedUm);
      this.setState({ selectedUm: currentSelectedUmList });
    } else {
      const filterdSelectedUmList = currentSelectedUmList.filter(
        (umList) => umList.id !== selectedUm.id
      );
      this.setState({ selectedUm: filterdSelectedUmList });
    }
  };

  render() {
    const { umFilterList } = this.state;
    return (
      <div className="__root-um-filter-container">
        <div className="__filter-list-container">
          <div
            // style={{ border: "1px solid red", width: "77%" }}
            className="__list-wraper"
          >
            {umFilterList.map((filterList) => (
              <span
                key={filterList.id}
                className="__filter-list"
                // style={{
                //   display: "inline-block",
                //   width: "248px",
                //   border: "1px solid gray",
                // }}
              >
                <Checkbox
                  color="primary"
                  size="small"
                  style={{ borderRadius: "15px" }}
                  onClick={(e) => this.onSelect(e, filterList)}
                />
                <label htmlFor="" className="__list-lable">
                  {filterList.lable}
                </label>
              </span>
            ))}
            <div className="button-container">
              <div className="__add-input-delete-container">
                <input
                  type="text"
                  className="__add-input"
                  name={"newUmlable"}
                  value={this.state.newUmlable}
                  onChange={this.handleOnChange}
                />
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="delete-icon"
                  onClick={this.deleteUmFilter}
                >
                  <path
                    d="M1.75065 13.0417C1.75065 13.9125 2.46315 14.625 3.33398 14.625H9.66732C10.5382 14.625 11.2507 13.9125 11.2507 13.0417V3.54167H1.75065V13.0417ZM12.0423 1.16667H9.27148L8.47982 0.375H4.52148L3.72982 1.16667H0.958984V2.75H12.0423V1.16667Z"
                    fill="#999999"
                  />
                </svg>
                <div
                  className="__add-button-container"
                  onClick={this.addUmFilter}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0312 15.0309C18.3507 11.7115 18.3507 6.32958 15.0312 3.0101C11.7117 -0.309383 6.32985 -0.30934 3.01041 3.0101C-0.309032 6.32954 -0.309075 11.7114 3.01041 15.0309C6.32989 18.3504 11.7118 18.3504 15.0312 15.0309ZM14.3241 14.3238C17.2531 11.3949 17.253 6.64611 14.3241 3.71721C11.3952 0.788307 6.64646 0.788264 3.71751 3.71721C0.788571 6.64615 0.788615 11.3949 3.71751 14.3238C6.64641 17.2527 11.3952 17.2528 14.3241 14.3238Z"
                      fill="#707683"
                    />
                    <path
                      d="M4.52082 9.0205C4.52082 9.29664 4.74468 9.5205 5.02082 9.5205H8.52082V13.0205C8.52082 13.2966 8.74468 13.5205 9.02082 13.5205C9.29696 13.5205 9.52082 13.2966 9.52082 13.0205V9.5205L13.0208 9.5205C13.297 9.5205 13.5208 9.29664 13.5208 9.0205C13.5208 8.74436 13.297 8.5205 13.0208 8.5205H9.52082L9.52082 5.0205C9.52082 4.74436 9.29696 4.5205 9.02082 4.5205C8.74468 4.5205 8.52082 4.74436 8.52082 5.0205V8.5205H5.02082C4.74468 8.5205 4.52082 8.74436 4.52082 9.0205Z"
                      fill="#707683"
                    />
                  </svg>
                  <span className="add-button">
                    <p>add new</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UmFilter;
