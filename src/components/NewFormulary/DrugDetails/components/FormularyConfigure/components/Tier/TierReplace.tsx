import React from "react";
import { Grid, Input } from "@material-ui/core";

import "./Tier.scss";

import DropDown from "../../../../../../shared/Frx-components/dropdown/DropDown";
import Button from "../../../../../../shared/Frx-components/button/Button";
import Box from "@material-ui/core/Box";
import FrxGridContainer from "../../../../../../shared/FrxGrid/FrxGridContainer";
import { tierColumns } from "../../../../../../../utils/grid/columns";
import { TierMockData } from "../../../../../../../mocks/TierMock";

interface tabsState {
  tierGridContainer: boolean;
}

class TierReplace extends React.Component<any, tabsState> {
  state = {
    tierGridContainer: false,
  };

  openTierGridContainer = () => {
    this.setState({ tierGridContainer: true });
  };

  render() {
    return (
      <>
        <div className="group tier-dropdown white-bg">
          <Grid container>
            <Grid item xs={4}>
              <label>
                TIER <span className="astrict">*</span>
              </label>
              <DropDown options={[1, 2, 3]} />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent="flex-end">
                <Button label="Apply" onClick={this.openTierGridContainer} />
              </Box>
            </Grid>
          </Grid>
        </div>
        {this.state.tierGridContainer && (
          <div className="select-drug-from-table">
            <div className="bordered white-bg">
              <div className="header space-between pr-10">
                Select Drugs From
                <div className="button-wrapper">
                  <div className="field-container">
                    <Input
                      className="drug-replace-search"
                      placeholder="Search"
                      type="text"
                      disableUnderline={true}
                      startAdornment={
                        <svg
                          className="member-search__icon"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z"
                            fill="#999999"
                          />
                        </svg>
                      }
                    />
                  </div>
                  <Button className="Button normal" label="Advance Search" />
                  <Button label="Save" disabled />
                </div>
              </div>

              <div className="tier-grid-container">
                <FrxGridContainer
                  isPinningEnabled={false}
                  enableSettings={true}
                  isCustomCheckboxEnabled={true}
                  handleCustomRowSelectionChange={(r) => {
                    console.log(r);
                  }}
                  enableSearch={false}
                  enableColumnDrag
                  onSearch={() => {}}
                  fixedColumnKeys={[]}
                  pagintionPosition="topRight"
                  gridName="TIER"
                  columns={tierColumns()}
                  scroll={{ x: 2000, y: 377 }}
                  isFetchingData={false}
                  enableResizingOfColumns
                  data={TierMockData()}
                  rowSelection={{
                    columnWidth: 50,
                    fixed: true,
                    type: "checkbox",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default TierReplace;
