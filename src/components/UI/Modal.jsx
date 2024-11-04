import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({
  title = 'Bu bir title örneğidir.',
  desc = 'Bu bir modal içerik örneğidir.',
  setShowModal,
}) => {
  return createPortal(
    <div className="modal">
      <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <span className="close-button" onClick={() => setShowModal(false)}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>{desc}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Kapat
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowModal(false)}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
