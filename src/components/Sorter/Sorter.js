import sortIcon from '../../assets/Icons/sort-24px.svg';

import './Sorter.scss';

const Sorter = () => {
  return (
    <div className="sorter-container">
      <div className='sorter-info'>
        <div className='sorter-info__field'>
          <p className='sorter-info__header'>INVENTORY ITEM</p>
          <img className='sort-icon' src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <p className='sorter-info__header'>CATEGORY</p>
          <img className='sort-icon' src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <p className='sorter-info__header'>STATUS</p>
          <img className='sort-icon' src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <p className='sorter-info__header'>QTY</p>
          <img className='sort-icon' src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field'>
          <p className='sorter-info__header'>WAREHOUSE</p>
          <img className='sort-icon' src={sortIcon} alt='sort directory icon' />
        </div>
        <div className='sorter-info__field actions'>
          <p className='sorter-info__header'>ACTIONS</p>
        </div>
      </div>
    </div>
  )
}

export default Sorter;