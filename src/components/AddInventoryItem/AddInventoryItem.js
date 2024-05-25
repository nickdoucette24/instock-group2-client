import { useNavigate } from "react-router-dom";

import backChevron from '../../assets/Icons/arrow_back-24px.svg';
import "./AddInventoryItem.scss";

const AddInventoryItem = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/inventories");
  }

  return (
    <main className="addItem-section">
      <div className="addItem-container">
        <div className="addItem-heading">
          <img onClick={() => handleBack()} className="addItem-heading__icon" alt="back button chevron icon" />
          <h1 className="addItem-heading__text">Add New Inventory Item</h1>
        </div>
      </div>
    </main>
  );
};

export default AddInventoryItem;
