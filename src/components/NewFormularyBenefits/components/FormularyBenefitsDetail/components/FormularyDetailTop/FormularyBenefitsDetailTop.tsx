import React, { Fragment, useContext } from "react";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "antd";
import formularyBenefitsContext from "../../../../FormularyBenefitsContext";
import "./FormularyBenefitsDetailTop.scss";
class FormularyBenefitsDetailTop extends React.Component<any, any> {
  state = {
    formularyVersionList: [],
    isAddNew: false,
  }
  componentDidMount() {
    this.setState({ formularyVersionList: ["Version 1", "Version 2"] });
    if (this.props.rootPath === undefined || this.props.rootPath == "") {
      this.setState({ isAddNew: true });
    }
    else {
      this.setState({ isAddNew: false });
    }
  }
  static contextType = formularyBenefitsContext;
  render() {
    let dropDown: any;
    dropDown = (
      <DropDown
        className="formulary-type-dropdown formulary-versions benefit-version-drop-down"
        placeholder="Formulary Version"
        options={this.state.formularyVersionList.map((e) => e)}
        dropdownClassName="version-dd"
      />
    );
    return (
      <div className="drug-detail-top">
        <div className="breadcrum-sec">
          <div className="breadcrum">
            <span
              className="color-blue"
              onClick={this.context.showDetailHandler(1, "")}
            >
              Benefits Grid
          </span>
            <span>&gt;</span>
            <span className="breadcrum-heading">{this.props.rootPath}</span>
            <span className="commercial-tag">Commercial</span>
          </div>
          <div className="icons-wrapper">
            <span
              className="audit-icon svg-icon"
            >
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.71429 0C6.162 0 5.71429 0.447716 5.71429 1V4.71429C5.71429 5.26657 6.162 5.71429 6.71428 5.71429H8V10.2857H1C0.447715 10.2857 0 10.7334 0 11.2857V12.7143C0 13.2666 0.447715 13.7143 1 13.7143H17.2857C17.838 13.7143 18.2857 13.2666 18.2857 12.7143V11.2857C18.2857 10.7334 17.838 10.2857 17.2857 10.2857H10.2857V5.71429H11.5714C12.1237 5.71429 12.5714 5.26657 12.5714 4.71428V1C12.5714 0.447715 12.1237 0 11.5714 0H6.71429ZM1.14286 15.4286C1.14286 15.113 1.39869 14.8571 1.71429 14.8571H16.5714C16.887 14.8571 17.1429 15.113 17.1429 15.4286C17.1429 15.7442 16.887 16 16.5714 16H1.71429C1.39869 16 1.14286 15.7442 1.14286 15.4286Z" fill="#5F80B9" />
              </svg>
            </span>
            <span
              className="note-icon svg-icon"
            >
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68577 0L12.2858 4H8.68587V5.33333H12.2858V15C12.2858 15.5523 11.8381 16 11.2858 16H1.28577C0.733482 16 0.285767 15.5523 0.285767 15V1C0.285767 0.447715 0.733482 0 1.28577 0H7.48575V5.33333H8.68575V0H8.68577Z" fill="#5F80B9" />
              </svg>
            </span>
            <span
              className="help-icon svg-icon"
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M16.0358 8C16.0358 12.2812 12.5657 15.75 8.28577 15.75C4.00586 15.75 0.535767 12.2812 0.535767 8C0.535767 3.72134 4.00586 0.25 8.28577 0.25C12.5657 0.25 16.0358 3.72134 16.0358 8ZM8.49374 2.8125C6.7907 2.8125 5.70452 3.52991 4.85158 4.80494C4.74108 4.97012 4.77805 5.19291 4.93642 5.313L6.02077 6.13519C6.18342 6.25853 6.41517 6.22919 6.54155 6.06887C7.0998 5.36081 7.48258 4.95022 8.33227 4.95022C8.97067 4.95022 9.76033 5.36109 9.76033 5.98016C9.76033 6.44816 9.37399 6.6885 8.74364 7.04191C8.00852 7.454 7.03577 7.96691 7.03577 9.25V9.375C7.03577 9.58209 7.20367 9.75 7.41077 9.75H9.16077C9.36786 9.75 9.53577 9.58209 9.53577 9.375V9.33334C9.53577 8.44391 12.1353 8.40687 12.1353 6C12.1353 4.18744 10.2552 2.8125 8.49374 2.8125ZM8.28577 10.5625C7.49311 10.5625 6.84827 11.2073 6.84827 12C6.84827 12.7926 7.49311 13.4375 8.28577 13.4375C9.07842 13.4375 9.72327 12.7926 9.72327 12C9.72327 11.2073 9.07842 10.5625 8.28577 10.5625Z" fill="#5F80B9" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" transform="translate(0.285767)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="menu-date-wrapper">
          <div className="date-wrapper durationInfo d-flex">
            <div className="item">
              <span className="label">Effective Date:</span>{"09/02/2019"}
            </div>
            <div className="item">
              <span className="label">Termination Date:</span>{"30/09/2020"}
            </div>
          </div>
          <div className="version-wrapper">
            {dropDown}
            <div className="item">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8281 5.48992C10.8336 8.42555 8.43949 10.826 5.50387 10.8281C4.23597 10.829 3.07134 10.387 2.15613 9.64838C1.91815 9.4563 1.90036 9.09964 2.11662 8.88338L2.35868 8.64132C2.54364 8.45636 2.83892 8.43612 3.04384 8.59869C3.71813 9.13376 4.57147 9.45312 5.5 9.45312C7.68507 9.45312 9.45312 7.68472 9.45312 5.5C9.45312 3.31493 7.68472 1.54688 5.5 1.54688C4.45126 1.54688 3.49875 1.95441 2.79151 2.61963L3.88193 3.71005C4.09849 3.92661 3.94511 4.29688 3.63887 4.29688H0.515625C0.325768 4.29688 0.171875 4.14298 0.171875 3.95312V0.829877C0.171875 0.523639 0.542137 0.370262 0.758699 0.586803L1.81943 1.64753C2.77597 0.733391 4.07241 0.171875 5.5 0.171875C8.43928 0.171875 10.8227 2.55191 10.8281 5.48992ZM6.94134 7.18255L7.15238 6.9112C7.32722 6.68641 7.28673 6.36245 7.06193 6.18763L6.1875 5.5075V3.26562C6.1875 2.98085 5.95665 2.75 5.67187 2.75H5.32812C5.04335 2.75 4.8125 2.98085 4.8125 3.26562V6.18L6.21777 7.273C6.44256 7.44782 6.7665 7.40734 6.94134 7.18255Z"
                  fill="#F65A1C"
                />
              </svg>
              Version History
            </div>
            <div className="item">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7812 0C12.4544 0 13 0.545645 13 1.21875V8.53125C13 9.20436 12.4544 9.75 11.7812 9.75H4.46875C3.79564 9.75 3.25 9.20436 3.25 8.53125V1.21875C3.25 0.545645 3.79564 0 4.46875 0H11.7812ZM4.46875 10.5625C3.34872 10.5625 2.4375 9.65128 2.4375 8.53125V3.25H1.21875C0.545645 3.25 0 3.79564 0 4.46875V11.7812C0 12.4544 0.545645 13 1.21875 13H8.53125C9.20436 13 9.75 12.4544 9.75 11.7812V10.5625H4.46875Z"
                  fill="#F65A1C"
                />
              </svg>
              Clone
            </div>
            <div className="item">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.61523 0C3.47441 0 0.927734 2.54668 0.927734 5.6875C0.927734 8.82832 3.47441 11.375 6.61523 11.375C9.75605 11.375 12.3027 8.82832 12.3027 5.6875C12.3027 2.54668 9.75605 0 6.61523 0ZM9.05273 5.99219C9.05273 6.04805 9.00703 6.09375 8.95117 6.09375H7.02148V8.02344C7.02148 8.0793 6.97578 8.125 6.91992 8.125H6.31055C6.25469 8.125 6.20898 8.0793 6.20898 8.02344V6.09375H4.2793C4.22344 6.09375 4.17773 6.04805 4.17773 5.99219V5.38281C4.17773 5.32695 4.22344 5.28125 4.2793 5.28125H6.20898V3.35156C6.20898 3.2957 6.25469 3.25 6.31055 3.25H6.91992C6.97578 3.25 7.02148 3.2957 7.02148 3.35156V5.28125H8.95117C9.00703 5.28125 9.05273 5.32695 9.05273 5.38281V5.99219Z"
                  fill="#F65A1C"
                />
              </svg>
              New Version
            </div>
            <div className="item">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM8.14962 3.33713C8.21417 3.27258 8.25043 3.18503 8.25043 3.09375C8.25043 3.00247 8.21417 2.91492 8.14962 2.85037C8.08508 2.78583 7.99753 2.74957 7.90625 2.74957C7.81497 2.74957 7.72742 2.78583 7.66288 2.85037L5.5 5.01394L3.33713 2.85037C3.30516 2.81841 3.26722 2.79306 3.22546 2.77577C3.18371 2.75847 3.13895 2.74957 3.09375 2.74957C3.04855 2.74957 3.00379 2.75847 2.96204 2.77577C2.92028 2.79306 2.88234 2.81841 2.85037 2.85037C2.81841 2.88234 2.79306 2.92028 2.77577 2.96204C2.75847 3.00379 2.74957 3.04855 2.74957 3.09375C2.74957 3.13895 2.75847 3.18371 2.77577 3.22546C2.79306 3.26722 2.81841 3.30516 2.85037 3.33713L5.01394 5.5L2.85037 7.66288C2.78583 7.72742 2.74957 7.81497 2.74957 7.90625C2.74957 7.99753 2.78583 8.08508 2.85037 8.14962C2.91492 8.21417 3.00247 8.25043 3.09375 8.25043C3.18503 8.25043 3.27258 8.21417 3.33713 8.14962L5.5 5.98606L7.66288 8.14962C7.69484 8.18159 7.73278 8.20694 7.77454 8.22423C7.81629 8.24153 7.86105 8.25043 7.90625 8.25043C7.95145 8.25043 7.99621 8.24153 8.03796 8.22423C8.07972 8.20694 8.11766 8.18159 8.14962 8.14962C8.18159 8.11766 8.20694 8.07972 8.22423 8.03796C8.24153 7.99621 8.25043 7.95145 8.25043 7.90625C8.25043 7.86105 8.24153 7.81629 8.22423 7.77454C8.20694 7.73278 8.18159 7.69484 8.14962 7.66288L5.98606 5.5L8.14962 3.33713Z"
                  fill="#F65A1C"
                />
              </svg>
              Delete
            </div>
            <div className="item">
              <Fragment>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM8.27063 3.41687C8.22152 3.36794 8.16304 3.32941 8.0987 3.30359C8.03436 3.27776 7.96547 3.26518 7.89616 3.2666C7.82685 3.26801 7.75853 3.28338 7.69529 3.3118C7.63205 3.34022 7.5752 3.3811 7.52812 3.432L5.14044 6.47419L3.7015 5.03456C3.60375 4.94348 3.47447 4.8939 3.34089 4.89626C3.20731 4.89861 3.07986 4.95273 2.98538 5.0472C2.89091 5.14167 2.8368 5.26912 2.83444 5.4027C2.83209 5.53629 2.88167 5.66557 2.97275 5.76331L4.79187 7.58312C4.84088 7.63204 4.89924 7.67059 4.96346 7.69646C5.02769 7.72234 5.09647 7.73501 5.1657 7.73373C5.23493 7.73244 5.30319 7.71723 5.36642 7.68899C5.42964 7.66076 5.48653 7.62007 5.53369 7.56938L8.27819 4.13875C8.37175 4.04147 8.42344 3.91138 8.42215 3.77641C8.42087 3.64144 8.36671 3.51236 8.27131 3.41687H8.27063Z" fill="#F65A1C" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="11" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              Complete
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default (FormularyBenefitsDetailTop)
