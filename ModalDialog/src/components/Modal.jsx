// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import './Modal.css'; // Make sure to create this CSS file

const Modal = ({ isOpen, onClose, size = 'medium', position = 'center', backdrop = true, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current && backdrop) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop ${backdrop ? 'active' : ''}`} onClick={handleBackdropClick}>
      <div
        className={`modal-content ${size} ${position}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex="-1"
        onKeyDown={handleKeyDown}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
