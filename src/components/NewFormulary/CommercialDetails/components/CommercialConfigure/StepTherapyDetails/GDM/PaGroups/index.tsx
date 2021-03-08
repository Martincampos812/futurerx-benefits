import React from "react";
import { ReactComponent as StatusIcon } from "../../assets/status.svg";
import { ReactComponent as EditIcon } from "../../assets/statusedit.svg";

interface Props {
  id: number;
  title: string;
  statusType: string;
  selectGroup: (text: string) => void;
}
export default class PaGroups extends React.Component<Props, any> {
  getStatusIcon = (type) => {
    switch (type) {
      case "warning":
        return <StatusIcon style={{ fill: "#F65A1C" }} />;
      case "completed":
        return <StatusIcon style={{ fill: "#219653" }} />;
      case "selected":
        return <StatusIcon style={{ fill: "#FFF" }} />;
      default:
        return <StatusIcon style={{ fill: "#F65A1C" }} />;
    }
  };

  getEditIcon = (type) => {
    switch (type) {
      case "warning":
        return <EditIcon style={{ fill: "#F65A1C" }} />;
      case "completed":
        return <EditIcon style={{ fill: "#219653" }} />;
      case "selected":
        return <EditIcon style={{ fill: "#FFF" }} />;
      default:
        return <EditIcon style={{ fill: "#F65A1C" }} />;
    }
  };

  getStatus = () => {
    switch (this.props.statusType) {
      case "selected":
        return "orange-fill";
        break;
      case "warning":
        return "orange";
        break;
      case "completed":
        return "green";
        break;
      default:
        return "";
        break;
    }
  };
  render() {
    const color = this.getStatus();

    const { selectGroup } = this.props;
    return (
      <div className={`list ${color}`} onClick={(e) => selectGroup("positive")}>
        <div className='group'>
          <span>{this.getStatusIcon(this.props.statusType)}</span>
          <span className='group-title'>{this.props.title}</span>
        </div>
        <div className='edit-icon'>
          <span>{this.getEditIcon(this.props.statusType)}</span>
        </div>
      </div>
    );
  }
}
