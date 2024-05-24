import chevron from "../../assets/Icons/chevron_right-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import del from "../../assets/Icons/delete_outline-24px.svg";
import sortBtn from "../../assets/Icons/sort-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./WarehouseList.scss";

const WarehouseList = () => {
	const [warehouses, setWarehouses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get("http://localhost:8080/api/warehouses")
			.then((response) => {
				setWarehouses(response.data);
				setLoading(false);
				return warehouses;
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line
	}, []);

	// TODO: Add sorting functionality
	const handleSort = () => {
		warehouses.sort();
	};

	if (!loading)
		return (
			<>
				<div className="floaty-container__top">
					<h1>Warehouses</h1>
					<span className="floaty-container__top--controls">
						<input className="search" type="text" placeholder="Search..." />
						<Link to="/warehouses/add">
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
							<section className="warehouse-container">
								<div className="warehouse-container__item">
									<h4 className="mobile">WAREHOUSE</h4>
									<span>
										<Link to={`/warehouses/${warehouse.id}`}>
											<h3>{warehouse.warehouse_name}</h3>
										</Link>
										<img src={chevron} alt="" />
									</span>
								</div>
								<div className="warehouse-container__item">
									<h4 className="mobile">CONTACT NAME</h4>
									<p className="p2">{warehouse.contact_name}</p>
								</div>
								<div className="warehouse-container__item">
									<h4 className="mobile">ADDRESS</h4>
									<p className="p2">
										{warehouse.address}, {warehouse.city}, {warehouse.country}
									</p>
								</div>
								<div className="warehouse-container__item">
									<h4 className="mobile">CONTACT INFORMATION</h4>
									<p className="p2">{warehouse.contact_phone}</p>
									<p className="p2">{warehouse.contact_email}</p>
								</div>
								<div className="warehouse-container__item--col5">
									<Link to="/warehouses/delete/:id">
										<img src={del} alt="Delete" />
									</Link>
									<Link to="/warehouses/edit/:id">
										<img src={edit} alt="Edit" />
									</Link>
								</div>
							</section>
							<span className="divider"></span>
						</>
					);
				})}
			</>
		);
};

export default WarehouseList;
