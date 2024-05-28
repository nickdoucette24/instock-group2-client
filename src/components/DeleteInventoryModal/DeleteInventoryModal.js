import './DeleteInventoryModal.scss';

import closeIcon from "../../assets/Icons/close-24px.svg";
import { forwardRef } from 'react';
import axios from "axios";

const DeleteInventoryModal = forwardRef(({item, id, toggleModal, setUpdating}, ref) => {

  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:8080/api/inventories/${id}`)
      .then(toggleModal())
      .then(setUpdating(true))
      .catch(err => console.error(err));
  }

  return (
    <dialog 
      className='delete-modal' 
      ref={ref} 
      onClick={(e) => {
        if (e.currentTarget === e.target) toggleModal();
      }}
    >
      <div className='modal-content-wrapper'>
        <button className='close-icon' type='button' onClick={toggleModal}>
          <img src={closeIcon} alt='close icon'/>
        </button>
        <div className='modal-content'>
          <h1>Delete {item} inventory item?</h1>
          <div className='delete-modal-message'>
            <p className='p1 modal-message'>Please confirm that you'd like to delete {item} from the inventory list.</p>
            <p className='p1 modal-message'>You won't be able to undo this action.</p>
          </div>
          <div className='modal-buttons'>
            <button className="cancel-button" type="button" onClick={toggleModal}>
              <h3>Cancel</h3>
            </button>
            <button className='delete-button' type='submit' onClick={() => handleDeleteItem(id)}>
              <h3>Delete</h3>
            </button> 
          </div>
        </div>
      </div>
    </dialog>
  );
});

export default DeleteInventoryModal;