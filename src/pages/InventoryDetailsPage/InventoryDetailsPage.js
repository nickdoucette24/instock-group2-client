import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryDetailsPage.scss";
import "../HomePage/HomePage.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"

const InventoryDetails = () => {
  const [item, setItem] = useState({});
  const [stockStyle, setStockStyle] = useState('');
  const [stockText, setstockText] = useState('');
  const [loading, setLoading] = useState(true);

  // Get the item
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/api/inventories/1")
    .then(response => {
      setItem(response.data[0]);
      if (item.quantity > 0) {
        setStockStyle('in-stock');
        setstockText('IN STOCK');
      }
      else {
        setStockStyle('out-of-stock');
        setstockText('OUT OF STOCK');
      }
      setLoading(false);
    })
  }, []);

  if (!loading) return <main>
      <div className="floaty-container">
      <section className="details__top">
        <div className="details__name">
          <img src={backArrow} alt="Go back" />
          <h1>{item.item_name}</h1>
        </div>
        <img src={editIcon} alt="" />
      </section>
      <div className="divider"></div>
      <section className="details__main">
        <div className="details__div">
          <h4>ITEM DESCRIPTION:</h4>
          <p className="p1">{item.description}</p>
        </div>
        <div className="details__div">
          <h4>CATEGORY:</h4>
          <p className="p1">{item.category}</p>
        </div>
        <span className="details__in-stock">
          <div>
            <h4>STATUS:</h4>
            <span className={stockStyle}>
              <h4>{stockText}</h4>
            </span>
          </div>
          <div className="details__div">
            <h4>QUANTITY:</h4>
            <p className="p1">{item.quantity}</p>
          </div>
        </span>
      </section>
    </div>
  </main>;
};

export default InventoryDetails;
