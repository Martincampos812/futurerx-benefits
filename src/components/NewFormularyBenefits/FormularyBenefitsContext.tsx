import React from "react";

const formularyBenefitsContext = React.createContext({
  showDetailHandler: (id:any, rootPath:any) => {},
  currentSelectedModule: ''
});

export default formularyBenefitsContext;
