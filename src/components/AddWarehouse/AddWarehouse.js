import "./AddWarehouse.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

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

	// Sucks to brute force it like this but I don't think I have time to find a better way
	const handleChangeWarehouseName = (event) => {
		let newWarehouseName = event.target.value;
		setWarehouseName(newWarehouseName);
	};
	const handleChangeStreetAddress = (event) => {
		let newStreetAddress = event.target.value;
		setStreetAddress(newStreetAddress);
	};
	const handleChangeCity = (event) => {
		let newCity = event.target.value;
		setCity(newCity);
	};
	const handleChangeCountry = (event) => {
		let newCountry = event.target.value;
		setCountry(newCountry);
	};
	const handleChangeContactName = (event) => {
		let newContactName = event.target.value;
		setContactName(newContactName);
	};
	const handleChangePosition = (event) => {
		let newPosition = event.target.value;
		setPosition(newPosition);
	};
	const handleChangePhone = (event) => {
		let newPhone = event.target.value;
		setPhone(newPhone);
	};
	const handleChangeEmail = (event) => {
		let newEmail = event.target.value;
		setEmail(newEmail);
	};

	return (
		<>
			<section className="main-header main-header--form">
				<Link to={"/"} className="back-button-container">
					<BackButton />
				</Link>
				<h1>Add New Warehouse</h1>
			</section>
			<form className="form-wrapper">
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
										onChange={handleChangeWarehouseName}
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
										onChange={handleChangeStreetAddress}
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
										onChange={handleChangeCity}
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
										onChange={handleChangeCountry}
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
										onChange={handleChangeContactName}
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
										onChange={handleChangePosition}
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
										onChange={handleChangePhone}
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
										onChange={handleChangeEmail}
										value={email}
									/>
								</label>
							</div>
						</div>
					</section>
				</section>
				<section className="buttons">
					<CancelButton />
					<button className="btn__add btn__add--form">+ Add Warehouse</button>
				</section>
			</form>
		</>
	);
};

export default AddWarehouse;
