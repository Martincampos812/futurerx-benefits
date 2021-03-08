import React from "react";
import { TabInfo } from "../../models/tab.model";
import FrxTabs from "../shared/FrxTabs/FrxTabs";
import LOBDetail from "./LOBDetail/LOBDetail";
import FormularyBenefitsDetail from "./components/FormularyBenefitsDetail/FormularyBenefitsDetail";
import FormularyBenefitsDetailContext from "./FormularyBenefitsContext";
import { getFormularyDetails } from "../../mocks/formulary/formularyDetails";
import "./FormularyBenefits.scss";
import FormularyDashboard from "./components/FormularyBenefitsDashboard/FormularyBenefitsDashboard";
import { getFormularyBenefitsDetails } from "../../mocks/formulary-benefits/formularyBenefitsDetails";

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
  showDrugDetails: boolean;
  baseData: any;
  rootPath: any;
}

class FormularyBenefits extends React.Component<any, any> {
  state = {
    activeTabIndex: 0,
    tabs: tabs,
    showTabs: true,
    showMassMaintenance: false,
    showDrugDetails: false,
    pageSize: 10,
    baseData: [],
    rootPath: "",
  };

  listPayload = {
    index: 0,
    limit: 10,
    filter: [],
    id_lob: 1,
    search_by: null,
    search_key: "",
    search_value: [],
    sort_by: ["cms_formulary_id"],
    sort_order: ["desc"],
  };

  componentDidMount() {
    this.setState({ baseData: getFormularyBenefitsDetails() });
  }
  addNewFormulary = (param: any) => {
    this.setState({
      showTabs: !this.state.showTabs,
      showDrugDetails: !this.state.showDrugDetails,
      rootPath: param,
    });
  };
  onClickTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = this.state.tabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeTabIndex = index;
      }
      return tab;
    });
    this.setState({ tabs, activeTabIndex }, () => {
      this.updateGrid(this.state.activeTabIndex);
    });
  };
  updateGrid = (currentTabIndex) => {
    if (currentTabIndex === 0) //Medicare
    {
      this.setState({ baseData: getFormularyBenefitsDetails() });
    }
    else if (currentTabIndex === 1) //Medicaid
    {
      console.log("Medicaid LOB selected");
      this.setState({ baseData: null });
    }
    else if (currentTabIndex === 2) //Commercial
    {
      console.log("Commercial LOB selected");
      this.setState({ baseData: null });
    }
    else if (currentTabIndex === 3) //Exchange
    {
      console.log("Exchange LOB selected");
      this.setState({ baseData: null });
    }
    else {
      console.log("Something went wrong while loading formulary benefits LOB");
      this.setState({ baseData: null });
    }

  }

  drugDetailsClickHandler = (id: any, rootComponentName: any) => {
    let selectedRow: any = null;
    if (id !== undefined) {
      selectedRow = this.state.baseData[id - 1];
    }

    this.setState({
      showTabs: !this.state.showTabs,
      showDrugDetails: !this.state.showDrugDetails,
      rootPath: rootComponentName,
    });
  };

  onSettingsIconHandler = (hiddenColumn, visibleColumn) => {

  }
  onApplyFilterHandler = (filters) => {

  }
  onPageSize = (pageSize) => {

  }
  onGridPageChangeHandler = (pageNumber: any) => {

  }
  onClearFilterHandler = () => {

  }

  render() {
    return (
      <div className="formulary-root">
        {this.state.showTabs ? (
          <>
            <FormularyDashboard />
            <FrxTabs
              tabList={this.state.tabs}
              activeTabIndex={this.state.activeTabIndex}
              onClickTab={this.onClickTab}
            />
            <div className="formulary-tabs-info">
              <LOBDetail
                baseData={this.state.baseData}
                drugDetailClick={this.drugDetailsClickHandler}
                onPageSize={this.onPageSize}
                pageSize={this.listPayload.limit}
                selectedCurrentPage={(this.listPayload.index / this.listPayload.limit + 1)}
                onPageChangeHandler={this.onGridPageChangeHandler}
                onClearFilterHandler={this.onClearFilterHandler}
                applyFilter={this.onApplyFilterHandler}
                getColumnSettings={this.onSettingsIconHandler}
                addNewFormulary={this.addNewFormulary}
              />
            </div>
          </>
        ) : this.state.showDrugDetails ? (
          <FormularyBenefitsDetailContext.Provider
            value={{
              showDetailHandler: (id: any, rootPath: any) => this.drugDetailsClickHandler,
              currentSelectedModule: this.state.tabs[
                this.state.activeTabIndex
              ].text.toLowerCase(),
            }}
          >
            <FormularyBenefitsDetail data={getFormularyDetails()} rootPath={this.state.rootPath} />
          </FormularyBenefitsDetailContext.Provider>
        ) : null}
      </div>
    );
  }
}

export default (FormularyBenefits);
