import { useNavigate } from "react-router-dom";

import BackButton from "../BackButton/BackButton";
import "./AddInventoryItem.scss";
import NewItemForm from "../FormInventory/NewItemForm";

const AddInventoryItem = ({ url }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/inventories");
  }

  return (
		<main className="content-wrapper">
			<section className="content-container">
        <div className="newItem-heading">
          <div onClick={() => handleBack()} className="newItem-heading__back">
            <BackButton />
          </div>
          <h1 className="newItem-heading__title">Add New Inventory Item</h1>
        </div>
        <hr className="newItem-heading__border"/>
        <NewItemForm submitButton={"+ Add Item"} url={url} />
			</section>
		</main>
  );
};

export default AddInventoryItem;
