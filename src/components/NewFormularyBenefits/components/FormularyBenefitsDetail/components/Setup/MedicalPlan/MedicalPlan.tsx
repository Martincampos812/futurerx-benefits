import React from "react";
import Grid from "@material-ui/core/Grid";
import RadioButton from "../../../../../../shared/Frx-components/radio-button/RadioButton";

import "./MedicalPlan.scss";

export default class MedicalPlan extends React.Component<any, any> {

    render() {
        return (
            <div className="medical-plan-wrapper">
                <div className="heading-wrapper">
                    <h4>MEDICARE plan details</h4>
                </div>
                <div className="fields-wrapper">
                    <Grid container>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you offer a ‘part c over the counter benefit’/ ‘over the counter benefits’?<span className="star">*</span></span>
                                <RadioButton label="YES" name="counter-benefit" checked />
                                <RadioButton label="NO" name="counter-benefit" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you offer a part b at point of sale?<span className="star">*</span></span>
                                <RadioButton label="YES" name="point-sale" checked />
                                <RadioButton label="NO" name="point-sale" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you offer enhanced coverage for part d products?<span className="star">*</span></span>
                                <RadioButton label="YES" name="coverage-products" checked />
                                <RadioButton label="NO" name="coverage-products" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">ARE VACCINES OFFERED at point of sale?<span className="star">*</span></span>
                                <RadioButton label="YES" name="vaccine-offer" checked />
                                <RadioButton label="NO" name="vaccine-offer" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}