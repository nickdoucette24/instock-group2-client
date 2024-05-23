import "./AddWarehouse.scss";

import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

const AddWarehouse = () => {
	return (
		<>
			<section className="main-header">
				<Link to={"/"} className="back-button-container">
					<BackButton />
				</Link>
				<h1>Add New Warehouse</h1>
			</section>
			<form>
				<section className="form-fields">
					<section className="warehouse-details">
						<h2>Warehouse Details</h2>
						<div className="warehouse-details__name">
							<label className="form-label">
								Warehouse Name
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="warehouse-details__street">
							<label className="form-label">
								Street Address
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="warehouse-details__city">
							<label className="form-label">
								City
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="warehouse-details__country">
							<label className="form-label">
								Country
								<input className="form-input" type="text" />
							</label>
						</div>
					</section>
					<section className="contact-details">
						<h2>Contact Details</h2>
						<div className="contact-details__name">
							<label className="form-label">
								Contact Name
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="contact-details__position">
							<label className="form-label">
								Position
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="contact-details__phone">
							<label className="form-label">
								Phone Number
								<input className="form-input" type="text" />
							</label>
						</div>
						<div className="contact-details__email">
							<label className="form-label">
								Email
								<input className="form-input" type="text" />
							</label>
						</div>
					</section>
				</section>
				<section className="buttons"></section>
			</form>
		</>
	);
};

export default AddWarehouse;
