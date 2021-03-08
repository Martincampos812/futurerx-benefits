import React from "react";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import MedicalPlan from "./MedicalPlan/MedicalPlan";
import NetworkOffer from "./NetworkOffer/NetworkOffer";
import PlanDetail from "./PlanDetail/PlanDetail";

import "./Setup.scss";

export default class FormularyBenefitsDetailSetup extends React.Component<any, any> {
    render() {
        return (
            <div className="setup-container">
                <GeneralInformation />
                <NetworkOffer />
                <PlanDetail />
                <MedicalPlan />
            </div>
        )
    }
}