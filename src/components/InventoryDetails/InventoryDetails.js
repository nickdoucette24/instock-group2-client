import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./InventoryDetails.scss";
import "../../pages/WarehousesPage/WarehousesPage.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"

const InventoryDetails = () => {
  const [item, setItem] = useState({});
  const [stockStyle, setStockStyle] = useState('');
  const [stockText, setstockText] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Get the item
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/inventories/${id}`)
    .then(response => {
      const itemData = response.data[0];
      setItem(itemData);

      if (itemData.quantity > 0) {
        setStockStyle('in-stock-tag');
        setstockText('IN STOCK');
      }
      else {
        setStockStyle('out-of-stock-tag');
        setstockText('OUT OF STOCK');
      }
      setLoading(false);
    })
    // eslint-disable-next-line
  }, []);

  if (!loading) return <main>
    <div className="floaty-container">
      <section className="details__top">
        <div className="details__name">
          <Link to="/inventories">
            <img src={backArrow} alt="Go back" />
          </Link>
          <h1>{item.item_name}</h1>
        </div>
        <Link to={`/inventories/${id}/edit`}>
          <div className="btn-container">
            <img src={editIcon} alt="" />
          </div>
        </Link>
      </section>
      <div className="divider"></div>
      <section className="details__main">
        <article className="details__subsection">
          <div className="details__div">
            <h4>ITEM DESCRIPTION:</h4>
            <p className="p2">{item.description}</p>
          </div>
          <div className="details__div">
            <h4>CATEGORY:</h4>
            <p className="p2">{item.category}</p>
          </div>
        </article>
        <div className="details__wall"></div>
        <article className="details__subsection">
          <span className="details__in-stock">
            <div>
              <h4>STATUS:</h4>
              <span className={stockStyle}>
                <h4>{stockText}</h4>
              </span>
            </div>
            <div className="details__div">
              <h4>QUANTITY:</h4>
              <p className="p2">{item.quantity}</p>
            </div>
          </span>
            <div className="details__div">
              <h4>WAREHOUSE:</h4>
              <p className="p2">{item.warehouse_name}</p>
            </div>
          </article>
      </section>
    </div>
  </main>;
};

export default InventoryDetails;
