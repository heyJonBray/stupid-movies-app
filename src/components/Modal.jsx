import { useSetAtom } from 'jotai';
import { uiAtom } from '../state';

const Modal = () => {
  const setUi = useSetAtom(uiAtom);
  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="close-btn"
          onClick={() =>
            setUi((prev) => ({
              ...prev,
              modal: null,
            }))
          }
        >
          &times;
        </button>
        <h2>My Modal</h2>
        <p>ipsum lorem ipsum lorem</p>
      </div>
    </div>
  );
};

export default Modal;
