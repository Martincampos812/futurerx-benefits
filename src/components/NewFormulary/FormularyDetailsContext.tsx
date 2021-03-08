import React from "react";

const formularyDetailsContext = React.createContext({
  showDetailHandler: () => {},
  currentSelectedModule: ''
});

export default formularyDetailsContext;
