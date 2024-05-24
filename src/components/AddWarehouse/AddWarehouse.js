import "./AddWarehouse.scss";

import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import CancelButton from "../CancelButton/CancelButton";

const AddWarehouse = () => {
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
									<input className="form-input" type="text" name="warehouse-name" placeholder="Warehouse Name" />
								</label>
							</div>
							<div className="warehouse-details__street">
								<label className="form-label">
									Street Address
									<input className="form-input" type="text" name="street-address" placeholder="Street Address" />
								</label>
							</div>
							<div className="warehouse-details__city">
								<label className="form-label">
									City
									<input className="form-input" type="text" name="city" placeholder="City" />
								</label>
							</div>
							<div className="warehouse-details__country">
								<label className="form-label">
									Country
									<input className="form-input" type="text" name="country" placeholder="Country" />
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
									<input className="form-input" type="text" name="contact-name" placeholder="Contact Name" />
								</label>
							</div>
							<div className="contact-details__position">
								<label className="form-label">
									Position
									<input className="form-input" type="text" name="position" placeholder="Position" />
								</label>
							</div>
							<div className="contact-details__phone">
								<label className="form-label">
									Phone Number
									<input className="form-input" type="text" name="phone" placeholder="Phone Number" />
								</label>
							</div>
							<div className="contact-details__email">
								<label className="form-label">
									Email
									<input className="form-input" type="text" name="email" placeholder="Email" />
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
