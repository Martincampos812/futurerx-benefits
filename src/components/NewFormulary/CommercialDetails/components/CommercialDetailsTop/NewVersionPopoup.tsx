import { Grid } from "@material-ui/core";
import { DatePicker, Dropdown } from "antd";
import React from "react";
import Button from "../../../../shared/Frx-components/button/Button";
import DropDown from "../../../../shared/Frx-components/dropdown/DropDown";
import "./CommercialPopup.scss";
export default class NewVersionPopup extends React.Component<any, any> {
render(){
    return(
        <div className="version-grid-container">
            <Grid container>
            <Grid item xs={12}>
            <div className="version-grid-date-btn-wrapper">
                <div className="version-grid-date-wrapper">
                    <div className="form">
                        <label>
                            EFFECTIVE DATE<span>*</span>
                        </label>
                        <DatePicker
                            className="version-grid-date"
                            placeholder="Effective Date"
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
                    <div className="form">
                        <label>
                            SUBMISSION MONTH<span>*</span>
                        </label>
                        <DropDown className="version-grid-dropdown" placeholder="Month" options={["January", "February","March", "April","May", "June","July", "August","September", "October","November", "December"]}/>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item xs={12}>
                <div className="action-btn">
                    <Button label="Cancel" htmlFor="upload-file" className="upload-button cancel-btn"/>
                    <Button label="Save" htmlFor="upload-file" className="upload-button submit-btn"/>
                </div>
            </Grid>
            </Grid>
        </div>
    );
}
}