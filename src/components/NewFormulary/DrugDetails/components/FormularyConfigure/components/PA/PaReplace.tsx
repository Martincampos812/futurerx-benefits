import React from "react";

import DropDown from "../../../../../../shared/Frx-components/dropdown/DropDown";
import { Row, Col, Space } from "antd";
import RadioButton from "../../../../../../shared/Frx-components/radio-button/RadioButton";
import Button from "../../../../../../shared/Frx-components/button/Button";

import "../Tier/Tier.scss";
import "./PA.scss";

class PaReplace extends React.Component {
  render() {
    return (
      <>
        <div className="group tier-dropdown white-bg">
          <Row>
            <Col className="input-filed-group-container" lg={11}>
              <label>
                PA GROUP DESCRIPTION <span className="astrict">*</span>
              </label>
              <DropDown options={[1, 2, 3]} />
            </Col>
            <Col lg={1}></Col>
            <Col className="input-filed-group-container" lg={11}>
              <label>
                PA GROUP DESCRIPTION <span className="astrict">*</span>
              </label>
              <DropDown options={[1, 2, 3]} />
            </Col>
            <Col className="input-filed-group-container" lg={11}>
              <label>
                Do you want to view existing PA configurations in another
                formulary? <span className="astrict">*</span>
              </label>
              <Space size="large">
                <RadioButton label="No" name="pa_configuration" />
                <RadioButton label="Yes" name="pa_configuration" />
              </Space>
            </Col>
            <Col lg={1}></Col>
            <Col className="input-filed-group-container" lg={11}>
              <label>
                Select Related Formulary to View Existing configuration?{" "}
                <span className="astrict">*</span>
              </label>
              <DropDown options={[1, 2, 3]} />
            </Col>
            <Col lg={1}></Col>
            <Col className="input-filed-group-container" lg={11}>
              <label>
                do you want to add additional criteria?{" "}
                <span className="astrict">*</span>
              </label>
              <Space size="large">
                <RadioButton label="Yes" name="additional_criteria" />
                <RadioButton label="No" name="additional_criteria" />
              </Space>
            </Col>
          </Row>
        </div>
        <div className="white-bg">
          <Row justify="end">
            <Col>
              <Button label="Apply"></Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default PaReplace;
