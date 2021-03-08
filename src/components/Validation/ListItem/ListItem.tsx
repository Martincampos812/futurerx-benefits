import React from "react";
import { Row, Col, Avatar, Space } from "antd";
import "./ListItem.css";

function Comment() {
  return (
    <Row className="Comment-card" align="middle">
      <Col span={24}>
        <Space size="large">
          <span style={{ color: "#1BC47D" }}>&#11044;</span>
          <span className="title">Formulary setup</span>
        </Space>
      </Col>
    </Row>
  );
}

export default Comment;
