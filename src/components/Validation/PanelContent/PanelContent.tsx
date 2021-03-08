import React from "react";
import { Row, Col, Avatar, Space, Divider, Tooltip } from "antd";
import "./PanelContent.css";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

function Comment() {
  return (
    <Row className="Comment-card2" align="middle">
      <Col xs={24} lg={12}>
        <Space size="large">
          <Avatar style={{ backgroundColor: "#EE5959", verticalAlign: "middle" }}>{1}</Avatar>
          <span className="title2">Formulary setup</span>
        </Space>
      </Col>
      <Col xs={24} lg={5} style={{ textAlign: "center" }}>
        <Space size="large">
          <Avatar.Group maxCount={2} maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: "#1890ff" }} icon={<AntDesignOutlined />} />
          </Avatar.Group>
          <span className="date2">August 11, 2020</span>
        </Space>
      </Col>
      <Col xs={24} lg={3} style={{ textAlign: "center" }}>
        <Space size="small">
          {4}
          <img src="/images/comment.png" alt="" />
        </Space>
      </Col>
      <Col xs={24} lg={4} style={{ textAlign: "right" }}></Col>
    </Row>
  );
}

export default Comment;
