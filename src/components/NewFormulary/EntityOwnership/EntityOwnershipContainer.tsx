import React, { Component } from "react";
import { Card, CardHeader, CardContent, Grid, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import BreadCrumPanel from "./components/BreadCrumPanel";
import {
  entityOwnershipData,
  entityOwnershipData1,
  getEntityData2,
} from "./EnitityOwnershipMockData/MockDataForEntity";
import PlanInformationConfiguration from "./PlanIfonmationConfiguaration/PlanInformationConfiguration";
import PlanInformation from "./PlanInformation/PlanInformation";
import DialogPopup from "../../shared/FrxDialogPopup/FrxDialogPopup";
import CustomDatePicker from "./components/CustomDatePicker";
import { Link } from "react-router-dom";

import "./EntityOwnershipContainer.scss";
import { LocalHospital } from "@material-ui/icons";

interface Props {}
interface State {}
interface NewAccGrpObje {
  accGrpId: string;
  list: any[];
}
interface NewGrpObject {
  groupId: string;
  list: any[];
}
interface SelectedAccoutObject {
  accountId: string;
  groups: Array<NewGrpObject>;
}
class EntityOwnershipContainer extends Component<Props, State> {
  state = {
    arrowIconState: false,
    isAllCollaps: false,
    data: entityOwnershipData1(), // entityOwnershipData(),
    data2: getEntityData2(),
    breadCrumbStatus: {},
    effectiveDate: "",
    isPlanInfoCardShown: false,
    isPlanConfigCardShow: false,
    showUpdateDefaultPopup: false,
    showSelecteffectiveDatePopup: false,
    planConfigObject: {
      planInfoConfigName: "", //"North East PBPs",
      planName: "", //"Medicare 1",
      phonNumber: "", //"888-888-8888",
      ttyValue: "", //"888-888-8888",
      website: "", // "www.medicare1.com",
      operationinfo: "",
      //"From October 1 to March 31, we are open 7 days a week, from 8 a.m. to 8 p.m. EST. From April 1 to September 30, we are open Monday through Friday, from 8 a.m. to 8 p.m. EST.",
    },
    levels: { level1: false, level2: false, level3: false },
    selectedList: [],
    listArry: [],
    accoutGroupList: [],
    selectAccountList: [],
  };

  onHandleIcons = () => {
    this.setState({ arrowIconState: !this.state.arrowIconState });
  };
  onHandleCollaps = () => {
    this.setState({ isAllCollaps: !this.state.isAllCollaps });
  };

  createNewListOject = (accoutId, groupId, list) => {
    const { listArry } = this.state;
    const newListArry: any = [];
    newListArry.push(list);
    // this.setState({listArry:newListArry})
    const newAccGropobject: NewAccGrpObje = {
      accGrpId: `${accoutId}-${groupId}`,
      list: newListArry,
    };

    return newAccGropobject;
  };

  createNewGrouptOject = (groupId, list) => {
    const { listArry } = this.state;
    const newListArry: any = [];
    newListArry.push(list);
    // this.setState({listArry:newListArry})
    const newGroupobject: NewGrpObject = {
      groupId: groupId,
      list: newListArry,
    };

    return newGroupobject;
  };

  createNewSelectedListOject = (accoutId, groupId, newList) => {
    const { listArry } = this.state;
    const tempGroupObject: NewGrpObject = this.createNewGrouptOject(
      groupId,
      newList
    );
    const newListArry: any = [];
    newListArry.push(tempGroupObject);
    // this.setState({listArry:newListArry})
    const newAccGropobject: SelectedAccoutObject = {
      accountId: accoutId,
      groups: newListArry,
    };

    return newAccGropobject;
  };

  onHandleCheckboxlist = (e, list: string, groupId, accounId) => {
    const { accoutGroupList, selectAccountList, listArry } = this.state;

    console.log(
      "[id]:",
      e.target.id,
      "[checked]:",
      e.target.checked,
      "[accountId]:",
      accounId,
      "[group]:",
      groupId,
      "[list]:" + list
    );

    const newSelectedAccountList: any = [...selectAccountList];
    if (newSelectedAccountList.length === 0) {
      console.log("accountList lengt == 0 true");
      const tempOject: SelectedAccoutObject = this.createNewSelectedListOject(
        accounId,
        groupId,
        list
      );
      newSelectedAccountList.push(tempOject);
      this.setState({ selectAccountList: newSelectedAccountList });
    } else {
      console.log("accountList lengt > 0 ");
      const accountIndex = newSelectedAccountList.findIndex(
        (account) => account.accountId === accounId
      );
      if (accountIndex > -1) {
        console.log("accountIndex > -1");

        if (newSelectedAccountList[accountIndex].groups.length === 0) {
          console.log("group array lenth === 0");

          const groupTempObject: NewGrpObject = this.createNewGrouptOject(
            groupId,
            list
          );
          newSelectedAccountList[accountIndex].groups.push(groupTempObject);
          this.setState({ selectAccountList: newSelectedAccountList });
        } else {
          console.log("group array lenth > 0");
          const groupIndex = newSelectedAccountList[
            accountIndex
          ].groups.findIndex((group) => group.groupId === groupId);
          if (groupIndex > -1) {
            console.log("group object allready exits");

            if (e.target.checked) {
              console.log("cheked is true");

              newSelectedAccountList[accountIndex].groups[groupIndex].list.push(
                list
              );
              this.setState({ selectAccountList: newSelectedAccountList });
            } else {
              console.log("cheked is false");
              const filteredList = newSelectedAccountList[accountIndex].groups[
                groupIndex
              ].list.filter((li) => li !== list);
              newSelectedAccountList[accountIndex].groups[groupIndex].list = [
                ...filteredList,
              ];
              //  console.log("[filteredList]",filteredList);

              this.setState({ selectAccountList: newSelectedAccountList });
            }
          } else {
            console.log("if its new group");

            const groupTempObject: NewGrpObject = this.createNewGrouptOject(
              groupId,
              list
            );
            newSelectedAccountList[accountIndex].groups.push(groupTempObject);
            this.setState({ selectAccountList: newSelectedAccountList });
          }
        }
      } else {
        console.log("if it new account");

        const tempOject: SelectedAccoutObject = this.createNewSelectedListOject(
          accounId,
          groupId,
          list
        );
        newSelectedAccountList.push(tempOject);
        this.setState({ selectAccountList: newSelectedAccountList });
      }
    }

    // const newAccGropTempArry:Array<NewAccGrpObje>=[...accoutGroupList];

    // if(accoutGroupList.length==0){
    //   console.log("in if");

    //   const temp:NewAccGrpObje = this.createNewListOject(accounId,groupId,list);
    //   newAccGropTempArry.push(temp)
    //   this.setState({accoutGroupList:newAccGropTempArry})
    // }else{
    //   console.log("in else");

    //      const findIndex = newAccGropTempArry.findIndex(accGrpObject=> accGrpObject.accGrpId === `${accounId}-${groupId}`)
    //      console.log("[findIndex]:",findIndex);
    //      if(findIndex>-1){
    //        const isList:boolean = newAccGropTempArry[findIndex].list.includes(list);
    //        if(!isList) {
    //          newAccGropTempArry[findIndex].list.push(list)
    //          this.setState({accoutGroupList:newAccGropTempArry})
    //        }
    //      }else{
    //        console.log("in else findIndex:",findIndex);
    //        const temp:NewAccGrpObje = this.createNewListOject(accounId,groupId,list);
    //        newAccGropTempArry.push(temp)
    //        this.setState({accoutGroupList:newAccGropTempArry})

    //      }

    // }

    // const ListArryTemp:any[]=[...this.state.listArry];
    // ListArryTemp.push(list)
    // this.setState({listArry:ListArryTemp})
    // const selectedListTemp={
    //   accoutId:accounId,
    //   groups:{groupId:group.id,
    //   list:ListArryTemp}
    // }

    // let newArryselecteList:any=[...this.state.selectedList];
    // if(newArryselec=teList.length==0){
    //   const selectedListTemp:any={
    //     accoutId:accounId,
    //     groups:{groupId:group.id,
    //     list:ListArryTemp}
    //   }
    //   newArryselecteList.push(selectedListTemp)

    //   this.setState({selectedList:newArryselecteList})
    // }
    // else{
    //   console.log("[newArryselecteList]:",newArryselecteList)

    //   const findObjecOnAccounId = newArryselecteList.find(account=> account.id===accounId)
    //   console.log("[findObjecOnAccounId]:",findObjecOnAccounId);

    // }
    // console.log("[selectedListTemp]:",selectedListTemp)
  };
  handleEffectiveDate = (date) => {
    this.setState({ effectiveDate: date });
  };

  onSavePlanInfoCard = () => {
    this.setState({ isPlanInfoCardShown: true });
  };
  onCancelPlanInfoCard = () => {
    this.setState({ isPlanInfoCardShown: false });
  };

  onPlanConfig = () => {
    this.setState({ isPlanConfigCardShow: true });
  };

  onUpdateDefault = () => {
    console.log("default popup");

    this.setState({
      showUpdateDefaultPopup: !this.state.showUpdateDefaultPopup,
    });
  };
  onCloseUpdateDefaultPopUp = () => {
    this.setState({ showUpdateDefaultPopup: false });
  };
  onOveride = () => {
    this.onUpdateDefault();
    this.setState({
      showSelecteffectiveDatePopup: !this.state.showSelecteffectiveDatePopup,
    });
  };

  onOverideSave = () => {
    this.setState({
      showSelecteffectiveDatePopup: false,
    });
  };
  onCloseOveride = () => {
    this.setState({
      showSelecteffectiveDatePopup: false,
    });
  };

  onSaveInPlanConfg = (info) => {
    this.setState({ planConfigObject: info });
    this.onCancelPlanInfoCard();
  };

  handleInputChange(e) {
    console.log(e.target.name);
    this.setState({
      planConfigObject: {
        ...this.state.planConfigObject,
        [e.target.name]: e.target.value,
      },
    });
  }
  onCheckBoxClickOnBeadCrum = (e, id) => {
    console.log("[e.target.checked] :", e.target.checked);
    console.log("[id]:", id);

    this.setState(
      { levels: { ...this.state.levels, [id]: e.target.checked } },
      () => {
        console.log("[currenlevels]:", this.state.levels);
      }
    );
  };
  onCollapseAll = () => {
    this.setState({ levels: {} });
  };

  componentDidMount() {
    //   const len = Object.values(getEntityData2()).length;
    //   console.log("[len]:",len)
    //   let levleObject={}
    //   for(let i=1;i<=len;i++){
    //     levleObject[`level${i}`]=false
    //   }
    //   console.log("[levleObject]:",levleObject)
    //  this.setState({levels:levleObject})
  }

  render() {
    const entityData = Object.values(this.state.data);
    const entityKeys = Object.keys(this.state.data);
    console.log(entityKeys);
    console.log("[New Data]:", this.state.data2);
    const newEntityData = Object.values(this.state.data2);
    console.log("[newEntityData]: ", newEntityData);

    newEntityData.map((entity) => console.log(entity));

    console.log("[this.state.levels]:", this.state.levels);

    return (
      <div className="EntityOwnershipContainer">
        <Card className="entityOwnerShip-card">
          <CardHeader
            className="card-header"
            title="FORMULARY WITH ADJUDICATION"
          >
            {/* FORMULARY WITH ADJUDICATION */}
          </CardHeader>
          <CardContent className="card-container">
            <Grid
              container
              justify="space-between"
              className="grid-info-container"
            >
              <span className="info-tag">
                *Grey stars indicate this formulary is set as the default.
              </span>
              <span className="collapse-label" onClick={this.onCollapseAll}>
                Collapse All
              </span>
            </Grid>

            <div className="entity-data-container">
              <div
                // style={{marginLeft: "22px"}}
                className="breadcrum-data client-info"
              >
                <BreadCrumPanel
                  id={"level1"}
                  label={"Customer"}
                  value={this.state.data2.owner.value}
                  checked={this.state.levels.level1}
                  collaps={this.state.isAllCollaps}
                  isDefault={this.state.data2.owner.default}
                  updateDefault={this.onUpdateDefault}
                  onCheckBoxClick={this.onCheckBoxClickOnBeadCrum}
                  isCollalpseTointitialState={this.onHandleCollaps}
                >
                  {/* <p>new div</p> */}
                </BreadCrumPanel>
                {this.state.levels.level1 ? (
                  <>
                    <div
                      // style={{marginLeft: "22px"}}
                      className="breadcrum-data client-info"
                    >
                      <BreadCrumPanel
                        id={"level2"}
                        label={"client"}
                        value={this.state.data2.client.value}
                        checked={this.state.levels.level2}
                        onCheckBoxClick={this.onCheckBoxClickOnBeadCrum}
                        collaps={this.state.isAllCollaps}
                        isDefault={this.state.data2.client.default}
                        updateDefault={this.onUpdateDefault}
                        isCollalpseTointitialState={this.onHandleCollaps}
                      >
                        {/* <p>new div</p> */}
                      </BreadCrumPanel>
                      {this.state.levels.level2 ? (
                        <div
                          // style={{marginLeft: "22px"}}
                          className="breadcrum-data client-info"
                        >
                          <BreadCrumPanel
                            id={"level3"}
                            label={"carrier"}
                            value={this.state.data2.carrier.value}
                            checked={this.state.levels.level3}
                            collaps={this.state.isAllCollaps}
                            onCheckBoxClick={this.onCheckBoxClickOnBeadCrum}
                            isDefault={this.state.data2.carrier.default}
                            updateDefault={this.onUpdateDefault}
                            isCollalpseTointitialState={this.onHandleCollaps}
                          >
                            {/* <p>new div</p> */}
                          </BreadCrumPanel>
                          {this.state.levels.level3 ? (
                            <div
                              // style={{marginLeft: "22px"}}
                              className="breadcrum-data client-info"
                            >
                              {this.state.data2.accounts.map((account, ind) => (
                                <React.Fragment key={account.accoutId}>
                                  <BreadCrumPanel
                                    id={`${account.accoutId}`}
                                    label={"Account"}
                                    value={account.accoutId}
                                    checked={
                                      this.state.levels[account.accoutId]
                                    }
                                    isDefault={account.default}
                                    onCheckBoxClick={
                                      this.onCheckBoxClickOnBeadCrum
                                    }
                                    updateDefault={this.onUpdateDefault}
                                    isCollalpseTointitialState={() => {}}
                                  >
                                    {/* <p>div</p> */}
                                  </BreadCrumPanel>
                                  {this.state.levels[account.accoutId] ? (
                                    <>
                                      {account.groups.map((group, ind) => (
                                        <>
                                          <div
                                            // style={{marginLeft: "22px"}}
                                            className="breadcrum-data client-info"
                                          >
                                            <BreadCrumPanel
                                              id={`${account.accoutId}${group.id}`}
                                              label={`Group  ${ind + 1}`}
                                              value={group.id}
                                              checked={
                                                this.state.levels[
                                                  `${account.accoutId}${group.id}`
                                                ]
                                              }
                                              isDefault={group.default}
                                              onCheckBoxClick={
                                                this.onCheckBoxClickOnBeadCrum
                                              }
                                              updateDefault={
                                                this.onUpdateDefault
                                              }
                                              isCollalpseTointitialState={() => {}}
                                            >
                                              {/* <p></p> */}
                                            </BreadCrumPanel>
                                            <div
                                              className="breadcrum-data group-data-info"
                                              // style={{marginLeft: "22px"}}
                                            >
                                              <Grid
                                                container
                                                className="data-list-container"
                                                // justify="space-between"
                                              >
                                                {this.state.levels[
                                                  `${account.accoutId}${group.id}`
                                                ] ? (
                                                  <>
                                                    {group.list.map(
                                                      (li, idx) => (
                                                        // <div>
                                                        // <Grid item sm={3} className="data-list">
                                                        <div
                                                          style={
                                                            {
                                                              // minWidth: "250px",
                                                              // marginLeft: "2rem",
                                                            }
                                                          }
                                                          className="data-list  checbox-list-container"
                                                        >
                                                          <Checkbox
                                                            id={`${group.id}+${idx}`}
                                                            color="primary"
                                                            className="checkbox1"
                                                            size="small"
                                                            checked={
                                                              this.state.levels[
                                                                `${group.id}+${idx}`
                                                              ]
                                                            }
                                                            onChange={
                                                              this.state.levels[
                                                                `${account.accoutId}${group.id}`
                                                              ]
                                                                ? (e) =>
                                                                    this.onHandleCheckboxlist(
                                                                      e,
                                                                      li,
                                                                      group.id,
                                                                      account.accoutId
                                                                    )
                                                                : () => {
                                                                    console.log(
                                                                      "do nothing"
                                                                    );
                                                                  }
                                                            }
                                                          />
                                                          {/* <span className="list"> */}
                                                          <span
                                                            className="list"
                                                            style={{
                                                              display:
                                                                "inline-block",
                                                              minWidth: "140px",
                                                              // textAlign:"center"
                                                              // minHeight: "50px",
                                                              // border: "1px solid red",
                                                            }}
                                                          >
                                                            {li}
                                                          </span>
                                                          {/* </span> */}
                                                        </div>
                                                        // </Grid>
                                                        // </div>
                                                      )
                                                    )}
                                                  </>
                                                ) : null}
                                              </Grid>
                                            </div>
                                          </div>
                                        </>
                                      ))}
                                    </>
                                  ) : null}
                                </React.Fragment>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
              {/* old code */}
              {/* code */}
              {/*  */}
            </div>
          </CardContent>
          <div className="btn-group">
            <Button className="btn btn-cancel">Cancel</Button>
            {/* <Link to={"/planinformation"} className="btn btn-save">
              Save
            </Link> */}
            <Button className="btn btn-save" onClick={this.onSavePlanInfoCard}>
              Save
            </Button>
          </div>
        </Card>
        {this.state.isPlanInfoCardShown ? (
          <PlanInformation
            onConfigure={this.onPlanConfig}
            configObject={this.state.planConfigObject}
          />
        ) : null}
        {this.state.isPlanConfigCardShow ? (
          <PlanInformationConfiguration
            planConfigObject={this.state.planConfigObject}
            onSave={this.onSaveInPlanConfg}
            onInputChange={(e) => this.handleInputChange(e)}
          />
        ) : null}

        <DialogPopup
          className="entity-diogPopup warning-popoup"
          open={this.state.showUpdateDefaultPopup}
          positiveActionText="Yes, Override"
          negativeActionText="No, Cancel"
          title="WARNING"
          showCloseIcon
          showActions={true}
          handleClose={this.onUpdateDefault}
          handleAction={this.onOveride}
        >
          <div
            // style={{minWidth: "600px", minHeight: "180px"}}
            className="info-container"
          >
            <p className="info-heading">
              Group has <span>Formulary 1 </span> currently set as default. Do
              you want to override?
            </p>
            <div className="btn-group">
              <Button
                className="btn btn-cancel"
                onClick={this.onCloseUpdateDefaultPopUp}
              >
                No, Cancel
              </Button>
              {/* <Link to={"/planinformation"} className="btn btn-save">
              Save
            </Link> */}
              <Button className="btn btn-save" onClick={this.onOveride}>
                Yes, Override
              </Button>
            </div>
          </div>
        </DialogPopup>

        <DialogPopup
          className="entity-diogPopup effective-date-selection-popup"
          open={
            this.state.showSelecteffectiveDatePopup
            // false
            // this.state.showUpdateDefaultPopup
          }
          positiveActionText="Save"
          negativeActionText="Cancel"
          title="EFFECTIVE DATE"
          showCloseIcon
          showActions={true}
          handleClose={this.onCloseOveride}
          handleAction={() => {}}
        >
          <div
            // style={{minWidth: "600px", minHeight: "180px"}}
            className="info-effective-date-container"
          >
            <p className="info-heading">
              Select the Effective Date for the override.
            </p>
            <CustomDatePicker
              className="date-select__input "
              onChange={this.handleEffectiveDate}
              value={this.state.effectiveDate}
              placeholder="Effective Date"
            />
            <div className="btn-group">
              <Button className="btn btn-cancel" onClick={this.onCloseOveride}>
                Cancel
              </Button>
              {/* <Link to={"/planinformation"} className="btn btn-save">
              Save
            </Link> */}
              <Button className="btn btn-save" onClick={this.onOverideSave}>
                Save
              </Button>
            </div>
          </div>
        </DialogPopup>
      </div>
    );
  }
}

export default EntityOwnershipContainer;
