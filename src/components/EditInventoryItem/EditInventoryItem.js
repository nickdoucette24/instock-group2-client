import { useNavigate } from "react-router-dom";

import BackButton from "../BackButton/BackButton";
import "../EditInventoryItem/EditInventoryItem.scss";
import NewItemForm from "../FormInventory/NewItemForm";
import FormInventory from "../FormInventory/FormInventory";

const EditInventoryItem = ({ url, setUpdating }) => {
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
          <h1 className="newItem-heading__title">Edit Inventory Item</h1>
        </div>
        <hr className="newItem-heading__border"/>
        <FormInventory 
          submitButton={"Save"} 
          url={url} 
          setUpdating={setUpdating}
        />
			</section>
		</main>
  );
};

export default EditInventoryItem;
