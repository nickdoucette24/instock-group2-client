import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StockTag from '../StockTag/StockTag';

import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import DeleteInventoryModal from '../../components/DeleteInventoryModal/DeleteInventoryModal';

import './InventoryItemRow.scss';

const InventoryItemRow = ({ inventoryItem, isFirst, setUpdating }) => {
    const [isWarehouse, setIsWarehouse] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const {
        id,
        warehouse_name: warehouse,
        item_name: item,
        category,
        status,
        quantity,
    } = inventoryItem;

    const handleNavToEdit = () => {
        navigate(`/inventories/${id}/edit`);
    }

    const handleNavToDetails = ()=> {
        navigate(`/inventories/${id}`);
    }
    
    const dialogRef = useRef(null);
    const toggleModal = () => {
        if (!dialogRef.current) return;
        dialogRef.current.hasAttribute("open")
        ? dialogRef.current.close()
        : dialogRef.current.showModal();
    }

    useEffect(() => {
        if (location.pathname.includes('warehouses')) {
            setIsWarehouse(true);
        }
    }, [location.pathname]);


  return (
    <div className={`item-container ${isFirst ? 'first-row' : ''}`}>
        <div className='details-container'>
            <div className='info-container__item'>
                <h4 className='info-container__item--label'>INVENTORY ITEM</h4>
                <div className='item-links' onClick={() => handleNavToDetails()}>
                    <h3 className='item-links__name'>{item}</h3>
                    <img className='item-links__chevron' src={chevronIcon} alt='chevron-icon' />
                </div>
                <h4 className='info-container__item--heading'>CATEGORY</h4>
                <p className='info-container__item--category'>{category}</p>
            </div>
            <p className='long-row spacing-mod'>{category}</p>
            <div className='details-container__item'>
                <h4 className='details-container__item--status'>STATUS</h4>
                <div className='details-container__item--stock spacing-mod'>
                    <StockTag status={status} />
                </div>
                <h4 className='details-container__item--heading'>QUANTITY</h4>
                <p className='details-container__item--quantity'>{quantity}</p>
                {!isWarehouse ? (
                    <>
                        <h4 className='details-container__item--location'>WAREHOUSE</h4>
                        <p className='details-container__item--warehouse'>{warehouse}</p>
                    </>
                ) : (
                    null
                )
                }
            </div>
            <p className='long-row spacing-mod'>{quantity}</p>
            {isWarehouse ? (
                null
            ) : (
                <p className='long-row spacing-mod'>{warehouse}</p>
            )}
            <div className='icon-container'>
                <img className='icon-container__delete' src={deleteIcon} alt='delete icon for deleting an item' onClick={toggleModal}/>
                <img className='icon-container__edit' src={editIcon} onClick={() => handleNavToEdit()} alt='pencil icon for editing an item' />
            </div>
        </div>
        <DeleteInventoryModal 
            item={item} 
            id={id} 
            toggleModal={toggleModal} 
            ref={dialogRef}
            setUpdating={setUpdating}
        />
    </div>
  )
}

export default InventoryItemRow;