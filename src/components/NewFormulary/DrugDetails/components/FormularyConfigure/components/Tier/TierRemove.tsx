import React from "react";

import "./Tier.scss";
import { Table } from "antd";
import Grid from "@material-ui/core/Grid";
import { Row, Col } from "antd";
import Button from "../../../../../../shared/Frx-components/button/Button";
import FrxGridContainer from "../../../../../../../components/shared/FrxGrid/FrxGridContainer";
import { tierRemoveColumns } from "../../../../../../../utils/grid/columns";
import { getRemoveTierData } from "../../../../../../../mocks/grid/remove-tier-mock";

class TierRemove extends React.Component {
  state = {
    isFetchingData: false,
    data: [] as any[],
    filteredData: [] as any[],
  };

  componentDidMount() {
    //fetch data from API
    const data = getRemoveTierData();
    this.setState({ data, filteredData: data });
  }

  handleSearch = (searchObject) => {
    console.log(searchObject);
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

  rowSelectionChange = (record) => {
    console.log(record);
  };

  render() {
    const columns2 = tierRemoveColumns();
    const dataSource = [
      {
        key: "1",
        tierName: "Tier 0",
      },
      {
        key: "2",
        tierName: "Tier 1",
      },
      {
        key: "3",
        tierName: "Tier 2",
      },
      {
        key: "4",
        tierName: "Tier 3",
      },
    ];

    const columns = [
      {
        title: "Tier Name",
        dataIndex: "tierName",
        key: "tierName",
      },
    ];
    return (
      <>
        <div className="white-bg">
          <Grid item xs={5}>
            <div className="tier-grid-remove-container">
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                rowSelection={{
                  columnWidth: 20,
                  fixed: true,
                  type: "checkbox",
                }}
              />
            </div>
          </Grid>
          <Row justify="end">
            <Col>
              <Button label="Apply"></Button>
            </Col>
          </Row>
          {/* Table will be here */}
          <FrxGridContainer
            enableSearch
            enableColumnDrag
            onSearch={this.handleSearch}
            enableSettings
            fixedColumnKeys={["claimId"]}
            gridName="ACCUMULATORS"
            isFetchingData={this.state.isFetchingData}
            columns={columns2}
            data={this.state.filteredData}
            pagintionPosition="topRight"
            onSettingsClick="grid-menu"
            scroll={{ x: 6000, y: 620 }}
            // isRowSelectionEnabled={true}
            // isRowSelectorCheckbox={true}
            isCustomCheckboxEnabled={true}
            handleCustomRowSelectionChange={this.rowSelectionChange}
          />
        </div>
      </>
    );
  }
}

export default TierRemove;
