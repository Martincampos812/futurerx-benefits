import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Theme, withStyles } from "@material-ui/core/styles";
import { ReactComponent as CloseIcon } from "../../../assets/icons/CloseIcon.svg";
import React from "react";
import "./FrxDialogPopup.scss";

const styles = (theme: Theme) => ({
  root: {
    //minWidth: "640px" //  @mk
    height: "100%",
    width: "100%",
  },
});

interface DialogPopupProps {
  open: boolean;
  children: React.ReactNode;
  positiveActionText: string;
  negativeActionText: string;
  title: string;
  showActions: boolean;
  showCloseIcon?: boolean;
  className?: string;
  height?: any;
  width?: any;
  headJSX?: any;
  componentTitle?: any;
  // classes: Partial<Record<DialogClassKey, string>>;
  disablePortal?: boolean;
  popupMaxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  handleClose: () => void;
  handleAction: (action: string) => void;
}

class DialogPopup extends React.Component<DialogPopupProps> {
  render() {
    const {
      open,
      title,
      children,
      handleClose,
      handleAction,
      positiveActionText,
      negativeActionText,
      showActions,
      height,
      width,
      componentTitle,
      showCloseIcon,
      headJSX,
      disablePortal,
      popupMaxWidth,
    } = this.props;
    return (
      <Dialog
        disableEnforceFocus
        disableBackdropClick
        disableEscapeKeyDown
        disablePortal={disablePortal ? disablePortal : false}
        open={open}
        maxWidth={popupMaxWidth ? popupMaxWidth : false}
        className={this.props.className ? this.props.className : "dialog-popup"}
        style={{
          minWidth: "1000px",
          minHeight: "600px",
          zIndex: 9999,
        }}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="frx-dialog-root__heading"
        >
          {Boolean(headJSX !== undefined) ? (
            <div className="header-flexbox-container">
              <div>{title}</div>
              <div>
                {headJSX()}
                <span
                  className="frx-dialog-root__close-icon"
                  onClick={(e) => handleClose()}
                >
                  <CloseIcon />
                </span>
              </div>
            </div>
          ) : componentTitle ? (
            <React.Fragment>
              <label>{title.split(":")[0]}</label>:{" "}
              <span>{title.split(":")[1]}</span>
            </React.Fragment>
          ) : (
            title
          )}
          {!showActions ? (
            <span
              className="frx-dialog-root__close-icon"
              onClick={(e) => handleClose()}
            >
              <CloseIcon />
            </span>
          ) : (
            ""
          )}
          {showCloseIcon ? (
            <span
              className="frx-dialog-root__close-icon"
              onClick={(e) => handleClose()}
            >
              <CloseIcon />
            </span>
          ) : (
            ""
          )}
        </DialogTitle>
        <DialogContent className="scroll-bar">{children}</DialogContent>
        {showActions ? (
          <DialogActions className="frx-dialog-root__btn-actions">
            {negativeActionText === "" ? null : (
              <Button
                className="frx-dialog-root__cancel-btn"
                onClick={handleClose}
              >
                {negativeActionText}
              </Button>
            )}
            <Button
              className="frx-dialog-root__save-btn"
              onClick={(e) => handleAction("positive")}
              autoFocus
            >
              {positiveActionText}
            </Button>
          </DialogActions>
        ) : (
          ""
        )}
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DialogPopup);
