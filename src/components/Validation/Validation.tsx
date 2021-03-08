import React from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ValidationStartsCard from "../FormularyDashboardStats/FormularyDashboardStatsChart/FormularyDashboardStatsChart";
import PanelContent from "./PanelContent/PanelContent";
import ListItem from "./ListItem/ListItem";
import Card from "./Card/Card";
import "./Validation.css";

import moment from "moment";
import { Collapse, Row, Col, Comment, Tooltip, Avatar, Input } from "antd";

const { Panel } = Collapse;
const { TextArea } = Input;

function Validation() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="formulary-root validation">
      <Paper elevation={0} style={{ marginBottom: "3rem" }}>
        <div className="title">Summary of Checks and Validations</div>
        <div className="container">
          <ValidationStartsCard />
          <Card label="Failed" value={1} color="rgba(252,120,120,0.75)" />
          <Card label="Warning" value={1} color="rgba(245,195,140,0.75)" />
          <Card label="Passed" value={35} color="rgba(176,223,165,0.75)" />
        </div>
      </Paper>

      {/* Accordian-1 */}
      <Collapse onChange={callback} expandIconPosition={"right"} className="collapse">
        <Panel className="custom" header={<PanelContent />} key="1">
          <Row className="row">
            <Col span={14} className="col-1">
              <Row>
                <Col span={12}>VALIDATION</Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <span style={{ color: "#FD9A9A" }}>&#11044;</span>&nbsp;0 &nbsp;&nbsp;
                  <span style={{ color: "#F8D2A9" }}>&#11044;</span>&nbsp;3 &nbsp;&nbsp;
                  <span style={{ color: "#C4E7BC" }}>&#11044;</span>&nbsp;5 &nbsp;&nbsp;
                </Col>
              </Row>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </Col>
            <Col span={10} className="col-2">
              <p>NOTES</p>
              {/* <hr className="divider" /> */}

              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />

              <hr className="divider" />

              <TextField id="outlined-basic" label="Add a Note" variant="outlined" size="small" />
            </Col>
          </Row>
        </Panel>
      </Collapse>

      {/* Accordian-2 */}
      <Collapse onChange={callback} expandIconPosition={"right"} className="collapse">
        <Panel className="custom" header={<PanelContent />} key="1">
          <Row className="row">
            <Col span={14} className="col-1">
              <Row>
                <Col span={12}>VALIDATION</Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <span style={{ color: "#FD9A9A" }}>&#11044;</span>&nbsp;0 &nbsp;&nbsp;
                  <span style={{ color: "#F8D2A9" }}>&#11044;</span>&nbsp;3 &nbsp;&nbsp;
                  <span style={{ color: "#C4E7BC" }}>&#11044;</span>&nbsp;5 &nbsp;&nbsp;
                </Col>
              </Row>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </Col>
            <Col span={10} className="col-2">
              <p>NOTES</p>
              {/* <hr className="divider" /> */}

              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />

              <hr className="divider" />

              <TextField id="outlined-basic" label="Add a Note" variant="outlined" size="small" />
            </Col>
          </Row>
        </Panel>
      </Collapse>

      {/* Accordian-3 */}
      <Collapse onChange={callback} expandIconPosition={"right"} className="collapse">
        <Panel className="custom" header={<PanelContent />} key="1">
          <Row className="row">
            <Col span={14} className="col-1">
              <Row>
                <Col span={12}>VALIDATION</Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <span style={{ color: "#FD9A9A" }}>&#11044;</span>&nbsp;0 &nbsp;&nbsp;
                  <span style={{ color: "#F8D2A9" }}>&#11044;</span>&nbsp;3 &nbsp;&nbsp;
                  <span style={{ color: "#C4E7BC" }}>&#11044;</span>&nbsp;5 &nbsp;&nbsp;
                </Col>
              </Row>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </Col>
            <Col span={10} className="col-2">
              <p>NOTES</p>
              {/* <hr className="divider" /> */}

              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />
              <Comment
                actions={[<span key="comment-basic-reply-to">Version</span>]}
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                className="comment"
              />

              <hr className="divider" />

              <TextField id="outlined-basic" label="Add a Note" variant="outlined" size="small" />
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Validation;
