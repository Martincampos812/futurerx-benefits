import React, { useState } from "react";
import DialogPopup from "../../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import FrxGridContainer from "../../../../../../shared/FrxGrid/FrxGridContainer";
import { getCompareFormularyDrugsListGridColumns } from "../../../../../../../mocks/formulary-grid/FormularyGridColumn";
import { getCompareFormularyDrugsListGridData } from "../../../../../../../mocks/formulary-grid/FormularyGridData";

import "./CompareTable.scss";

interface InnerGridType {
  name: string;
  baseFormulary: number | null;
  referenceFormulary: number | null;
  baseOnly: number | null;
  referenceOnly: number | null;
  nonMatch: number | null;
}

interface InnerGridProps {
  dataArr: InnerGridType[];
  formularyType: string;
}
function InnerGrid(props: InnerGridProps) {
  const [openDrugsList, setDrugsListPopup] = useState(false);
  const [drugGridHeaderName, setDrugGridHeaderName] = useState("");
  const toggleDrugsListGrid = (gridCellName: string | null = null) => {
    if (gridCellName !== null) setDrugGridHeaderName(gridCellName);
    setDrugsListPopup(!openDrugsList);
  };

  return (
    <div className="inner-grid-compare-formularies">
      {props.dataArr.map((data) => (
        <>
          <div className="cell-height cell-head-font-style">{data.name}</div>
          <div className="cell-height cell-font-style">
            <span
              onClick={() => {
                alert(
                  `${props.formularyType} - ${data.name}: Base Formulary(${data.baseFormulary})`
                );
                toggleDrugsListGrid(
                  `${props.formularyType} - ${data.name}: Base Formulary`
                );
              }}
            >
              {data.baseFormulary}
            </span>
          </div>
          <div className="cell-height cell-font-style">
            <span
              onClick={() => {
                alert(
                  `${props.formularyType} - ${data.name}: Reference Formulary(${data.referenceFormulary})`
                );
                toggleDrugsListGrid(
                  `${props.formularyType} - ${data.name}: Reference Formulary`
                );
              }}
            >
              {data.referenceFormulary}
            </span>
          </div>
          <div className="cell-height cell-font-style">
            <span
              onClick={() => {
                alert(
                  `${props.formularyType} - ${data.name}: Base Only(${data.baseOnly})`
                );
                toggleDrugsListGrid(
                  `${props.formularyType} - ${data.name}: Base Only`
                );
              }}
            >
              {data.baseOnly}
            </span>
          </div>
          <div className="cell-height cell-font-style">
            <span
              onClick={() => {
                alert(
                  `${props.formularyType} - ${data.name}: Reference Formulary(${data.referenceOnly})`
                );
                toggleDrugsListGrid(
                  `${props.formularyType} - ${data.name}: Reference Formulary`
                );
              }}
            >
              {data.referenceOnly}
            </span>
          </div>
          <div className="cell-height cell-font-style no-border">
            <span
              onClick={() => {
                alert(
                  `${props.formularyType} - ${data.name}: Non-Match Base & Reference(${data.nonMatch})`
                );
                toggleDrugsListGrid(
                  `${props.formularyType} - ${data.name}: Non-Match Base & Reference`
                );
              }}
            >
              {data.nonMatch}
            </span>
          </div>
        </>
      ))}
      {openDrugsList ? (
        <DialogPopup
          showCloseIcon={false}
          positiveActionText=""
          negativeActionText=""
          title={drugGridHeaderName}
          handleClose={toggleDrugsListGrid}
          handleAction={() => {}}
          showActions={false}
          height="80%"
          width="80%"
          open={openDrugsList}
        >
          <FrxGridContainer
            enableSearch={false}
            enableColumnDrag
            onSearch={() => {}}
            fixedColumnKeys={[]}
            pagintionPosition="topRight"
            gridName=""
            isFetchingData={false}
            columns={getCompareFormularyDrugsListGridColumns()}
            scroll={{ x: 1000, y: 500 }}
            enableResizingOfColumns={false}
            data={getCompareFormularyDrugsListGridData()}
            // pinning columns
            isPinningEnabled={true}
            // setting gear 1st column
            enableSettings={true}
            // checkbox 2nd column
            isCustomCheckboxEnabled={true}
            // event reference for checkbox (mandotory if checkbox is true)
            handleCustomRowSelectionChange={(r) => {
              console.log(r);
            }}
            // settingsWidth
            // settingsWidth={15}
            // checkBoxWidth
            // checkBoxWidth={15}
          />
        </DialogPopup>
      ) : null}
    </div>
  );
}

export default InnerGrid;
