import "./WarehouseDetailsPage.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WarehouseDetailsPage = () => {
	return (
		<div>
			<main>
				<div className="main-header">
					<button className="back-btn"></button>
					<h1 className="warehouse-name"></h1>
					<button className="edit-btn">
						<img />
						Edit
					</button>
				</div>
				<div className="warehouse-info">
					<div className="warehouse-info__address"></div>
					<div className="warehouse-info__contact"></div>
				</div>
				{/* <div>inventory list</div> */}
			</main>
		</div>
	);
};

export default WarehouseDetailsPage;
