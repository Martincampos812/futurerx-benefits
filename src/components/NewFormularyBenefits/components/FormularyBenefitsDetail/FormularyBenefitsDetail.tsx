import React, { Fragment } from "react";
import { TabInfo } from "../../../../models/tab.model";
import FrxTabs from "../../../shared/FrxTabs/FrxTabs";
import FormularyDetailsTop from "./components/FormularyDetailTop/FormularyBenefitsDetailTop";
import "./FormularyBenefitsDetail.scss";
import Validation from "../../../Validation/Validation";
import { connect } from "react-redux";
import FormularyBenefitsDetailTop from "./components/FormularyDetailTop/FormularyBenefitsDetailTop";
import FormularyBenefitsDetailSetup from "./components/Setup/Setup";
import FormularyBenefitsDetailConfigure from "./components/Configure/Configure";


const miniTabs = [
  { id: 1, text: "Setup" },
  { id: 2, text: "Configure" },
];
const mapStateToProps = (state) => {
  console.log(state);
  return {
    current_formulary: state.formularBase.current_formulary,
  };
};
class FormularyBenefitsDetail extends React.Component<any, any> {
  state = {
    tabs: miniTabs,
    activeTabIndex: 0,
    saveBtnInd: false,
    addCriteriaInd: false,
  };
  addCriteriahandler = () => {
    this.setState({ addCriteriaInd : true, saveBtnInd : false })
  }
  onClickTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = this.state.tabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeTabIndex = index;
      }
      return tab;
    });
    this.setState({ tabs, activeTabIndex });
  };
  componentDidMount(){
   
  }
  saveBtnHandler = () => {
    this.setState({ saveBtnInd : true, addCriteriaInd : false })
  }
  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    switch (tabIndex) {
      case 0:
        return <FormularyBenefitsDetailSetup />; 
      case 1:
        return <FormularyBenefitsDetailConfigure />;   
    }
  };
  render() {
    const fData = this.props.data;
    return (
      <>
        <FormularyBenefitsDetailTop formularyTopData={fData} saveBtnInd={this.state.saveBtnInd} rootPath={this.props.rootPath} />
        <div className="drug-details-bottom">
          <FrxTabs
            tabList={this.state.tabs}
            typeCard={"line"}
            activeTabIndex={this.state.activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className="inner-container">{this.renderActiveTabContent()}</div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps)(FormularyBenefitsDetail);
