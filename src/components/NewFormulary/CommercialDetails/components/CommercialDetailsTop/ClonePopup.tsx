import { Box, Grid } from "@material-ui/core";
import React from "react";
import Button from "../../../../shared/Frx-components/button/Button";
import "./CommercialPopup.scss";
export default class ClonePopup extends React.Component<any, any> {
render(){
    return(
        <div className="popup-container">
            <Grid container>
                <Grid item xs={12}>
                    <div className="group select-formulary-name">
                        <label>New Name <span className="astrict">*</span></label>
                        <input type="text" placeholder="2021Care926-1 v.1" className="base-input" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                <div className="action-btn">
                        <Button label="Cancel" htmlFor="upload-file" className="upload-button cancel-btn"/>
                        <Button label="Clone" htmlFor="upload-file" className="upload-button submit-btn"/>
                </div>
                </Grid>
            </Grid>
        </div>
    );
}
}