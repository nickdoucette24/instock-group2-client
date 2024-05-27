import { useEffect, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import closeIcon from "../../assets/Icons/close-24px.svg";

import './DeleteEntryModal.scss';

const DeleteEntryModal = forwardRef(({warehouse_name, item, id, toggleModal, setDeleting}, ref) => {
  const location = useLocation();
  let route, entry, thing;

  if (location.pathname.endsWith('/')) {
    route = 'warehouses';
    entry = warehouse_name;
    thing = 'warehouse';
  } else {
    route = 'inventories';
    entry = item;
    thing = 'inventory';
  }

  routeDelete(route, entry, thing);

    const handleDeleteItem = (id) => {
      axios.delete(`http://localhost:8080/api/${route}/${id}`)
        .then(setDeleting(true))
        .catch(err => console.error(err));
    }

    return<dialog 
        className="modal" 
        ref={ref} 
        onClick={(e) => {
            if (e.currentTarget === e.target) toggleModal();
        }
    }>
        <div className='modal-content-wrapper'>
        <button className='close-icon' type='button' onClick={toggleModal}>
          <img src={closeIcon} alt='close icon'/>
        </button>
        <div className='modal-content'>
          <h1>Delete {entry} {thing}?</h1>
          <div className='delete-modal-message'>
            <p className='p1 modal-message'>Please confirm that you'd like to delete {entry} from the {thing} list.</p>
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

export default DeleteEntryModal;