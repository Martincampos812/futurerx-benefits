import React from "react";
import { PAMock } from "../../../../../../../../mocks/PAMock";
import { PaRemoveColumns } from "../../../../../../../../utils/grid/columns";
import FrxGridContainer from "../../../../../../../shared/FrxGrid/FrxGridContainer";

export default class DrugRemove extends React.Component<any, any> {
  render() {
    return (
      <>
        <div className='pa-grid-container white-bg'>
          <div className='pinned-table'>
            <FrxGridContainer
              isPinningEnabled={true}
              enableSearch={false}
              enableColumnDrag
              onSearch={() => {}}
              fixedColumnKeys={["claimId"]}
              pagintionPosition='topRight'
              gridName='TIER'
              enableSettings={true}
              columns={PaRemoveColumns()}
              customSettingIcon={"NONE"}
              scroll={{ x: 400, y: 377 }}
              isFetchingData={false}
              enableResizingOfColumns
              data={PAMock()}
              isCustomCheckboxEnabled={true}
              handleCustomRowSelectionChange={(r) => {
                console.log(r);
              }}
              settingsWidth={25}
              checkBoxWidth={25}
            />
          </div>
        </div>
      </>
    );
  }
}
