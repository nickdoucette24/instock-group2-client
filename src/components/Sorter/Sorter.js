import sortIcon from '../../assets/Icons/sort-24px.svg';

import './Sorter.scss';
import '../WarehouseList/WarehouseList.scss';

const Sorter = () => {
  return (
    <div className="sorter-container">
      <div className='sorty-selectors'>
        <div className='sorty-selectors__item'>
          <h4>INVENTORY ITEM</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorty-selectors__item'>
          <h4>CATEGORY</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorty-selectors__item'>
          <h4>STATUS</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorty-selectors__item'>
          <h4>QTY</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorty-selectors__item'>
          <h4>WAREHOUSE</h4>
          <img src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorty-selectors__item actions'>
          <h4>ACTIONS</h4>
        </div>
      </div>
    </div>
  )
}

export default Sorter;