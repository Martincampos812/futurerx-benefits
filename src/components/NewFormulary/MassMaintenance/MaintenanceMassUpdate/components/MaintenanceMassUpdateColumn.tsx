import React from "react";
import {Column} from "../../../../../models/grid.model";
//  "../../../../../models/grid.model";
import {dateFilters, textFilters} from "../../../../../utils/grid/filters";
// "../../../../../utils/grid/filters";
import FrxStatusField from "../../../../shared/FrxStatusField/FrxStatusField";

const getVariantByStatus = (type) => {
  switch (type) {
    case 'medicare':
        return 4
      break;
    case 'commercial':
        return 5
      break;
  
    default:
      return 1
      break;
  }
}

export const getMaintenacneMassUpdateColumns: () => Column<any>[] = () => {
  return [
    {
      id: 1,
      position: 1,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "createdOn",
      displayTitle: "created On",
      isFilterable: true,   
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: [],
    },
    {
      id: 2,
      position: 2,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "CreatedBy",
      displayTitle: "Created By",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: [],
    },
    {
      id: 3,
      position: 3,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "lob",
      displayTitle: "lob",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: ["ascend", "descend"],
      customContent: (props) => (
        <FrxStatusField
          text={props.data.lob}
          type={"pill"}
          // fill={"pill"}
          variant={getVariantByStatus(props.data.lob)}
        />
      ),
      //   render: (lob) => <span style={{color: "red"}}>{lob}</span>,
    },
    {
      id: 4,
      position: 4,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "formularyName",
      displayTitle: "formulary Name(s)",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: [],
    },
    {
      id: 5,
      position: 5,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "formularyId",
      displayTitle: "formulary Id(s)",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: [],
    },
    {
      id: 6,
      position: 6,
      sorter: {},
      textCase: "upper",
      pixelWidth: 20,
      key: "status",
      displayTitle: "status",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: [],
    },
  ];
};
