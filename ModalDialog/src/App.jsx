// src/App.jsx
import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css'; // Import global styling

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormModalOpen, setFormModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  
  const handleOpenFormModal = () => setFormModalOpen(true);
  const handleCloseFormModal = () => setFormModalOpen(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    setFormModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Open Confirmation Modal</button>
      <button onClick={handleOpenFormModal}>Open Form Modal</button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="medium" position="center" backdrop={true}>
        <h2 id="modal-title">Confirm Action</h2>
        <p>Are you sure you want to proceed?</p>
        <button onClick={handleCloseModal}>Cancel</button>
        <button onClick={() => { alert('Confirmed!'); handleCloseModal(); }}>Confirm</button>
      </Modal>

      <Modal isOpen={isFormModalOpen} onClose={handleCloseFormModal} size="large" position="bottom-right" backdrop={true}>
        <h2 id="modal-title">Submit Form</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" required />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
