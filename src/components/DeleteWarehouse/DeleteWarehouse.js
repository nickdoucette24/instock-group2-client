import { forwardRef } from "react";
import axios from "axios";

import x from "../../assets/Icons/close-24px.svg";

import './DeleteWarehouse.scss';

const DeleteWarehouse = forwardRef(({warehouse_name, id, toggleModal}, ref) => {

    const handleDeleteItem = (id) => {
        axios.delete(`http://localhost:8080/api/warehouses/${id}`)
        .then(response => console.log(response.data));
    }

    return<dialog 
    className="modal" 
    ref={ref} 
    onClick={(e) => {
        if (e.currentTarget === e.target) toggleModal();
    }}>
        <img src={x} alt="" type="button" onClick={toggleModal} />
        <h1>Delete {warehouse_name} warehouse?</h1>
        <div className="modal__options">
            <button className="modal__delete-btn" onClick={toggleModal}>Cancel</button>
            <button className="modal__delete-btn" onClick={() => handleDeleteItem(id)}>Delete</button>
        </div>
    </dialog>
});

export default DeleteWarehouse;