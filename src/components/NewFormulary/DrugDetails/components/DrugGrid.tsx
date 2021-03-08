import React from "react";
import "../../../ClaimsGrid/ClaimsGrid.scss";
import FrxGridContainer from "../../../shared/FrxGrid/FrxGridContainer";

export default class DrugGrid extends React.Component<any, any> {
  state = {
    isFetchingData: false,
    data: [] as any[],
    filteredData: [] as any[],
  };

  componentDidMount() {
    const data = this.props.data;
    this.setState({ data, filteredData: data });
  }
  handleSearch = (searchObject) => {
    this.setState({ isFetchingData: true });
    if (searchObject && searchObject.status) {
      setTimeout(() => {
        const newData = this.state.data.filter(
          (d) => d.status === searchObject.status
        );
        this.setState({ isFetchingData: false, filteredData: newData });
      }, 2000);
    } else {
      this.setState({ isFetchingData: false });
    }
  };
  render() {
    const { columns, enableSettings, pinData, scroll } = this.props;

    return (
      <div className="inner-container">
        <div className="pinned-table">
          <FrxGridContainer
            enableSearch={false}
            enableColumnDrag
            onSearch={this.handleSearch}
            fixedColumnKeys={[]}
            pagintionPosition="topRight"
            gridName="DRUGSDETAILS"
            enableSettings
            isFetchingData={this.state.isFetchingData}
            columns={columns}
            isCustomCheckboxEnabled
            handleCustomRowSelectionChange={()=>{}}
            settingsWidth={15}
            checkBoxWidth={15}
            customSettingIcon="NONE"
            isPinningEnabled={Boolean(pinData) ? pinData.value : true}
            scroll={{ x: 4200, y: 377 }}
            enableResizingOfColumns
            data={this.state.filteredData}
          />
        </div>
      </div>
    );
  }
}
