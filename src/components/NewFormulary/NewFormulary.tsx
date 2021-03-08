import React from "react";
import { connect } from "react-redux";

import { TabInfo } from "../../models/tab.model";
import FrxTabs from "../shared/FrxTabs/FrxTabs";
import Medicare from "./Medicare/Medicare";
import DrugDetails from "./DrugDetails/FormularyDetails";
import DrugDetailsContext from "./FormularyDetailsContext";
import MassMaintenanceContext from "./FormularyDetailsContext";
import MassMaintenance from "./MassMaintenance/MassMaintenance";
import CommercialDetails from "./CommercialDetails/CommercialDetails";
import CommercialDetailsContext from "./FormularyDetailsContext";
import FormularyDashboardStats from "./../FormularyDashboardStats/FormularyDashboardStats";
import { getFormularyDetails } from "../../mocks/formulary/formularyDetails";
import { fetchFormularies } from "../../redux/slices/formulary/dashboard/dashboardSlice";
import { setFormulary } from "../../redux/slices/formulary/application/applicationSlice";
import "./NewFormulary.scss";
import Medicaid from "./Medicaid/Medicaid";
import Commercial from "./Commercial/Commercial";

const tabs = [
  { id: 1, text: "MEDICARE" },
  { id: 2, text: "MEDICAID" },
  { id: 3, text: "COMMERCIAL" },
  { id: 4, text: "EXCHANGE" },
];

interface State {
  tabs: Array<TabInfo>;
  activeTabIndex: number;
  showTabs: boolean;
  showMassMaintenance: boolean;
  showDrugDetails: boolean;
  showCommercialDrugDetails: boolean;
}

const mapStateToProps = (state) => {
  //console.log("***** DB");
  console.log(state);
  return {
    formulary_count: state?.dashboard?.formulary_count,
    formulary_list: state?.dashboard?.formulary_list,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchFormularies: (a) => dispatch(fetchFormularies(a)),
    setFormulary: (arg) => dispatch(setFormulary(arg)),
  };
}

// REFERENCE ::
// listPayload = {
//   index: 0,
//   limit: 10,
//   filter: [],
//   id_lob: 4,
//   search_by: null,
//   search_key: "",
//   search_value: [],
//   sort_by: ['contract_year','lob_name','formulary_name','status'],
//   sort_order: ['asc','asc','asc','asc'],
// }

class Formulary extends React.Component<any, any> {
  state = {
    activeTabIndex: 0,
    tabs: tabs,
    showTabs: true,
    showMassMaintenance: false,
    showDrugDetails: false,
    showCommercialDrugDetails: false,
    currentSubTab: {
      text: "",
    },
  };

  listPayload = {
    index: 0,
    limit: 10,
    filter: [],
    id_lob: 4,
    search_by: null,
    search_key: "",
    search_value: [],
    sort_by: ["cms_formulary_id"],
    sort_order: ["desc"],
  };

  componentDidMount() {
    this.props.fetchFormularies(this.listPayload);
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
  drugDetailsClickHandler = (id: any) => {
    let selectedRow: any = null;
    if (id !== undefined) {
      selectedRow = this.props.formulary_list[id - 1];
    }
    this.props.setFormulary(selectedRow);
    this.setState({
      showTabs: !this.state.showTabs,
      showDrugDetails: !this.state.showDrugDetails,
      showCommercialDrugDetails: this.state.activeTabIndex === 2 ? true : false,
    });
  };

  massMaintenanceCLickHandler = () => {
    this.setState({
      showTabs: !this.state.showTabs,
      showMassMaintenance: !this.state.showMassMaintenance,
    });
  };

  commercialCLickHandler = (isFunctionCallBack = false) => {
    if (isFunctionCallBack) {
      this.setState({
        showTabs: !this.state.showTabs,
        showCommercialDrugDetails:
          this.state.activeTabIndex === 2 ? true : false,
      });
    }
  };

  handleSubTabChange = (value) => {
    this.setState({ currentSubTab: value });
  };

  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    switch (tabIndex) {
      case 0:
        return (
          <Medicare
            drugDetailClick={this.drugDetailsClickHandler}
            onMassMaintenanceCLick={this.massMaintenanceCLickHandler}
            baseData={this.props.formulary_list}
          />
        );
      case 1:
        // return <Medicaid />;
        return <div>Medicaid</div>;
      case 2:
        return (
          <Commercial
            drugDetailClick={this.commercialCLickHandler}
            onMassMaintenanceCLick={this.massMaintenanceCLickHandler}
            onSubTabChange={this.handleSubTabChange}
          />
        );
      case 3:
        return <div>EXCHANGE</div>;
    }
  };
  render() {
    return (
      <div className="formulary-root">
        {this.state.showTabs ? (
          <>
            {this.state.currentSubTab &&
              this.state.currentSubTab.text !== "Mass Maintenance" && (
                <FormularyDashboardStats />
              )}
            <FrxTabs
              tabList={this.state.tabs}
              activeTabIndex={this.state.activeTabIndex}
              onClickTab={this.onClickTab}
            />
            <div className="formulary-tabs-info">
              {this.renderActiveTabContent()}
            </div>
          </>
        ) : this.state.showDrugDetails ? (
          <DrugDetailsContext.Provider
            value={{
              showDetailHandler: () => this.drugDetailsClickHandler,
              currentSelectedModule: this.state.tabs[
                this.state.activeTabIndex
              ].text.toLowerCase(),
            }}
          >
            <DrugDetails data={getFormularyDetails()} />
          </DrugDetailsContext.Provider>
        ) : this.state.showMassMaintenance ? (
          <MassMaintenanceContext.Provider
            value={{
              showDetailHandler: this.massMaintenanceCLickHandler,
              currentSelectedModule: this.state.tabs[
                this.state.activeTabIndex
              ].text.toLowerCase(),
            }}
          >
            <MassMaintenance data={getFormularyDetails()} />
          </MassMaintenanceContext.Provider>
        ) : this.state.showCommercialDrugDetails ? (
          <CommercialDetailsContext.Provider
            value={{
              showDetailHandler: this.commercialCLickHandler,
              currentSelectedModule: this.state.tabs[
                this.state.activeTabIndex
              ].text.toLowerCase(),
            }}
          >
            <CommercialDetails data={getFormularyDetails()} />
          </CommercialDetailsContext.Provider>
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulary);
