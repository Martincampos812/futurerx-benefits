import { Input } from "@material-ui/core";
import React from "react";
import Groups from "./Groups";
import GroupDescriptionForm from "./GroupDescriptionForm";
import { ReactComponent as SearchIcon } from "../PriorAuthorization/assets/search.svg";

import "./style.scss";
const groupsData = [
  {
    id: 1,
    label: "Group 1",
    status: "completed",
  },
  {
    id: 2,
    label: "Group 2",
    status: "completed",
  },
  {
    id: 3,
    label: "Group 3",
    status: "completed",
  },
  {
    id: 4,
    label: "Group 4",
    status: "selected",
  },
  {
    id: 5,
    label: "Group 5",
    status: "completed",
  },
  {
    id: 6,
    label: "Group 6",
    status: "completed",
  },
  {
    id: 7,
    label: "Group 7",
    status: "completed",
  },
];

export default class PAGroupDescription extends React.Component<any, any> {
  state = {
    activeTabIndex: 0,
    tooltip: "ST CRITERIA",
    newGroup: false,
  };

  selectGroup = (text: string) => {
    this.setState({
      newGroup: true,
    });
  };
  addNewGroup = () => {
    this.setState({
      newGroup: false,
    });
  };

  render() {
    return (
      <>
        <div className='bordered'>
          <div className='inner-container bg-light-grey display-flex pa-group-description-popup'>
            <div className='group-des'>
              <div className='inner-container'>
                <div className='search-input'>
                  <Input
                    disableUnderline
                    placeholder='Search...'
                    endAdornment={<SearchIcon />}
                  />
                </div>
                <div className='group-wrapper'>
                  {groupsData.map((group, key) => (
                    <Groups
                      key={key}
                      id={group.id}
                      title={group.label}
                      statusType={group.status}
                      selectGroup={this.selectGroup}
                    />
                  ))}
                </div>
              </div>
            </div>
            <GroupDescriptionForm />
          </div>
        </div>
      </>
    );
  }
}
