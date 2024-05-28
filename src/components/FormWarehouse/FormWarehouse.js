import './FormWarehouse.scss';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import CancelButton from "../CancelButton/CancelButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import InvalidErrorMessage from "../InvalidErrorMessage/InvalidErrorMessage";

const FormWarehouse = ({ submitButton, setUpdating }) => {
	const [errors, setErrors] = useState({});
	const [formValues, setFormValues] = useState({
		warehouse_name: "",
		address: "",
		city: "",
		country: "",
		contact_name: "",
		contact_position: "",
		contact_phone: "",
		contact_email: ""
	});

	let navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

	useEffect(() => {
		if (location.pathname.includes("/edit")) {
				axios.get(`http://localhost:8080/api/warehouses/${id}}`).then((response) => {
					const {
						address, 
						city, 
						contact_email, 
						contact_name, 
						contact_phone, 
						contact_position, 
						country, 
						warehouse_name
					} = response.data;
					const warehouseData = {
						address, 
						city, 
						contact_email, 
						contact_name, 
						contact_phone, 
						contact_position, 
						country, 
						warehouse_name
					};
					setFormValues(warehouseData);
				})
		}
	}, [])

	const handleChangeState = (event) => {
		const { name, value } = event.target;
		setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const phoneRegex = /^(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		let formErrors = {};
		if (!formValues.warehouse_name) formErrors.warehouse_name = true;
		if (!formValues.address) formErrors.address = true;
		if (!formValues.city) formErrors.city = true;
		if (!formValues.country) formErrors.country = true;
		if (!formValues.contact_name) formErrors.contact_name = true;
		if (!formValues.contact_position) formErrors.contact_position = true;
		if (!formValues.contact_phone) formErrors.contact_phone = true;
		if (!phoneRegex.test(formValues.contact_phone)) formErrors.invalid_phone = true;
		if (!formValues.contact_email) formErrors.contact_email = true;
		if (!emailRegex.test(formValues.contact_email)) formErrors.invalid_email = true;
		setErrors(formErrors);

		if (Object.keys(formErrors).length === 0 && location.pathname.includes("/add")) {
      	// No errors, form is valid
			axios.post("http://localhost:8080/api/warehouses", formValues).then((response) => console.log(response.data)).catch((err) => console.log(err));
			setUpdating(true);
			navigate("/");
    	}

		if (Object.keys(formErrors).length === 0 && location.pathname.includes("/edit")) {
      	// No errors, form is valid
			axios.put(`http://localhost:8080/api/warehouses/${id}`, formValues).then((response) => console.log(response.data)).catch((err) => console.log(err));
			setUpdating(true);
			navigate("/");
    	}
	}

  return (
			<form className="form-wrapper" onSubmit={handleSubmit}>
				<section className="form-fields">
					<section className="form-section form-section--warehouse">
						<h2 className="form-section__header">Warehouse Details</h2>
						<div className="form-section__input-wrapper">
							<div className="warehouse-details__name">
								<label className="form-label">
									Warehouse Name
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="warehouse_name" 
										placeholder="Warehouse Name"
										onChange={handleChangeState}
										value={formValues.warehouse_name}
									/>
									{errors.warehouse_name && <ErrorMessage />}
								</label>
							</div>
							<div className="warehouse-details__street">
								<label className="form-label">
									Street Address
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="address" 
										placeholder="Street Address" 
										onChange={handleChangeState}
										value={formValues.address}
									/>
									{errors.address && <ErrorMessage />}
								</label>
							</div>
							<div className="warehouse-details__city">
								<label className="form-label">
									City
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="city" 
										placeholder="City" 
										onChange={handleChangeState}
										value={formValues.city}
									/>
									{errors.city && <ErrorMessage />}
								</label>
							</div>
							<div className="warehouse-details__country">
								<label className="form-label">
									Country
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="country" 
										placeholder="Country" 
										onChange={handleChangeState}
										value={formValues.country}
									/>
									{errors.country && <ErrorMessage />}
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
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="contact_name" 
										placeholder="Contact Name" 
										onChange={handleChangeState}
										value={formValues.contact_name}
									/>
									{errors.contact_name && <ErrorMessage />}
								</label>
							</div>
							<div className="contact-details__position">
								<label className="form-label">
									Position
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="contact_position" 
										placeholder="Position" 
										onChange={handleChangeState}
										value={formValues.contact_position}
									/>
									{errors.contact_position && <ErrorMessage />}
								</label>
							</div>
							<div className="contact-details__phone">
								<label className="form-label">
									Phone Number
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="contact_phone" 
										placeholder="Phone Number" 
										onChange={handleChangeState}
										value={formValues.contact_phone}
									/>
									{errors.contact_phone && <ErrorMessage />}
									{(!errors.contact_phone && errors.invalid_phone) && <InvalidErrorMessage field={"phone number"} />}
								</label>
							</div>
							<div className="contact-details__email">
								<label className="form-label">
									Email
									<input 
										className={errors.warehouse_name ? "form-input--error" : "form-input"}
										type="text" 
										name="contact_email" 
										placeholder="Email" 
										onChange={handleChangeState}
										value={formValues.contact_email}
									/>
									{errors.contact_email && <ErrorMessage />}
									{(!errors.contact_email && errors.invalid_email) && <InvalidErrorMessage field={"email address"} />}
								</label>
							</div>
						</div>
					</section>
				</section>
				<section className="buttons">
					<CancelButton />
					<button className="btn__add btn__add--form" type="submit">{submitButton}</button>
				</section>
			</form>
  );
};

export default FormWarehouse;