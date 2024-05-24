import "./AddWarehouse.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import BackButton from "../BackButton/BackButton";
import CancelButton from "../CancelButton/CancelButton";

const AddWarehouse = () => {
	const [warehouseName, setWarehouseName] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [contactName, setContactName] = useState("");
	const [position, setPosition] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	let navigate = useNavigate();

	const handleChangeState = (event, setState) => {
		let newState = event.target.value;
		setState(newState);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let newWarehouseData = {
			warehouse_name: warehouseName,
			address: streetAddress,
			city,
			country,
			contact_name: contactName,
			contact_position: position,
			contact_phone: phone,
			contact_email: email
		}

		axios.post("http://localhost:8080/api/warehouses", newWarehouseData).then((response) => console.log(response.data)).catch((err) => console.log(err));

		// only navigate away if post successful ***********
		navigate("/");
	}

	return (
		<>
			<section className="main-header main-header--form">
				<Link to={"/"} className="back-button-container">
					<BackButton />
				</Link>
				<h1>Add New Warehouse</h1>
			</section>
			<form className="form-wrapper" onSubmit={handleSubmit}>
				<section className="form-fields">
					<section className="form-section form-section--warehouse">
						<h2 className="form-section__header">Warehouse Details</h2>
						<div className="form-section__input-wrapper">
							<div className="warehouse-details__name">
								<label className="form-label">
									Warehouse Name
									<input 
										className="form-input" 
										type="text" 
										name="warehouse-name" 
										placeholder="Warehouse Name"
										onChange={(event) => handleChangeState(event, setWarehouseName)}
										value={warehouseName}
									/>
								</label>
							</div>
							<div className="warehouse-details__street">
								<label className="form-label">
									Street Address
									<input 
										className="form-input" 
										type="text" 
										name="street-address" 
										placeholder="Street Address" 
										onChange={(event) => handleChangeState(event, setStreetAddress)}
										value={streetAddress}
									/>
								</label>
							</div>
							<div className="warehouse-details__city">
								<label className="form-label">
									City
									<input 
										className="form-input" 
										type="text" 
										name="city" 
										placeholder="City" 
										onChange={(event) => handleChangeState(event, setCity)}
										value={city}
									/>
								</label>
							</div>
							<div className="warehouse-details__country">
								<label className="form-label">
									Country
									<input 
										className="form-input" 
										type="text" 
										name="country" 
										placeholder="Country" 
										onChange={(event) => handleChangeState(event, setCountry)}
										value={country}
									/>
								</label>
							</div>
						</div>
					</section>
					<section className="form-section">
						<h2 className="form-section__header">Contact Details</h2>
						<div className="form-section__input-wrapper">
							<div className="contact-details__name">
								<label className="form-label">
									Contact Name
									<input 
										className="form-input" 
										type="text" 
										name="contact-name" 
										placeholder="Contact Name" 
										onChange={(event) => handleChangeState(event, setContactName)}
										value={contactName}
									/>
								</label>
							</div>
							<div className="contact-details__position">
								<label className="form-label">
									Position
									<input 
										className="form-input" 
										type="text" 
										name="position" 
										placeholder="Position" 
										onChange={(event) => handleChangeState(event, setPosition)}
										value={position}
									/>
								</label>
							</div>
							<div className="contact-details__phone">
								<label className="form-label">
									Phone Number
									<input 
										className="form-input" 
										type="text" 
										name="phone" 
										placeholder="Phone Number" 
										onChange={(event) => handleChangeState(event, setPhone)}
										value={phone}
									/>
								</label>
							</div>
							<div className="contact-details__email">
								<label className="form-label">
									Email
									<input 
										className="form-input" 
										type="text" 
										name="email" 
										placeholder="Email" 
										onChange={(event) => handleChangeState(event, setEmail)}
										value={email}
									/>
								</label>
							</div>
						</div>
					</section>
				</section>
				<section className="buttons">
					<CancelButton />
					<button className="btn__add btn__add--form" type="submit">+ Add Warehouse</button>
				</section>
			</form>
		</>
	);
};

export default AddWarehouse;
