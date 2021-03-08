import React from "react";
import "./Incentive.scss";
import { Input } from 'antd';
import { Row, Col, Checkbox } from 'antd';
import { Radio } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
export default class Incentive extends React.Component<any, any> {
    state = {
        value: 2,
        valueCriteria:1
        
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
      onChangeCriteria = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          valueCriteria: e.target.value,
        });
      };

    render() {
        
          const { value } = this.state;
          const { valueCriteria } = this.state;
        return (
            <div className='incentives-container'>
            <div className='incentives-header'>
                <div className='header-text'>
                   <p>INCENTIVES</p>
               </div>
            </div>
            <div className='incentives-detail'>
                <div className='name-section'>
                <Input placeholder="INCENTIVE NAME*" />
                <div className='expand-icon'>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.527597 0.942758C0.835571 0.627905 1.26433 0.603197 1.64082 0.942758L4.40129 3.58795L7.16175 0.942758C7.53824 0.603197 7.96771 0.627905 8.27357 0.942758C8.58154 1.25691 8.56176 1.78778 8.27357 2.08286C7.98678 2.37795 4.9572 5.26104 4.9572 5.26104C4.88505 5.33577 4.79858 5.39521 4.70295 5.4358C4.60732 5.47639 4.50448 5.49731 4.40058 5.49731C4.29668 5.49731 4.19385 5.47639 4.09821 5.4358C4.00258 5.39521 3.91611 5.33577 3.84397 5.26104C3.84397 5.26104 0.815793 2.37795 0.527597 2.08287C0.238694 1.78778 0.219623 1.25691 0.527597 0.942758Z" fill="#323C47"/>
</svg>

                </div>
                </div>
                
                <div className='detail-section'>
                <Row>
      <Col span={8}>
          <div className='apply-section'>
              <div className='apply-heading'>
              <h1>
              when do you want the incentive to apply? <span>*</span>
              </h1>

              </div>
              
              <div className='apply-detail'>
              <Radio.Group onChange={this.onChange} value={value}>
      <Radio value={1}>During Deductible Phase</Radio><br></br>
      <Radio value={2}>After Deductible Phase</Radio><br></br>
      <Radio value={3}>During and After Deductible Phase</Radio><br></br>
      </Radio.Group>
              </div>
          </div>
      
      
      
      </Col>
      <Col span={8}>
      <div className='apply-section'>
              <div className='apply-heading'>
              <h1>
              what medications apply to incentive? <span>*</span>
              </h1>

              </div>
              
              <div className='apply-detail'>

      <Checkbox value="1">When specific drugs are filled</Checkbox><br></br>
      <Checkbox value="2">When patient meets certain criteria</Checkbox>
      </div>
      </div>
      </Col>
      <Col span={8}>

      <div className='apply-section'>
              <div className='apply-heading'>
              <h1>
              does criteria only apply when patient fills at a specific pharmacy? 
              </h1>

              </div>
              
              <div className='apply-detail'>
              <Radio.Group onChange={this.onChangeCriteria} value={valueCriteria}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
      </Radio.Group>
              </div>
          </div>
      </Col>
    </Row>
                </div>
                <div className='add-Button'>
                <div className='button-img'>
                <svg               width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0312 15.0319C18.3507 11.7125 18.3507 6.33056 15.0312 3.01108C11.7117 -0.308406 6.32985 -0.308363 3.01041 3.01108C-0.309032 6.33052 -0.309075 11.7124 3.01041 15.0319C6.32989 18.3514 11.7118 18.3513 15.0312 15.0319ZM14.3241 14.3248C17.2531 11.3958 17.253 6.64708 14.3241 3.71818C11.3952 0.789284 6.64646 0.789241 3.71751 3.71818C0.788571 6.64713 0.788615 11.3959 3.71751 14.3248C6.64641 17.2537 11.3952 17.2537 14.3241 14.3248Z"
                  fill="#707683"
                />
                <path
                  d="M4.52082 9.02148C4.52082 9.29762 4.74468 9.52148 5.02082 9.52148H8.52082V13.0215C8.52082 13.2976 8.74468 13.5215 9.02082 13.5215C9.29696 13.5215 9.52082 13.2976 9.52082 13.0215V9.52148L13.0208 9.52148C13.297 9.52148 13.5208 9.29762 13.5208 9.02148C13.5208 8.74534 13.297 8.52148 13.0208 8.52148H9.52082L9.52082 5.02148C9.52082 4.74534 9.29696 4.52148 9.02082 4.52148C8.74468 4.52148 8.52082 4.74534 8.52082 5.02148V8.52148H5.02082C4.74468 8.52148 4.52082 8.74534 4.52082 9.02148Z"
                  fill="#707683"
                />
              </svg>
              </div>
              <div className='button-text'>
              <p>Add New</p>
              </div>
                </div>
            </div>
            </div>
        );
    };
}
