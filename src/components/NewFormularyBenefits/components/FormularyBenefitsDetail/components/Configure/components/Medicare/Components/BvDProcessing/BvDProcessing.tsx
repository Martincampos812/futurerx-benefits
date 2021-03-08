import React from "react";
import { Input } from "@material-ui/core";


import PanelHeader from "../../../../../../../../../shared/Frx-components/panel-header/PanelHeader";
import RadioButton from "../../../../../../../../../shared/Frx-components/radio-button/RadioButton";

import { ReactComponent as CheckIcon } from "../../../../../../../../../../assets/icons/check.svg";


import "./BvDProcessing.scss";

import { Col, Row } from "antd";

class BVDProcessing extends React.Component<any, any> {
  state = {

  };
  

 



  render() {
    return (
      <>
        
      <div className="formulary-bvd-processing-grid">
        <div className="bordered">
          <div className="formulary-grid-panel-header-container">
            <PanelHeader
              title="BVD PROCESSING"
              tooltip="BVD PROCESSING"
              className="formulary-grid-panel-header"
            />
            
           
          </div>
         
         
          <div className="inner-container">
           <Row>
               <Col span={8} className='container-title'>FB COMPONENT</Col>
               <Col span={8} className='container-title'>COMPONENT UN EDITS</Col>
               <Col span={8} className='container-title'>PATIENT RESIDENCE CODE</Col>
              
             
           </Row>

           <Row className="row-height">
               <Col span={7}>
               <div className="inner-bordered">
          <div className="formulary-grid-panel-inner-header-container">
              <Row>
              
                  {/* <Col>
                  <CheckIcon style={{height:100}}/></Col> */}
                  <Col><PanelHeader
              title="BVD PROCESSING"
              tooltip="BVD PROCESSING"
              className="formulary-grid-panel-inner-header"
            /></Col>
                  <Col></Col>
              </Row>
            
            
           
          </div>
          <div className="inner-container">
              
          </div>

          </div>


               </Col>
               <Col span={1}></Col>
               
               
               <Col span={8}>
               <input type="text" className="otc-benefits-input" />

               </Col>
               <Col span={8}>
               <RadioButton
                // onClick={() => this.additionalCriteriaDisplay(true)}
                label='Weekly'
                name='periods-per-no-of-orders-radio'
                defaultChecked={true}
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

export default BVDProcessing;
