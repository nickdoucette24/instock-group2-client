import chevron from "../../assets/Icons/chevron_right-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import del from "../../assets/Icons/delete_outline-24px.svg";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";

import { useRef } from "react";
import { Link } from "react-router-dom";

function WarehouseRow({ warehouse, setUpdating }) {

	const dialogRef = useRef(null);

	const toggleModal = () => {
		if (!dialogRef.current) return;
		dialogRef.current.hasAttribute("open")
		? dialogRef.current.close()
		: dialogRef.current.showModal();
	}

    return <section className="list-container">
        <div className="list-container__item">
            <h4 className="mobile">WAREHOUSE</h4>
            <span>
                <Link to={`/warehouses/${warehouse.id}`}>
                    <h3>{warehouse.warehouse_name}</h3>
                </Link>
                <img src={chevron} alt="" />
            </span>
        </div>
        <div className="list-container__item">
            <h4 className="mobile">CONTACT NAME</h4>
            <p className="p2">{warehouse.contact_name}</p>
        </div>
        <div className="list-container__item">
            <h4 className="mobile">ADDRESS</h4>
            <p className="p2">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
        </div>
        <div className="list-container__item">
            <h4 className="mobile">CONTACT INFORMATION</h4>
            <p className="p2">{warehouse.contact_phone}</p>
            <p className="p2">{warehouse.contact_email}</p>
        </div>
        <div className="list-container__item--col5">
            <img src={del} className="btn-delete" alt="Delete" onClick={toggleModal} />
            <DeleteWarehouse 
                warehouse_name={warehouse.warehouse_name} 
                id={warehouse.id} 
                toggleModal={toggleModal} 
                ref={dialogRef} 
                setUpdating={setUpdating}
            />
            <Link to={`/warehouses/${warehouse.id}/edit`} setUpdating={setUpdating}>
                <img src={edit} alt="Edit" />
            </Link>
        </div>
    </section>
}

export default WarehouseRow;