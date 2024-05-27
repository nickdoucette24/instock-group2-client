import { useNavigate, useLocation } from "react-router-dom";

import "./CancelButton.scss";


const CancelButton = () => {
	let navigate = useNavigate();
	const location = useLocation();


	const handleCancel = () => {
		window.scrollTo(0, 0);
		if (location.pathname.includes('warehouses')) {
			navigate('/');
		} else if (location.pathname.includes('inventories')) {
			navigate('/inventories');
		}
	}

	return (
		<button className="cancel-button" type="button" onClick={handleCancel}>
			<h3>Cancel</h3>
		</button>
	);
};

export default CancelButton;
