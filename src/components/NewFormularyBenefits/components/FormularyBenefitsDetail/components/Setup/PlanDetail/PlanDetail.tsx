import React from "react";
import Grid from "@material-ui/core/Grid";
import RadioButton from "../../../../../../shared/Frx-components/radio-button/RadioButton";
import DialogPopup from "../../../../../../shared/FrxDialogPopup/FrxDialogPopup";

import "./PlanDetail.scss";
import PanelHeader from "../../../../../../NewFormulary/DrugDetails/components/FormularyConfigure/components/PanelHeader";
import RejectCode from "./RejectCode";

export default class PlanDetail extends React.Component<any, any> {

    state = {
        DialogshowInd: false
    }

    rejectCodeDialog = () => {
        this.setState({
            DialogshowInd: true,
        });
    }

    onClose = () => {
        this.setState({
            DialogshowInd: false,
        });
        return true;
    };

    render() {
        return (
            <div className="plan-detail-wrapper">
                <div className="heading-wrapper">
                    <h4>Plan Details</h4>
                </div>
                <div className="fields-wrapper">
                    <Grid container>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">are any drugs to be filled at specific networks?<span className="star">*</span></span>
                                <RadioButton label="YES" name="specific-pharmacies" checked />
                                <RadioButton label="NO" name="specific-pharmacies" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">does your plan offer incentives?<span className="star">*</span></span>
                                <RadioButton label="YES" name="plan-offer" checked />
                                <RadioButton label="NO" name="plan-offer" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">does your plan allow for partial fills to process?<span className="star">*</span></span>
                                <RadioButton label="YES" name="partial-fill" checked />
                                <RadioButton label="NO" name="partial-fill" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you offer free first fill?<span className="star">*</span></span>
                                <RadioButton label="YES" name="first-fill" checked />
                                <RadioButton label="NO" name="first-fill" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you want to apply daily cost share?<span className="star">*</span></span>
                                <RadioButton label="YES" name="cost-share" checked />
                                <RadioButton label="NO" name="cost-share" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">number of partial fills to process?<span className="star">*</span></span>
                                <input type="text" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">do you cover compound medications?<span className="star">*</span></span>
                                <div className="radio-icon-wrapper">
                                    <div>
                                        <RadioButton label="YES" name="compound-medication" checked />
                                        <RadioButton label="NO" name="compound-medication" />
                                    </div>
                                    <div className="reject-icon">
                                        <svg onClick={(e) => this.rejectCodeDialog()} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7974 13.7504C18.3742 14.7502 17.6502 16 16.4981 16H1.5017C0.347415 16 -0.373272 14.7483 0.202415 13.7504L7.70073 0.749531C8.27782 -0.25075 9.72323 -0.248937 10.2993 0.749531L17.7974 13.7504ZM9.00001 11.0625C8.2061 11.0625 7.56251 11.7061 7.56251 12.5C7.56251 13.2939 8.2061 13.9375 9.00001 13.9375C9.79391 13.9375 10.4375 13.2939 10.4375 12.5C10.4375 11.7061 9.79391 11.0625 9.00001 11.0625ZM7.63523 5.89544L7.86704 10.1454C7.87788 10.3443 8.04232 10.5 8.24148 10.5H9.75854C9.9577 10.5 10.1221 10.3443 10.133 10.1454L10.3648 5.89544C10.3765 5.68063 10.2055 5.5 9.99035 5.5H8.00963C7.79451 5.5 7.62351 5.68063 7.63523 5.89544Z" fill="#E76262" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">doES YOUR PLAN COVER DIRECT MEMBER REIMBURSEMENT (DMR)?</span>
                                <RadioButton label="YES" name="dmr-radio" checked />
                                <RadioButton label="NO" name="dmr-radio" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <PanelHeader
                                    title="Only allow FDA therapeutically equivalent generics?"
                                    tooltip="(aka A rated)"
                                />
                                <RadioButton label="YES" name="fda-radio" checked />
                                <RadioButton label="NO" name="fda-radio" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">does you plan cover PHARMACY paper claims?<span className="star">*</span></span>
                                <RadioButton label="YES" name="paper-claim" checked />
                                <RadioButton label="NO" name="paper-claim" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">does your plan offer a transition benefit?<span className="star">*</span></span>
                                <RadioButton label="YES" name="plan-offer" checked />
                                <RadioButton label="NO" name="plan-offer" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="field-group">
                                <span className="labels">Do you want to allow products dispensed in unbreakable packaging to process outside of days supply edits<span className="star">*</span></span>
                                <RadioButton label="YES" name="products-dispensed" checked />
                                <RadioButton label="NO" name="products-dispensed" />
                            </div>
                        </Grid>
                    </Grid>
                    <DialogPopup
                        className="frx-claims-result-root"
                        showCloseIcon={true}
                        positiveActionText="Save"
                        negativeActionText="Cancel"
                        title="REJECT CODE"
                        handleClose={() => {
                            this.onClose();
                        }}
                        handleAction={() => {
                            debugger;
                            console.log("do some action");
                        }}
                        showActions={true}
                        open={this.state.DialogshowInd}
                    >
                        <RejectCode />
                    </DialogPopup>
                </div>
            </div>
        )
    }
}