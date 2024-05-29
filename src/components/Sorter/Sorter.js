import sortIcon from '../../assets/Icons/sort-24px.svg';

import './Sorter.scss';
import '../InventoryItemRow/InventoryItemRow.scss'

const Sorter = () => {
  return (
    <div className="sorter-container">
      <div className='sorter-info'>
        <div className='sorter-info__field'>
          <h4>INVENTORY ITEM</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <h4>CATEGORY</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <h4>STATUS</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <h4>QTY</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <h4>WAREHOUSE</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field actions'>
          <h4>ACTIONS</h4>
        </div>
      </div>
    </div>
  )
}

export default Sorter;