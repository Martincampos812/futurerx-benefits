import React from "react";
import { PAMock } from "../../../../../../../../mocks/PAMock";
import { PaRemoveColumns } from "../../../../../../../../utils/grid/columns";
import FrxGridContainer from "../../../../../../../shared/FrxGrid/FrxGridContainer";

export default class DrugRemove extends React.Component {
  render() {
    return (
      <>    
        <div className="pa-grid-container white-bg ns-border">
              <div className="pinned-table highlight-selected-record-pinned-table">
                  <FrxGridContainer
                                enableSearch={false}
                                enableColumnDrag
                                onSettingsClick="grid-menu"
                                settingsWidth={50}
                                onSearch={() => {}}
                                customSettingIcon={"RED-DOT"}
                                fixedColumnKeys={["claimId"]}
                                pagintionPosition="topRight"
                                gridName="DRUG GRID"
                                enableSettings
                                isFetchingData={false}
                                columns={PaRemoveColumns()}
                                isPinningEnabled={true}
                                scroll={{ x:250, y: 377 }}
                                enableResizingOfColumns
                                data={PAMock()}
                                isCustomCheckboxEnabled={true}
                                handleCustomRowSelectionChange={(r) => {
                                  console.log(r);
                                }}
                              />      
          </div>
        </div>
      </>
    );
  }
}
