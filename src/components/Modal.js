import './Modal.scss';

const Modal = ({ handleClose, show, children }) => {
  // if show prop is true, apply class to make modal visible
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <button type="button" onClick={handleClose} className="close-btn">&#10006;</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;