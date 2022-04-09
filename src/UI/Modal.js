import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
//import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <>
      <Backdrop onClose={props.onClose} />

      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
}

export default Modal;
