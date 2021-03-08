import React from "react";
import { Input } from "@material-ui/core";


import PanelHeader from "../../../../../../../../../shared/Frx-components/panel-header/PanelHeader";
import RadioButton from "../../../../../../../../../shared/Frx-components/radio-button/RadioButton";

import "./OTCBenefits.scss";

import { Col, Popover, Row } from "antd";

import Grid from "@material-ui/core/Grid";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
// interface State {
//   miniTabs: Array<TabInfo>;
//   activeMiniTabIndex: number;
//   gridData: any;
//   gridColumn: any;
//   AddNewPopupInd:boolean;
//   selectedAddNewFormularyRadio:any;
// }

// const miniTabs = [
//   { id: 1, text: "All" },
//   { id: 2, text: "Add/Remove NDCs" },
//   { id: 3, text: "Add/Remove Criteria" },
//   { id: 4, text: "Payment Override" },
//   { id: 5, text: "Group 4" },
//   { id: 6, text: "Group 5" },
// ];
// const steps = [
//   "Setup",
//   "Construct",
//   "Compare",
//   "Validation",
//   "Complete",
//   "Bazaar",
// ];
class OTCBenefits extends React.Component<any, any> {
  state = {

  };
  

 



  render() {
    return (
      <>
        
      <div className="formulary-otc-benefit-grid">
        <div className="bordered">
          <div className="formulary-grid-panel-header-container">
            <PanelHeader
              title="OTC BENEFITS"
              tooltip="OTC BENEFITS"
              className="formulary-grid-panel-header"
            />
            
           
          </div>
         
         
          <div className="inner-container">
           <Row>
               <Col span={6} className='container-title'>THRESHOLD? *</Col>
               <Col span={4} className='container-title'>FREQUENCY? *</Col>
               <Col span={5} className='container-title'>HOUSEHOLD BENEFITS? *</Col>
               <Col span={4} className='container-title'>NUMBER OF ORDERS</Col>
               <Col span={5} className='container-title'>PERIODS PER NUMBER OF ORDERS?</Col>
             
           </Row>
           
           {/* <div className="row-height"></div> */}


           <Row className="row-height">
               <Col span={6}>
               <input type="text" className="otc-benefits-input" />
               </Col>
               <Col span={4}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Monthly'
                name='frequency-radio'
                defaultChecked={true}
              />
               </Col>
               <Col span={5}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Individual'
                name='house-hold-benefits-radio'
                defaultChecked={true}
              />
               </Col>
               <Col span={4}>
               <input type="text" className="otc-benefits-input" />

               </Col>
               <Col span={5}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Weekly'
                name='periods-per-no-of-orders-radio'
                defaultChecked={true}
              />
               </Col>
             
           </Row>
          
           <Row >
               <Col span={6}>
               
               </Col>
               <Col span={4}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Quartely'
                name='frequency-radio'
                defaultChecked={false}
              />
               </Col>
               <Col span={5}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='family'
                name='house-hold-benefits-radio'
                defaultChecked={false}
              />
               </Col>
               <Col span={4}>
              

               </Col>
               <Col span={5}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Bi-Weekly'
                name='periods-per-no-of-orders-radio'
                defaultChecked={false}
              />
               </Col>
             
           </Row>
         
           <Row className="row-height">
               <Col span={6}>
               
               </Col>
               <Col span={4}>
                   
               <RadioButton
                label='Annually'
                name='frequency-radio'
                defaultChecked={true}
              />
               </Col>
               <Col span={5}>
              
               </Col>
               <Col span={4}>
              

               </Col>
               <Col span={5}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Monthly'
                name='periods-per-no-of-orders-radio'
                defaultChecked={false}
              />
               </Col>
             
           </Row>
         
           <Row className="row-height">
               <Col span={6}></Col>
               <Col span={4}></Col>
               <Col span={5}> </Col>
               <Col span={4}> </Col>
               <Col span={5}>
               <RadioButton
                label='Quarterly'
                name='periods-per-no-of-orders-radio'
                defaultChecked={false}
              />
               </Col>
             
           </Row>
         
           <Row className="row-height">
               <Col span={6}> </Col>
               <Col span={4}> </Col>
               <Col span={5}></Col>
               <Col span={4}> </Col>
               <Col span={5}>
               <RadioButton
                label='Annually'
                name='periods-per-no-of-orders-radio'
                defaultChecked={false}
              />
               </Col>
             
           </Row>
         
          </div>
        </div>
      </div>
   
      </>
    );
  }
}

export default OTCBenefits;
