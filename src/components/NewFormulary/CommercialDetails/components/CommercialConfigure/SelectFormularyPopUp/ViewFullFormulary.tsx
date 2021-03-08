import React from "react";
import { getFormularyDetails } from "../../../../../../mocks/formulary/formularyDetails";
import CommercialDetails from "../../../CommercialDetails";

const ViewFullFormulary = () => {
  return <CommercialDetails isReadOnly={true} data={getFormularyDetails()} />;
};

export default ViewFullFormulary;
