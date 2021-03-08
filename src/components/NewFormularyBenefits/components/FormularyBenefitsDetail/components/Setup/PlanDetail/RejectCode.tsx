import React from "react";
import RadioButton from "../../../../../../shared/Frx-components/radio-button/RadioButton";

import "./PlanDetail.scss";

export default class RejectCode extends React.Component<any, any> {

    render() {
        return (
            <div className="reject-code-container">
                <div className="reject-code-wrapper">
                    <div className="left-side">
                        <div className="code-wrapper">
                            <h4>code</h4>
                            <h5>7Y</h5>
                        </div>
                        <div className="message-wrapper">
                            <h4>custom messaging</h4>
                            <RadioButton label="YES" name="paper-claim" checked />
                            <RadioButton label="NO" name="paper-claim" />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="code-wrapper">
                            <h4>REJECT MESSAGE</h4>
                            <h5>Compounds Not Covered.</h5>
                        </div>
                        <div className="message-wrapper">
                            <h4>REJECT MESSAGE</h4>
                            <input type="text" />
                            <p>This reject message will be sent back on submitted claims that meet this condition.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}