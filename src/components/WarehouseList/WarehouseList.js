import sortBtn from "../../assets/Icons/sort-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import WarehouseRow from "../WarehouseRow/WarehouseRow";

import "./WarehouseList.scss";

const WarehouseList = ({ updating, setUpdating }) => {
	const [warehouses, setWarehouses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get("http://localhost:8080/api/warehouses")
			.then((response) => {
				setWarehouses(response.data);
				setLoading(false);
				setUpdating(false);
				return warehouses;
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line
	}, [updating]);

	// TODO: Add sorting functionality
	const handleSort = () => {
		warehouses.sort();
	};

	if (!loading)
		return (
			<main className="floaty-container">
				<div className="floaty-container__top">
					<h1>Warehouses</h1>
					<span className="floaty-container__top--controls">
						<input className="search" type="text" placeholder="Search..." />
						<Link to="/warehouses/add" setUpdating={setUpdating}>
							{" "}
							{/* Add new warehouse */}
							<button className="btn__add">+ Add New Warehouse</button>
						</Link>
					</span>
				</div>
				<div className="sorty-selectors">
					<span className="sorty-selectors__item">
						<h4>WAREHOUSE</h4>
						<img src={sortBtn} onClick={handleSort()} alt="sort" />
					</span>
					<span className="sorty-selectors__item">
						<h4>CONTACT NAME</h4>
						<img src={sortBtn} onClick={handleSort()} alt="sort" />
					</span>
					<span className="sorty-selectors__item">
						<h4>ADDRESS</h4>
						<img src={sortBtn} onClick={handleSort()} alt="sort" />
					</span>
					<span className="sorty-selectors__item">
						<h4>CONTACT INFORMATION</h4>
						<img src={sortBtn} onClick={handleSort()} alt="sort" />
					</span>
					<span className="sorty-selectors__item col5">
						<h4>ACTIONS</h4>
					</span>
				</div>
				{warehouses.map((warehouse) => {
					return (
						<>
							<WarehouseRow 
								warehouse={warehouse}
								setUpdating={setUpdating}
							/>
							<span className="divider"></span>
						</>
					);
				})}
			</main>
		);
};

export default WarehouseList;
