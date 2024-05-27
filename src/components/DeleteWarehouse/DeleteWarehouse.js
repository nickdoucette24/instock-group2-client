import { useState, forwardRef } from "react";
import axios from "axios";

import closeIcon from "../../assets/Icons/close-24px.svg";

import './DeleteWarehouse.scss';

const DeleteWarehouse = forwardRef(({warehouse_name, id, toggleModal}, ref) => {

    const handleDeleteItem = (id) => {
        axios.delete(`http://localhost:8080/api/warehouses/${id}`)
            .then(response => console.log(response.data))
            .catch(err => console.error(err));
    }

    return<dialog 
        className="modal" 
        ref={ref} 
        onClick={(e) => {
            if (e.currentTarget === e.target) toggleModal();
        }
    }>
        {console.log(warehouse_name)}
        <div className='modal-content-wrapper'>
        <button className='close-icon' type='button' onClick={toggleModal}>
          <img src={closeIcon} alt='close icon'/>
        </button>
        <div className='modal-content'>
          <h1>Delete {warehouse_name} warehouse?</h1>
          <div className='delete-modal-message'>
            <p className='p1 modal-message'>Please confirm that you'd like to delete {warehouse_name} from the warehouse list.</p>
            <p className='p1 modal-message'>You won't be able to undo this action.</p>
          </div>
          <div className='modal-buttons'>
            <button className="cancel-button" type="button" onClick={toggleModal}>
              Cancel
            </button>
            <button className='delete-button' type='submit' onClick={() => handleDeleteItem(id)}>
              Delete
            </button> 
          </div>
        </div>
      </div>
    </dialog>
});

export default DeleteWarehouse;