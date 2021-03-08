import React from 'react';
import Grid from "@material-ui/core/Grid";
import PanelHeader from './PanelHeader';
import PanelGrid from './panelGrid';
import CustomizedSwitches from './CustomizedSwitches';
import { TabInfo } from "../../../../../../models/tab.model";
import FrxMiniTabs from "../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import NotesPopup from "../../../../../member/MemberNotesPopup";
import Box from '@material-ui/core/Box';
import Button from '../../../../../shared/Frx-components/button/Button';
import { textFilters } from "../../../../../../utils/grid/filters";
import { getDrugDetailsColumn } from "../DrugGridColumn";
import { getDrugDetailData } from "../../../../../../mocks/DrugGridMock";
import FrxLoader from "../../../../../shared/FrxLoader/FrxLoader";
import DrugGrid from '../../DrugGrid';
import AdvancedSearch from './search/AdvancedSearch';
import { Input } from '@material-ui/core';
export default class VBID extends React.Component<any, any>{
    state = {
        isSearchOpen: false,
        panelGridTitle1: ['Value Based Insurance', 'Number of Drugs', 'added drugs', 'removed drugs'],
        panelTitleAlignment1: ['left', 'left', 'left', 'left'],
        panelGridValue1: [],
        isNotesOpen: false,
        activeTabIndex: 0,
        columns: null,
        data: null,
        tabs: [
            { id: 1, text: "Replace" },
            { id: 2, text: "Append" },
            { id: 3, text: "Remove" }
        ]
    }
    advanceSearchClickHandler = (event) => {
        event.stopPropagation();
        this.setState({isSearchOpen: !this.state.isSearchOpen})
    }
    advanceSearchClosekHandler = () =>{
        this.setState({isSearchOpen: !this.state.isSearchOpen})
    }
    saveClickHandler = () => {
        console.log('Save data');
    }
    componentDidMount() {
        const data = getDrugDetailData();
        const columns = getDrugDetailsColumn();
        const FFFColumn: any = {
            id: 0,
            position: 0,
            textCase: "upper",
            pixelWidth: 238,
            sorter: {},
            isFilterable: true,
            showToolTip: false,
            key: "fff",
            displayTitle: "Free First Fill",
            filters: textFilters,
            dataType: "string",
            hidden: false,
            sortDirections: [],
        }
        columns.unshift(FFFColumn);
        for (let el of data) {
            el['fff'] = 'Y';
        }
        this.setState({
            columns: columns,
            data: data
        });

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
    handleNoteClick = (event: React.ChangeEvent<{}>) => {
        event.stopPropagation();
        this.setState({ isNotesOpen: !this.state.isNotesOpen });
    };
    handleCloseNote = () => {
        this.setState({ isNotesOpen: !this.state.isNotesOpen });
    };
    settingFormApplyHandler = () => {
        alert(1)
    }
    render() {
        let dataGrid = <FrxLoader />;
        if (this.state.data) {
            dataGrid = <DrugGrid columns={this.state.columns} data={this.state.data} />
        }
        return (
            <>
                <div className="bordered">
                    <PanelHeader
                        title="Value-Based Insurance Design"
                        tooltip="ADD File or delete Value-Based Insurance Design Status in Drug Grid below for the supplemental HPMS submission file and marketing material display." />
                    <div className="inner-container bg-light-grey">
                        <div className="mb-10">
                            <PanelGrid
                                panelGridTitle={this.state.panelGridTitle1}
                                panelGridValue={this.state.panelGridValue1}
                                panelTitleAlignment={this.state.panelTitleAlignment1} />
                        </div>
                        <div className="modify-wrapper bordered white-bg">
                            <div className="header-with-notes">
                                <PanelHeader title="VBID SETTINGS" />
                                <svg onClick={this.handleNoteClick} className="note-icon" width="10" height="12" viewBox="0 0 10 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 0L10 3H7V0ZM6 0H1C0.447715 0 0 0.447715 0 1V11C0 11.5523 0.447715 12 1 12H9C9.55229 12 10 11.5523 10 11V4H7H6V0Z" fill="#2055B5"></path></svg>
                                {this.state.isNotesOpen ? (
                                    <NotesPopup
                                        category="Grievances"
                                        openPopup={this.state.isNotesOpen}
                                        onClose={this.handleCloseNote}
                                    />) : (
                                        ""
                                    )}
                            </div>
                            <div className="modify-panel">
                                <div className="icon"><span>R</span></div>
                                <div className="switch-box">
                                    <CustomizedSwitches leftTitle="Modify" rightTitle="view all" />
                                </div>
                                <div className="mini-tabs">
                                    <FrxMiniTabs
                                        tabList={this.state.tabs}
                                        activeTabIndex={this.state.activeTabIndex}
                                        onClickTab={this.onClickTab}

                                    />
                                </div>
                            </div>
                            <div className="settings-form">
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div className="group">
                                            <label>Contract Id <span className="astrict">*</span></label>
                                            <input type="text" />
                                        </div>
                                        <div className="group">
                                            <label>PBP Id <span className="astrict">*</span></label>
                                            <input type="text" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="group">
                                            <label>package <span className="astrict">*</span></label>
                                            <input type="text" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Box display="flex" justifyContent="flex-end">
                                    <Button label="Apply" disabled onClick={this.settingFormApplyHandler} />
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bordered">
                    <div className="header space-between pr-10">
                        Drug Grid
                        <div className="button-wrapper">
                        <Input
                                className="drug-details-search-input"
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
                            <Button className="Button normal" label="Advance Search" onClick={this.advanceSearchClickHandler} />
                            <Button label="Save" onClick={this.saveClickHandler} disabled />
                        </div>
                    </div>
                    {dataGrid}
                    {this.state.isSearchOpen ? (
                        <AdvancedSearch
                                category="Grievances"
                                openPopup={this.state.isSearchOpen}
                                onClose={this.advanceSearchClosekHandler}/>
                    ) : (
                        null
                    )}
                </div>
            </>
        )
    }
}