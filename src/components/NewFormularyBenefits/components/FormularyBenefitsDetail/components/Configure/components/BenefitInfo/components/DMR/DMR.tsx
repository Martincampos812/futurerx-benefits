import React from "react";
import "./DMR.scss";
import { Radio ,Input } from 'antd';
export default class DMR extends React.Component<any, any> {
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
          const { value } = this.state;
        return (
            <div className='DMR-container'>
            <div className='DMR-header'>
               <div className='header-text'>
                   <p>DIRECT MEMBER REIMBURSEMENT (DMR)</p>
               </div>
            </div>
            <div className='DMR-detail'>
                <div className='detail-date'>
                    <h1>how long does the member have to submit the DMR from 
                    the date the prescription was filled? <span>*</span></h1>

                </div>
                <div className='radiogroup'>
                <Radio.Group onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
          90 days
        </Radio>
        <Radio style={radioStyle} value={2}>
          180 days
        </Radio>
        <Radio style={radioStyle} value={3}>
          360 days
        </Radio>
        <Radio style={radioStyle} value={4}>
          custom <br></br>
          {value === 4 ? <Input style={{ width: 60,height:35, marginLeft: 30, fontWeight:'normal', marginRight:10}} />: null} 
          {value === 4 ?  <span>days</span>: null} 
        </Radio>
      </Radio.Group>
             </div></div>
            </div>
        );
    }
}