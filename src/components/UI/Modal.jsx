import './Modal.css';

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Başlığı</h5>
          <span className="close-button" onClick={() => setShowModal(false)}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>Bu bir modal içerik örneğidir.</p>
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
    </div>
  );
};

export default Modal;
