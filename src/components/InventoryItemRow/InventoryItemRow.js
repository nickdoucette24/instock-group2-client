import { Link } from 'react-router-dom';

import './InventoryItemRow.scss';

const InventoryItemRow = ({ inventoryItem }) => {
  return (
    <div className='item-container'>
        <div className='details-container'>
            <div className='itemInfo-container'>
                <h4 className='itemInfo-container__label'>test</h4>
                <Link to={`/inventories/${inventoryItem.id}`} className='itemInfo-container__name'>
                    <div className='item-links'>
                        <h3 className='item-links__name'>test</h3>
                        <i className='item-links__chevron' />
                    </div>
                </Link>
                <h4 className='itemInfo-container__heading'>test</h4>
                <p className='itemInfo-container__category'>test</p>
            </div>
            <div className='itemDetails-container'>
                <h4 className='itemDetails-container__status'>test</h4>
                <div className='itemDetails-container__stock'>test</div>
                <h4 className='itemDetails-container__heading'>test</h4>
                <p className='itemDetails-container__quantity'>test</p>
                <h4 className='itemDetails-container__location'>test</h4>
                <p className='itemDetails-container__warehouse'>test</p>
            </div>
            <div className='icon-container'>
                <i className='icon-container__delete' />
                <Link to={`/inventories/${inventoryItem.id}/edit`}>
                    <i className='icon-container__edit' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default InventoryItemRow;