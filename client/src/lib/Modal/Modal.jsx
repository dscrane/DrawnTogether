/* IMPORTS */
import { CloseRounded } from "@mui/icons-material";
import "./modal.css";
/* ------ */

export const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show ? (
        <div className="modal visible" onClick={onClose}>
          <main className="modal__content visible" onClick={(e) => e.stopPropagation()}>
            <header className="modal__header">
              <div className="modal__header-title">{children[0]}</div>
              <button className="modal__close" onClick={onClose}>
                <CloseRounded className="modal__close-icon" />
              </button>
            </header>
            <div className="modal__body">{children[1]}</div>
          </main>
        </div>
      ) : null}
    </>
  );
};
