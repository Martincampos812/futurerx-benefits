import React from "react";
import { Column } from "../../../../../models/grid.model";
import { dateFilters, textFilters } from "../../../../../utils/grid/filters";

export const getDrugDetailsColumn: () => Column<any>[] = () => {
    return [
      {
        position: 1,
        sorter: {},
        textCase: "upper",
        pixelWidth: 230,
        key: "labelName",
        displayTitle: "Label Name",
        isFilterable: true,
        dataType: "string",
        filters: textFilters,
        hidden: false,
        sortDirections: []
      },
      {
        position: 2,
        sorter: {},
        textCase: "upper",
        pixelWidth: 125,
        key: "tier",
        isFilterable: true,
        showToolTip: false,
        displayTitle: "tier",
        dataType: "string",
        filters: dateFilters,
        hidden: false,
        sortDirections: []
      },
      {
        position: 3,
        sorter: {},
        textCase: "upper",
        isFilterable: true,
        pixelWidth: 155,
        key: "fileType",
        displayTitle: "file type",
        dataType: "string",
        filters: dateFilters,
        hidden: false,
        sortDirections: [],
        showToolTip: false,
      },
      {
        position: 4,
        textCase: "upper",
        pixelWidth: 180,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "dataSource",
        displayTitle: "data source",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 5,
        textCase: "upper",
        pixelWidth: 125,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "ndc",
        displayTitle: "ndc",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 6,
        textCase: "upper",
        pixelWidth: 125,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "ddid",
        displayTitle: "ddid",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 7,
        textCase: "upper",
        pixelWidth: 135,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "rxcui",
        displayTitle: "rxcui",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 8,
        textCase: "upper",
        pixelWidth: 125,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "tty",
        displayTitle: "tty",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 9,
        textCase: "upper",
        pixelWidth: 160,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "gpi",
        displayTitle: "gpi",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 10,
        textCase: "upper",
        pixelWidth: 170,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "trademark",
        displayTitle: "trademark",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 11,
        textCase: "upper",
        pixelWidth: 220,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "databaseCategory",
        displayTitle: "database category",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 12,
        textCase: "upper",
        pixelWidth: 280,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "databaseClass",
        displayTitle: "database class",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 13,
        textCase: "upper",
        pixelWidth: 170,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "createdBy",
        displayTitle: "created by",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 14,
        textCase: "upper",
        pixelWidth: 205,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "createdOn",
        displayTitle: "created on",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 15,
        textCase: "upper",
        pixelWidth: 170,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "modifiedBy",
        displayTitle: "modified by",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 16,
        textCase: "upper",
        pixelWidth: 205,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "modifiedOn",
        displayTitle: "modified on",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 17,
        textCase: "upper",
        pixelWidth: 235,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "paGroupDescription",
        displayTitle: "pa group description",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 18,
        textCase: "upper",
        pixelWidth: 235,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "stGroupDescription",
        displayTitle: "st group description",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 19,
        textCase: "upper",
        pixelWidth: 235,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "stepTherapyType",
        displayTitle: "step therapy type",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 20,
        textCase: "upper",
        pixelWidth: 215,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "stepTherapyValue",
        displayTitle: "step therapy value",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 21,
        textCase: "upper",
        pixelWidth: 225,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "qlType",
        displayTitle: "ql type",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 22,
        textCase: "upper",
        pixelWidth: 150,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "qlAmount",
        displayTitle: "ql amount",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 23,
        textCase: "upper",
        pixelWidth: 170,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "qlDays",
        displayTitle: "ql days",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 24,
        textCase: "upper",
        pixelWidth: 182,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "moIndicator",
        displayTitle: "mo indicator",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 25,
        textCase: "upper",
        pixelWidth: 182,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "mnIndicator",
        displayTitle: "mn indicator",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 26,
        textCase: "upper",
        pixelWidth: 240,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "seniorSavingsModel",
        displayTitle: "senior savings model",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 27,
        textCase: "upper",
        pixelWidth: 265,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "indicatedBaseFormulary",
        displayTitle: "indicated base formulary",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 28,
        textCase: "upper",
        pixelWidth: 155,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "meshCui",
        displayTitle: "mesh cui",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
      {
        position: 29,
        textCase: "upper",
        pixelWidth: 236,
        sorter: {},
        isFilterable: true,
        showToolTip: false,
        key: "partialGapCoverage",
        displayTitle: "partial gap coverage",
        filters: textFilters,
        dataType: "string",
        hidden: false,
        sortDirections: [],
      },
    ];
  };

  export const getStDetails : () => Column<any>[] = () => {
    return [
      {
        position: 1,
        sorter: {},
        textCase: "upper",
        pixelWidth: 230,
        key: "STGROUPDESCRIPTION",
        displayTitle: "ST GROUP DESCRIPTION",
        isFilterable: true,
        dataType: "string",
        filters: textFilters,
        hidden: false,
        sortDirections: []
      }
    ]

  }

export const getStDetailsCol2 : () => Column<any>[] = () => {
  return [
    {
      position: 1,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "STGROUPDESCRIPTION",
      displayTitle: "ST GROUP DESCRIPTION",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

    {
      position: 2,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "STTHERPYTYPE",
      displayTitle: "ST THERPY TYPE",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

    {
      position: 3,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "STTHERPYVALUE",
      displayTitle: "ST THERPY VALUE",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

    {
      position: 4,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "LABELNAME",
      displayTitle: "LABEL",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

    {
      position: 5,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "TIER",
      displayTitle: "TIER",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

    {
      position: 6,
      sorter: {},
      textCase: "upper",
      pixelWidth: 230,
      key: "FILETYPE",
      displayTitle: "FILE TYPE",
      isFilterable: true,
      dataType: "string",
      filters: textFilters,
      hidden: false,
      sortDirections: []
    },

  ]
}