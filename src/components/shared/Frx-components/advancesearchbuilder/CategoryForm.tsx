import React from "react";
import { Button, Box } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import DropDown from "../../Frx-components/dropdown/DropDown";
import CheckboxLabels from "./CheckBox";

interface Props {
  clear?: any;
  title: string;
  deleteField?: any;
  index?: any;
  checkBoxOpt?: any;
  catid?: number;
}

export default class CategoryForm extends React.Component<Props, any> {
  render() {
    return (
      <div className='main-wrapper'>
        <div className='row-wrapper'>
          <div className='arrow-wrapper'>
            <Box component='span' display='block'>
              <svg
                width='6'
                height='16'
                viewBox='0 0 6 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2.97993 9.87637C3.03294 9.8763 3.08544 9.88669 3.13443 9.90695C3.18341 9.9272 3.22792 9.95692 3.2654 9.9944C3.30289 10.0319 3.33261 10.0764 3.35286 10.1254C3.37312 10.1744 3.38351 10.2269 3.38344 10.2799L3.38344 14.4768L4.99511 12.8652C5.07069 12.7896 5.17319 12.7471 5.28008 12.7471C5.38696 12.7471 5.48947 12.7896 5.56504 12.8652C5.64062 12.9407 5.68308 13.0432 5.68308 13.1501C5.68308 13.257 5.64062 13.3595 5.56504 13.4351L3.28531 15.7148C3.20974 15.7904 3.10723 15.8329 3.00035 15.8329C2.89346 15.8329 2.79096 15.7904 2.71538 15.7148L2.70747 15.7069C2.7031 15.7029 2.69881 15.6988 2.6946 15.6946C2.6904 15.6904 2.68629 15.6861 2.68229 15.6817L0.435649 13.4351C0.360071 13.3595 0.317612 13.257 0.317612 13.1501C0.317612 13.0432 0.360071 12.9407 0.435649 12.8652C0.511227 12.7896 0.613732 12.7471 0.720615 12.7471C0.827498 12.7471 0.930004 12.7896 1.00558 12.8652L2.57642 14.436L2.57642 10.2799C2.57635 10.2269 2.58674 10.1744 2.607 10.1254C2.62725 10.0764 2.65697 10.0319 2.69445 9.9944C2.73194 9.95692 2.77645 9.9272 2.82543 9.90695C2.87442 9.88669 2.92692 9.8763 2.97993 9.87637ZM2.57642 1.56447L2.57642 5.72042C2.57642 5.82744 2.61893 5.93007 2.6946 6.00574C2.77028 6.08142 2.87291 6.12393 2.97993 6.12393C3.08695 6.12393 3.18958 6.08142 3.26526 6.00574C3.34093 5.93007 3.38344 5.82744 3.38344 5.72042V1.52347L4.99519 3.13522C5.07077 3.2108 5.17328 3.25326 5.28016 3.25326C5.38704 3.25326 5.48955 3.2108 5.56513 3.13522C5.6407 3.05964 5.68316 2.95714 5.68316 2.85025C5.68316 2.74337 5.6407 2.64087 5.56513 2.56529L3.28539 0.285557C3.20982 0.209979 3.10731 0.167521 3.00043 0.16752C2.89355 0.16752 2.79104 0.20998 2.71546 0.285558L2.712 0.289021C2.70599 0.294347 2.70014 0.299858 2.69445 0.305547C2.68876 0.311237 2.68325 0.317089 2.67793 0.323093L0.435731 2.56529C0.360153 2.64087 0.317694 2.74337 0.317694 2.85025C0.317694 2.95714 0.360153 3.05964 0.435731 3.13522C0.511309 3.2108 0.613814 3.25326 0.720698 3.25326C0.827581 3.25326 0.930086 3.2108 1.00566 3.13522L2.57642 1.56447Z'
                  fill='#707683'
                />
              </svg>
            </Box>
          </div>
          <div className='search-wrapper'>
            <div className='search-header'>
              <div className='panel'>
                <span>{this.props.title}</span>
                <div className='panel-tooltip'>
                  <Tooltip
                    classes={{
                      tooltip: "custom-tooltip panel-tooltip",
                    }}
                    title={this.props.title}
                    placement='top-start'
                    arrow
                  >
                    <svg
                      className='info-icon'
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.3335 3.66732H7.66683V5.00065H6.3335V3.66732ZM6.3335 6.33398H7.66683V10.334H6.3335V6.33398ZM7.00016 0.333984C3.32016 0.333984 0.333496 3.32065 0.333496 7.00065C0.333496 10.6807 3.32016 13.6673 7.00016 13.6673C10.6802 13.6673 13.6668 10.6807 13.6668 7.00065C13.6668 3.32065 10.6802 0.333984 7.00016 0.333984ZM7.00016 12.334C4.06016 12.334 1.66683 9.94065 1.66683 7.00065C1.66683 4.06065 4.06016 1.66732 7.00016 1.66732C9.94016 1.66732 12.3335 4.06065 12.3335 7.00065C12.3335 9.94065 9.94016 12.334 7.00016 12.334Z'
                        fill='#1D54B4'
                      />
                    </svg>
                  </Tooltip>
                </div>
              </div>
              <span>
                <DropDown options={[1, 2, 3]} />
              </span>
            </div>
            <div className='search-form'>
              <div className='from-panel'>
                <span>Select the formulary file:</span>
                {this.props.catid === 2 && (
                  <Button variant='contained'>Select all</Button>
                )}
              </div>
              <CheckboxLabels checkBoxOpt={this.props.checkBoxOpt} />
            </div>
          </div>
          <div className='delete-wrapper'>
            <Box
              component='span'
              display='block'
              onClick={() => this.props.deleteField(this.props.index)}
            >
              <svg
                width='13'
                height='15'
                viewBox='0 0 13 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.74967 13.0417C1.74967 13.9125 2.46217 14.625 3.33301 14.625H9.66634C10.5372 14.625 11.2497 13.9125 11.2497 13.0417V3.54167H1.74967V13.0417ZM12.0413 1.16667H9.27051L8.47884 0.375H4.52051L3.72884 1.16667H0.958008V2.75H12.0413V1.16667Z'
                  fill='#999999'
                />
              </svg>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}
