import { Link } from "react-router-dom";
import InventoryItemRow from "../InventoryItemRow/InventoryItemRow";
import Sorter from '../Sorter/Sorter';
import './InventoryList.scss';

const InventoryList = ({loading, inventoryItems}) => {
  return (
    <main className='content-wrapper'>
      <section className="content-container">
        <div className="inventory-heading">
          <h1 className="inventory-heading__title">Inventory</h1>
          <div className="inventory-heading__item-container">
            <div className='search-container'>
              <input type="search" name="search" id="search" className="inventory-heading__item-container--search" placeholder='Search...' />
            </div>
            <Link to='/inventories/add' className="inventory-heading__item-container--addItem">+ Add New Item</Link>
          </div>
        </div>
        <div className="inventory-list">
          <Sorter />
          {loading ? (
            <p className='list-loading'>Loading...</p>
          ) : (
            inventoryItems.map((inventoryItem, index) => (
              <InventoryItemRow key={inventoryItem.id} inventoryItem={inventoryItem} isFirst={index === 0} />
            ))
          )
        }
        </div>
      </section>
    </main>
  )
}

export default InventoryList;