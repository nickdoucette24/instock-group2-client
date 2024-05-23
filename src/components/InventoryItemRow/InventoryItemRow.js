import { useNavigate } from 'react-router-dom';
import StockTag from '../StockTag/StockTag';

import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import './InventoryItemRow.scss';

const InventoryItemRow = ({ inventoryItem, isFirst }) => {
    const navigate = useNavigate();

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

    // const handleDeleteModal = () => {
    //     // Handle delete modal
    // }

  return (
    <div className={`item-container ${isFirst ? 'first-row' : ''}`}>
        <div className='details-container'>
            <div className='itemInfo-container'>
                <h4 className='itemInfo-container__label'>INVENTORY ITEM</h4>
                <div className='item-links' onClick={() => handleNavToDetails()}>
                    <h3 className='item-links__name'>{item}</h3>
                    <img className='item-links__chevron' src={chevronIcon} alt='chevron-icon' />
                </div>
                <h4 className='itemInfo-container__heading'>CATEGORY</h4>
                <p className='itemInfo-container__category'>{category}</p>
            </div>
            <div className='itemDetails-container'>
                <h4 className='itemDetails-container__status'>STATUS</h4>
                <div className='itemDetails-container__stock'>
                    <StockTag status={status} />
                </div>
                <h4 className='itemDetails-container__heading'>QUANTITY</h4>
                <p className='itemDetails-container__quantity'>{quantity}</p>
                <h4 className='itemDetails-container__location'>WAREHOUSE</h4>
                <p className='itemDetails-container__warehouse'>{warehouse}</p>
            </div>
            <div className='icon-container'>
                <img className='icon-container__delete' src={deleteIcon} alt='delete icon for deleting an item' />
                <img className='icon-container__edit' src={editIcon} onClick={() => handleNavToEdit()} alt='pencil icon for editing an item' />
            </div>
        </div>
    </div>
  )
}

export default InventoryItemRow;